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
var ButtonType;
(function (ButtonType) {
    ButtonType["Inc"] = "inc";
    ButtonType["Dec"] = "dec";
})(ButtonType || (ButtonType = {}));
var Port;
(function (Port) {
    Port["defaultPort"] = "http://localhost:3000";
})(Port || (Port = {}));
const incButton = document.getElementById("inc-button");
const decrButton = document.getElementById("decr-button");
const incCount = document.getElementById("inc-count");
const decCount = document.getElementById("dec-count");
const updateCount = (type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`${Port.defaultPort}/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ type }),
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = yield response.json();
        incCount.textContent = data.incCount.toString();
        decCount.textContent = data.decCount.toString();
    }
    catch (error) {
        console.error("Error updating count:", error);
    }
});
incButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield updateCount(ButtonType.Inc);
}));
decrButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    yield updateCount(ButtonType.Dec);
}));
