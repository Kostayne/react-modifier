import React, { ReactElement } from "react";
import classNames from "classnames";

export interface IModifiableProps<T> {
    theme?: T;
    mod: IModifier;
}

export interface IModifiableTheme {
    head: IModifier;
}

export abstract class ModifiableComponent<T extends IModifiableTheme, P extends IModifiableProps<T>> extends React.Component {
    protected mod: IModifier;
    protected theme: T;
    public props: P;

    constructor(props: P) {
        super(props);

        this.props = props;
        this.mod = props.mod;
        this.theme = props.theme;
    }

    abstract renderWithTheme(): ReactElement;
    abstract renderWithoutTheme(): ReactElement;

    render() {
        return this.props.theme? this.renderWithTheme() : this.renderWithoutTheme();
    }
}

export interface IModifier {
    className: string;
    id?: string;
}

export function createModifier(className: string, id=""): IModifier {
    return {
        className,
        id
    }
}

export function modifyElement(element: ReactElement, modifier: IModifier): ReactElement {
    if (!modifier) return element;

    let resClass = "";
    if (element.props.className) {
        resClass = classNames(element.props.className, modifier.className);
    }

    return React.cloneElement(element, {className: resClass, id: modifier.id});
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