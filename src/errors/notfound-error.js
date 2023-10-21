"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = void 0;
function notFoundError(message) {
    const errorMsg = message || "Not Found";
    return {
        name: "NotFoundError",
        message: errorMsg
    };
}
exports.notFoundError = notFoundError;
