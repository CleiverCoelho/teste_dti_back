"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequestError = void 0;
function badRequestError(message) {
    const errorMsg = message || "Bad Resquest";
    return {
        name: "BadRequestError",
        message: errorMsg
    };
}
exports.badRequestError = badRequestError;
