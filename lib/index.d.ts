import React, { ReactElement } from "react";
export interface IModifiableProps<T> {
    theme: T;
    mod?: IModifier;
}
export interface IModifiableTheme {
    head: IModifier;
}
export declare abstract class ModifiableComponent<T extends IModifiableTheme, P extends IModifiableProps<T>, S = {}> extends React.Component<P, S> {
    protected mod: IModifier;
    protected theme: T;
    props: P;
    constructor(props: P);
    abstract renderThemed(): ReactElement;
    render(): ReactElement;
}
export interface IModifier {
    className: string;
    id: string;
}
export declare function createModifier(className?: string, id?: string): IModifier;
export declare function modifyElement(elem: ReactElement, mod: IModifier): ReactElement;
export declare function mixModifiers(...mods: IModifier[]): IModifier;
export declare function getHeadModifierByProps<T extends IModifiableTheme>(props: IModifiableProps<T>): IModifier;
