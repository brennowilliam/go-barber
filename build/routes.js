"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = require("express");
const routes = express_1.Router();
routes.get("/", (req, res) => {
    return res.json({ message: "Hello, world" });
});
exports.default = routes;
