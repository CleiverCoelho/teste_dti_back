import supertest from "supertest";

import app from "../../src/app";
import { cleanDb } from "../utils";
import { buildPetshop } from "../factories/petshops-factory";

const api = supertest(app);

beforeEach(async () => {
  await cleanDb();
})

describe("GET /petshops", () => {
  it("should return all participants", async () => {
    const petshop = await buildPetshop(1000);

    const { status, body } = await api.get("/petshop");
    expect(status).toBe(200);
  });
})
