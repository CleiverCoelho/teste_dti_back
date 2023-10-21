"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const petshop_repository_1 = __importDefault(require("../repositories/petshop-repository"));
function createPetshop(petshop) {
    return __awaiter(this, void 0, void 0, function* () {
        const petshopRes = yield petshop_repository_1.default.createPetshop(petshop);
        return petshopRes;
    });
}
function getPetshops() {
    return __awaiter(this, void 0, void 0, function* () {
        const petshopRes = yield petshop_repository_1.default.getPetshops();
        return petshopRes;
    });
}
function checkBestPetshop(petDayInfos) {
    return __awaiter(this, void 0, void 0, function* () {
        const petshopRes = yield petshop_repository_1.default.getPetshops();
        const isWeekend = checkForWeekEnd(petDayInfos.date);
        const hashPetshop = {};
        const pricesPerPetshop = petshopRes.map((petshop, index) => {
            if (isWeekend) {
                const totalPrice = calculateFinalPrice(petshop.weekEndBigPrice, petshop.weekEndSmallPrice, petDayInfos);
                hashPetshop[petshop.name] = totalPrice;
            }
            else {
                const totalPrice = calculateFinalPrice(petshop.weekDayBigPrice, petshop.weekDaySmallPrice, petDayInfos);
                hashPetshop[petshop.name] = totalPrice;
            }
        });
        const bestPetshop = checkCheaperPetshop(hashPetshop, petshopRes);
        return bestPetshop;
    });
}
function checkClosestPetshop(indexesOfSmallest, petshopRes) {
    const firstClosestIndex = indexesOfSmallest[0];
    let closest = petshopRes[firstClosestIndex];
    for (let i = 0; i < indexesOfSmallest.length; i++) {
        const closestIndex = indexesOfSmallest[i];
        if (closest.distance > petshopRes[closestIndex].distance) {
            closest = petshopRes[closestIndex];
        }
    }
    return closest;
}
function checkForTie(hashPetshop, petshopRes, smallest) {
    const indexesOfSmallest = [];
    for (let i = 0; i < petshopRes.length; i++) {
        if (hashPetshop[petshopRes[i].name] === smallest) {
            indexesOfSmallest.push(i);
        }
    }
    if (indexesOfSmallest.length === 1)
        return petshopRes[indexesOfSmallest[0]]; // index do melhor petshop está armazenado na primeira posicao do array
    else
        return checkClosestPetshop(indexesOfSmallest, petshopRes);
}
function checkCheaperPetshop(hashPetshop, petshopRes) {
    let smallest = hashPetshop[petshopRes[0].name];
    for (let i = 0; i < petshopRes.length; i++) {
        const petshopKey = petshopRes[i].name;
        if (smallest > hashPetshop[petshopKey]) {
            smallest = hashPetshop[petshopKey];
        }
    }
    return checkForTie(hashPetshop, petshopRes, smallest);
}
function calculateFinalPrice(bigSizesPrice, smallSizesPrice, petDayInfos) {
    const totalPrice = ((bigSizesPrice * petDayInfos.bigSizesCount) + (smallSizesPrice * petDayInfos.smallSizesCount)).toFixed(2);
    return parseFloat(totalPrice);
}
function checkForWeekEnd(date) {
    const weekDays = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
    const weekDay = weekDays[(new Date(date)).getDay()];
    if (weekDay === 'sab' || weekDay === 'dom')
        return true;
    return false;
}
exports.default = {
    getPetshops,
    createPetshop,
    checkBestPetshop
};
