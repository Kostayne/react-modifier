import React from "react";
import { createModifier, IModifiableTheme, IModifier, mixModifiers, modifyElement, getHeadModifierByProps, IModifiableProps, modifyWithPrioritet } from "./index";

it("create modifier with id", () => {
    expect(createModifier("class", "id")).toEqual({ className: "class", id: "id" });
});

it("create modifier without id", () => {
    expect(createModifier("class")).toEqual({ className: "class", id: undefined });
});

it("mix modifiers", () => {
    const modOne: IModifier = { className: "one", id: "" };
    const modTwo: IModifier = { className: "two", id: "two" };

    expect(mixModifiers(modOne, modTwo)).toEqual({ className: "one two", id: "two" });
});

it("modify element", () => {
    const mod: IModifier = { className: "modded", id: "" };

    const elem = (
        <div>
            
        </div>
    );

    const moddedElem = modifyElement(elem, mod);
    expect(moddedElem.props.className).toBe("modded");
});

it("modify with prioritet", () => {
    const mod: IModifier = { className: "modded", id: "" };

    const elem = (
        <div className="base">

        </div>
    );

    const moddedElem = modifyWithPrioritet(elem, mod);
    expect(moddedElem.props.className).toBe("modded base");
});

it("auto mixs head mod with theme", () => {
    const mod: IModifier = { className: "mod", id: "" };
    const theme: IModifiableTheme = { head: { className: "head", id: "" } };
    const props: IModifiableProps<IModifiableTheme> = { theme, mod };

    const resultMod = getHeadModifierByProps(props);
    expect(resultMod.className).toEqual("mod head");
});