"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleApplicationErrors = void 0;
const http_status_1 = __importDefault(require("http-status"));
function handleApplicationErrors(err, _req, res, next) {
    if (err.name === "NotFoundError") {
        return res.status(http_status_1.default.NOT_FOUND).send({
            message: err.message,
        });
    }
    if (err.name === "BadRequestError") {
        return res.status(http_status_1.default.BAD_REQUEST).send({
            message: err.message,
        });
    }
    /* eslint-disable-next-line no-console */
    res.status(http_status_1.default.INTERNAL_SERVER_ERROR).send({
        error: err.message,
        message: err.name,
    });
}
exports.handleApplicationErrors = handleApplicationErrors;
