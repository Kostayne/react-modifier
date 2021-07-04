"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getHeadModByProps = exports.mixMods = exports.modElement = exports.createMod = exports.ModifiableComponent = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var ModifiableComponent = /** @class */ (function (_super) {
    __extends(ModifiableComponent, _super);
    function ModifiableComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        _this.mod = props.mod;
        _this.theme = props.theme;
        return _this;
    }
    ModifiableComponent.prototype.render = function () {
        return modElement(this.renderThemed(), getHeadModByProps(this.props));
    };
    return ModifiableComponent;
}(react_1["default"].Component));
exports.ModifiableComponent = ModifiableComponent;
function createMod(className, id) {
    if (className === void 0) { className = ""; }
    if (id === void 0) { id = ""; }
    return {
        className: className,
        id: id
    };
}
exports.createMod = createMod;
function modElement(elem, mod) {
    if (!mod) {
        console.error("Modifier is null or undefined. The element wasn't modified!");
        return elem;
    }
    if (!elem) {
        throw "There is no element to modify!";
    }
    var resClass = classnames_1["default"](elem.props.className || "", mod.className);
    return react_1["default"].cloneElement(elem, { className: resClass, id: mod.id || elem.props.id });
}
exports.modElement = modElement;
function mixMods() {
    var mods = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mods[_i] = arguments[_i];
    }
    var className = "";
    var id = "";
    if (mods.length == 0)
        throw "There is no mods provided";
    if (mods.length == 1)
        return mods[0];
    for (var i = 0; i < mods.length; i++) {
        var curr = mods[i];
        if (curr.className) {
            className = classnames_1["default"](className, curr.className);
        }
        if (curr.id && !id) {
            id = curr.id;
        }
    }
    return { id: id, className: className };
}
exports.mixMods = mixMods;
function getHeadModByProps(props) {
    return props.mod ? mixMods(props.mod, props.theme.head) : props.theme.head;
}
exports.getHeadModByProps = getHeadModByProps;
//# sourceMappingURL=index.js.map