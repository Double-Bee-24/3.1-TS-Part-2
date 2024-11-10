"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var ButtonType;
(function (ButtonType) {
    ButtonType["Inc"] = "inc";
    ButtonType["Dec"] = "dec";
})(ButtonType || (ButtonType = {}));
const app = (0, express_1.default)();
var Port;
(function (Port) {
    Port[Port["defaultPort"] = 3000] = "defaultPort";
})(Port || (Port = {}));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
const database = {
    incCount: 0,
    decCount: 0,
};
app.post("/update", (req, res) => {
    const { type } = req.body;
    switch (type) {
        case ButtonType.Inc:
            database.incCount += 1;
            break;
        case ButtonType.Dec:
            database.decCount += 1;
            break;
        default:
            res.status(400).send({ message: "Error" });
            return;
    }
    res.status(200).json(database);
});
app.listen(Port.defaultPort, () => {
    console.log(`Server is running on http://localhost:${Port.defaultPort}`);
});
