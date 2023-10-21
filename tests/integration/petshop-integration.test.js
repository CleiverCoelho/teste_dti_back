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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const utils_1 = require("../utils");
const petshop_factory_1 = require("../factories/petshop-factory");
const http_status_1 = __importDefault(require("http-status"));
const api = (0, supertest_1.default)(app_1.default);
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, utils_1.cleanDb)();
}));
describe("GET /petshop", () => {
    it("should return all participants", () => __awaiter(void 0, void 0, void 0, function* () {
        const petshop = yield (0, petshop_factory_1.buildPetshop)();
        const { status, body } = yield api.get("/petshop");
        expect(status).toBe(200);
        expect(body).toEqual([Object.assign(Object.assign({}, petshop), { createdAt: petshop.createdAt.toISOString(), updatedAt: petshop.updatedAt.toISOString() })]);
    }));
});
describe("POST /petshop", () => {
    it("should create a petshop", () => __awaiter(void 0, void 0, void 0, function* () {
        const petshop = (0, petshop_factory_1.buildPetshopInput)();
        const { status, body } = yield api.post("/petshop").send(petshop);
        expect(status).toBe(http_status_1.default.OK);
    }));
    it("should return status 400 for missing 'distance' argument on body input", () => __awaiter(void 0, void 0, void 0, function* () {
        const petshop = (0, petshop_factory_1.buildPetshopInputWithoutDistance)();
        const { status, body } = yield api.post("/petshop").send(petshop);
        expect(status).toBe(http_status_1.default.BAD_REQUEST);
        expect(body).toEqual({
            "error": "\"distance\" is required"
        });
    }));
});
