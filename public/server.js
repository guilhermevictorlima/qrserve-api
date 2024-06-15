"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configExpress();
    }
    configExpress() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.routes();
        this.app.listen(3333);
    }
    middlewares() {
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('bateu no GET! :)');
        });
    }
}
new Server();
