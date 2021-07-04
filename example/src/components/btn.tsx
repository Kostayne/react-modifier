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

    return Modifier.modElement((
        <div className="btn">
            {Modifier.modElement((
                <span className="btn__text">
                    {text}
                </span>
            ), theme.textMod)}
        </div>
    ), Modifier.getHeadModByProps(props));
}

const darkTheme: BtnTheme = {
    head: Modifier.createMod("btn_dark"),
    textMod: Modifier.createMod("btn__text_dark")
}

const grayTheme: BtnTheme = {
    head: Modifier.createMod(""),
    textMod: Modifier.createMod("")
}

export const BtnThemes = {
    dark: darkTheme,
    gray: grayTheme
};