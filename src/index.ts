import React, { ReactElement } from "react";
import classNames from "classnames";

export interface IModifiableProps<T> {
    theme: T;
    mod?: IModifier;
}

export interface IModifiableTheme {
    head: IModifier;
}

export abstract class ModifiableComponent<T extends IModifiableTheme, P extends IModifiableProps<T>, S = {}> extends React.Component<P, S> {
    protected mod: IModifier;
    protected theme: T;
    public props: P;

    constructor(props: P) {
        super(props);

        this.props = props;
        this.mod = props.mod;
        this.theme = props.theme;
    }

    abstract renderThemed(): ReactElement;

    render(): ReactElement {
        return modifyElement(this.renderThemed(), getHeadModifierByProps(this.props));
    }
}

export interface IModifier {
    className: string;
    id: string;
}

export function createModifier(className: string="", id: string = ""): IModifier {
    return {
        className,
        id
    }
}

export function modifyElement(elem: ReactElement, mod: IModifier): ReactElement {
    if (!mod) {
        console.error("Modifier is null or undefined. The element wasn't modified!");
        return elem;
    }

    if (!elem) {
        throw "There is no element to modify!";
    }

    let resClass = classNames(elem.props.className || "", mod.className);
    return React.cloneElement(elem, {className: resClass, id: mod.id || elem.props.id});
}

export function mixModifiers(...mods: IModifier[]): IModifier {
    let className = "";
    let id = "";

    if (mods.length == 0) throw "There is no mods provided";
    if (mods.length == 1) return mods[0];

    for (let i = 0; i < mods.length; i++) {
        const curr = mods[i];
        if (curr.className) {
            className = classNames(className, curr.className);
        }

        if (curr.id && !id) {
            id = curr.id;
        }
    }

    return { id, className };
}

export function getHeadModifierByProps<T extends IModifiableTheme>(props: IModifiableProps<T>): IModifier {
    return props.mod? mixModifiers(props.mod, props.theme.head) : props.theme.head;
}