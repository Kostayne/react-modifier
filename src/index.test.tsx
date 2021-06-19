import React from "react";
import { createModifier, IModifiableTheme, IModifier, mixModifiers, modifyElement, getHeadModifierByProps, IModifiableProps } from "./index";

it("create modifier with id", () => {
    expect(createModifier("class", "id")).toEqual({ className: "class", id: "id" });
});

it("create modifier without id", () => {
    expect(createModifier("class")).toEqual({ className: "class", id: "" });
});

it("mix modifiers", () => {
    const modOne: IModifier = { className: "one", id: "" };
    const modTwo: IModifier = { className: "two", id: "two" };

    expect(mixModifiers(modOne, modTwo)).toEqual({ className: "one two", id: "two" });
});

it("modify element class", () => {
    const mod: IModifier = { className: "modded", id: "" };

    const elem = (
        <div>
            
        </div>
    );

    const moddedElem = modifyElement(elem, mod);
    expect(moddedElem.props.className).toBe("modded");
});

it("modify element id", () => {
    const mod: IModifier = { className: "modded", id: "new_id" };

    const elem = (
        <div>
            
        </div>
    );

    const moddedElem = modifyElement(elem, mod);
    expect(moddedElem.props.id).toBe("new_id");
});

it("throws execption, if there is no elem to modify", () => {
    const f = () => { modifyElement(null, createModifier()) };
    expect(f).toThrow();
});

it("auto mixs head mod with theme", () => {
    const mod: IModifier = { className: "mod", id: "" };
    const theme: IModifiableTheme = { head: { className: "head", id: "" } };
    const props: IModifiableProps<IModifiableTheme> = { theme, mod };

    const resultMod = getHeadModifierByProps(props);
    expect(resultMod.className).toEqual("mod head");
});

it("overrides id when modifying mixed two mods", () => {
    const mod: IModifier = createModifier("", "");
    const modTwo: IModifier =  createModifier("", "new_id");

    const elem = <div id="old_id" />;
    const modded = modifyElement(elem, mixModifiers(mod, modTwo));
    expect(modded.props.id).toBe("new_id");
});