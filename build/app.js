"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.server = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express_1.default.json());
    }
    routes() {
        this.server.use(routes_1.default);
    }
}
exports.default = new App().server;
