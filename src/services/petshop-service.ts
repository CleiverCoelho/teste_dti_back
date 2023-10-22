import { func, string } from "joi";
import { BestPetshop, CreatePetshop, HashPetshop } from "../protocols";
import petshopRepository from "../repositories/petshop-repository";
import { Petshop } from "@prisma/client";

async function createPetshop(petshop: CreatePetshop) {
  const petshopRes = await petshopRepository.createPetshop(petshop);

  return petshopRes;
}

async function getPetshops() {
  const petshopRes = await petshopRepository.getPetshops();

  return petshopRes;
}

async function checkBestPetshop(petDayInfos: BestPetshop) {
  const petshopRes = await petshopRepository.getPetshops();
  if(petshopRes.length === 0) return undefined;

  const isWeekend = checkForWeekEnd(petDayInfos.date);
  const hashPetshop : { [key: string] : number } = {}
  const pricesPerPetshop = petshopRes.map((petshop, index) => {
     if(isWeekend) {
        const totalPrice = calculateFinalPrice(petshop.weekEndBigPrice, petshop.weekEndSmallPrice, petDayInfos);
        hashPetshop[petshop.name] = totalPrice;
     }else{
        const totalPrice = calculateFinalPrice(petshop.weekDayBigPrice, petshop.weekDaySmallPrice, petDayInfos);
        hashPetshop[petshop.name] = totalPrice;    
     }
  })

  const bestPetshop = checkCheaperPetshop(hashPetshop, petshopRes)
  return {...bestPetshop, totalPrice: hashPetshop[bestPetshop.name]};
}

function checkClosestPetshop(indexesOfSmallest: number[], petshopRes: Petshop[]) {
  const firstClosestIndex = indexesOfSmallest[0];
  let closest = petshopRes[firstClosestIndex];
  for(let i = 0; i < indexesOfSmallest.length; i++){
    const closestIndex = indexesOfSmallest[i];
    if(closest.distance > petshopRes[closestIndex].distance) {
      closest = petshopRes[closestIndex];
    }
  }
  return closest;
}

function checkForTie( hashPetshop: { [key: string] : number }, petshopRes: Petshop[],smallest: number) {
  const indexesOfSmallest = [];
  for(let i = 0; i < petshopRes.length; i++){
    if(hashPetshop[petshopRes[i].name] === smallest){
      indexesOfSmallest.push(i);
    }
  }
  if(indexesOfSmallest.length === 1) return petshopRes[indexesOfSmallest[0]]; // index do melhor petshop está armazenado na primeira posicao do array
  else return checkClosestPetshop(indexesOfSmallest, petshopRes);
}

function checkCheaperPetshop (hashPetshop: { [key: string] : number }, petshopRes: Petshop[]) {
  let smallest = hashPetshop[petshopRes[0].name];
  for(let i = 0; i < petshopRes.length; i++){
      const petshopKey = petshopRes[i].name;
      if(smallest > hashPetshop[petshopKey]){
        smallest = hashPetshop[petshopKey]
      }
  }
  return checkForTie(hashPetshop, petshopRes, smallest);
}

function calculateFinalPrice(bigSizesPrice : number, smallSizesPrice: number, petDayInfos: BestPetshop) {
  const totalPrice = ((bigSizesPrice * petDayInfos.bigSizesCount) + (smallSizesPrice * petDayInfos.smallSizesCount)).toFixed(2);
  return parseFloat(totalPrice);
}

function checkForWeekEnd(date: string) {
  const weekDays = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
  const weekDay = weekDays[(new Date(date)).getDay()]
  if(weekDay === 'sab' || weekDay === 'dom') return true
  return false
}


export default {
  getPetshops,
  createPetshop,
  checkBestPetshop
};