"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var index_1 = require("./index");
it("create modifiers", function () {
    expect(index_1.createModifier("class", "id")).toEqual({ className: "class", id: "id" });
});
it("mix modifiers", function () {
    var modOne = { className: "one", id: "" };
    var modTwo = { className: "two", id: "two" };
    expect(index_1.mixModifiers(modOne, modTwo)).toEqual({ className: "one two", id: "two" });
});
it("modify element", function () {
    var mod = { className: "modded", id: "" };
    var elem = (react_1["default"].createElement("div", null));
    var moddedElem = index_1.modifyElement(elem, mod);
    console.log(moddedElem.props);
    expect(true).toBe(true);
});
it("auto mixs head mod with theme", function () {
    var mod = { className: "mod", id: "" };
    var theme = { head: { className: "head", id: "" } };
    var props = { theme: theme, mod: mod };
    var resultMod = index_1.getHeadModifierByProps(props);
    expect(resultMod.className).toEqual("mod head");
});
//# sourceMappingURL=index.test.js.map