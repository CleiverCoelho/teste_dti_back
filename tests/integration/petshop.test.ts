import supertest from "supertest";

import app from "../../src/app";
import { cleanDb } from "../utils";
import { buildPetshop, buildPetshopInput, buildPetshopInputWithoutDistance } from "../factories/petshop-factory";
import exp from "constants";
import httpStatus from "http-status";

const api = supertest(app);

beforeEach(async () => {
  await cleanDb();
})

describe("GET /petshop", () => {
  it("should return all participants", async () => {
    const petshop = await buildPetshop();

    const { status, body } = await api.get("/petshop");
    expect(status).toBe(200);
    expect(body).toEqual([{
      ...petshop, 
      createdAt: petshop.createdAt.toISOString(), 
      updatedAt: petshop.updatedAt.toISOString()
    }])
  });
})

describe("POST /petshop", () => {
  it("should create a petshop", async () => {
    const petshop = buildPetshopInput();

    const { status, body } = await api.post("/petshop").send(petshop);
    expect(status).toBe(httpStatus.OK);
  });

  it("should return status 400 for missing 'distance' argument on body input", async () => {
    const petshop = buildPetshopInputWithoutDistance();

    const { status, body } = await api.post("/petshop").send(petshop);
    expect(status).toBe(httpStatus.BAD_REQUEST);
    expect(body).toEqual({
      "error": "\"distance\" is required"
    })
  });
})