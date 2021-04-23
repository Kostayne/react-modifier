import React, { FunctionComponent } from "react";
import * as Modifier from "../../../src/index";

export interface BtnTheme extends Modifier.IModifiableTheme {
    textMod: Modifier.IModifier;
};

export interface IBtnProps extends Modifier.IModifiableProps<BtnTheme> {
    text: string;
};

export const Btn: FunctionComponent<IBtnProps> = (props: IBtnProps) => {
    const { text, theme, mod } = props;

    return Modifier.modifyElement((
        <div className="btn">
            {Modifier.modifyElement((
                <span className="btn__text">
                    {text}
                </span>
            ), theme.textMod)}
        </div>
    ), Modifier.getHeadModifierByProps(props));
}

const darkTheme: BtnTheme = {
    head: Modifier.createModifier("btn_dark"),
    textMod: Modifier.createModifier("btn__text_dark")
}

const grayTheme: BtnTheme = {
    head: Modifier.createModifier(""),
    textMod: Modifier.createModifier("")
}

export const BtnThemes = {
    dark: darkTheme,
    gray: grayTheme
};