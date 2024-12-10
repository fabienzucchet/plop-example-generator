"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const feeling_1 = require("./generators/feeling");
function default_1(plop) {
    plop.setGenerator("feelings", (0, feeling_1.genFeeling)());
}
