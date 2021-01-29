import React, { FunctionComponent } from "react";
import * as Modifier from "../../../src/index";

export interface FlexAppTheme extends Modifier.IModifiableTheme {
    textMod: Modifier.IModifier;
};

export interface IFlexAppProps extends Modifier.IModifiableProps<FlexAppTheme> {
    text: string;
};

export const FlexAppF: FunctionComponent<IFlexAppProps> = (props: IFlexAppProps) => {
    const { text, theme, mod } = props;

    if (theme) {
        return Modifier.modifyElement((
            <div className="app">
                {Modifier.modifyElement((
                    <span className="app__text">
                        {text}
                    </span>
                ), theme.textMod)}
            </div>
        ), Modifier.mixModifiers(mod, theme.head));
    }

    return Modifier.modifyElement((
        <div className="app">
            {Modifier.modifyElement((
                <span className="app__text">{text}</span>
            ), theme.textMod)}
        </div>
    ), mod);
}

const darkTheme: FlexAppTheme = {
    head: Modifier.createModifier("app_dark"),
    textMod: Modifier.createModifier("app__text_dark")
}

export const flexAppThemes = {
    dark: darkTheme
};