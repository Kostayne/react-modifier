import React from "react";
import { createMod, IModifiableTheme, IModifier, mixMods, modElement, getHeadModByProps, IModifiableProps, ModifiableComponent } from "./index";

class testModC extends ModifiableComponent<IModifiableTheme, IModifiableProps<IModifiableTheme>> {
    renderThemed() {
        return (
            <div>

            </div>
        );
    }
}

it("not changing passed args", () => {
    const headMod= createMod();
    const t = {
        head: headMod
    }

    const props = {
        theme: t
    }

    const modC: any = new testModC(props);
    
    expect(modC.theme).toEqual(t);
    expect(modC.mod).toEqual(undefined);
    expect(modC.props).toEqual(props);
});

it("renders class component as well", () => {
    const headMod= createMod("head-mod");
    const t = {
        head: headMod
    }

    const props = {
        theme: t
    }

    const modC = new testModC(props);

    expect(modC.render()).not.toEqual(undefined);
});

it("create modifier with id", () => {
    expect(createMod("class", "id")).toEqual({ className: "class", id: "id" });
});

it("create modifier without id", () => {
    expect(createMod("class")).toEqual({ className: "class", id: "" });
});

it("mix modifiers", () => {
    const modOne: IModifier = { className: "one", id: "" };
    const modTwo: IModifier = { className: "two", id: "two" };

    expect(mixMods(modOne, modTwo)).toEqual({ className: "one two", id: "two" });
});

it("modify element class", () => {
    const mod: IModifier = { className: "modded", id: "" };

    const elem = (
        <div>
            
        </div>
    );

    const moddedElem = modElement(elem, mod);
    expect(moddedElem.props.className).toBe("modded");
});

it("modify element id", () => {
    const mod: IModifier = { className: "modded", id: "new_id" };

    const elem = (
        <div>
            
        </div>
    );

    const moddedElem = modElement(elem, mod);
    expect(moddedElem.props.id).toBe("new_id");
});

it("throws execption, if there is no elem to modify", () => {
    const f = () => { modElement(null, createMod()) };
    expect(f).toThrow();
});

it("auto mixs head mod with theme", () => {
    const mod: IModifier = { className: "mod", id: "" };
    const theme: IModifiableTheme = { head: { className: "head", id: "" } };
    const props: IModifiableProps<IModifiableTheme> = { theme, mod };

    const resultMod = getHeadModByProps(props);
    expect(resultMod.className).toEqual("mod head");
});

it("overrides id when modifying mixed two mods", () => {
    const mod: IModifier = createMod("", "");
    const modTwo: IModifier =  createMod("", "new_id");

    const elem = <div id="old_id" />;
    const modded = modElement(elem, mixMods(mod, modTwo));
    expect(modded.props.id).toBe("new_id");
});

it("just returning element if there is no mod provided", () => {
    const el = (
        <div>

        </div>
    );

    const res = modElement(el, null);

    expect(res).not.toEqual(undefined);
});

it("throws exception when mixing mods without mods", () => {
    expect(() => mixMods()).toThrow();
});

it("returns mod in mix mod if only one provided", () => {
    const m = createMod();
    expect(mixMods(m)).toEqual(m);
});