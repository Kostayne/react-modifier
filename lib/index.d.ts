import React, { ReactElement } from "react";
export interface IModifiableProps<T> {
    theme?: T;
    mod: IModifier;
}
export interface IModifiableTheme {
    head: IModifier;
}
export declare abstract class ModifiableComponent<T extends IModifiableTheme, P extends IModifiableProps<T>> extends React.Component {
    protected mod: IModifier;
    protected theme: T;
    props: P;
    constructor(props: P);
    abstract renderWithTheme(): ReactElement;
    abstract renderWithoutTheme(): ReactElement;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
}
export interface IModifier {
    className: string;
    id?: string;
}
export declare function createModifier(className: string, id?: string): IModifier;
export declare function modifyElement(element: ReactElement, modifier: IModifier): ReactElement;
export declare function mixModifiers(...mods: IModifier[]): IModifier;
