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
exports.getHeadModifierByProps = exports.mixModifiers = exports.modifyElement = exports.createModifier = exports.ModifiableComponent = void 0;
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
        return modifyElement(this.renderThemed(), getHeadModifierByProps(this.props));
    };
    return ModifiableComponent;
}(react_1["default"].Component));
exports.ModifiableComponent = ModifiableComponent;
function createModifier(className, id) {
    if (id === void 0) { id = ""; }
    return {
        className: className,
        id: id
    };
}
exports.createModifier = createModifier;
function modifyElement(element, modifier) {
    if (!modifier)
        return element;
    var resClass = "";
    if (element.props.className) {
        resClass = classnames_1["default"](element.props.className, modifier.className);
    }
    return react_1["default"].cloneElement(element, { className: resClass, id: modifier.id });
}
exports.modifyElement = modifyElement;
function mixModifiers() {
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
exports.mixModifiers = mixModifiers;
function getHeadModifierByProps(props) {
    return props.mod ? mixModifiers(props.mod, props.theme.head) : props.theme.head;
}
exports.getHeadModifierByProps = getHeadModifierByProps;
//# sourceMappingURL=index.js.map