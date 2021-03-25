import React from "react";
import ReactDOM from "react-dom";
import { createModifier, modifyElement, modifyWithPrioritet } from "../../src";
import { Btn, BtnThemes } from "./components/btn";
import "./main.scss";

const appRoot = document.getElementById("app-root");

const mod = createModifier("red");

const App = () => {
    return (
        <div className="app">
            <Btn theme={BtnThemes.gray} text="button gray" />
            <Btn theme={BtnThemes.dark} text="button dark" />
            <Btn theme={BtnThemes.dark} mod={mod} text="button red" />
        </div>
    );
}

ReactDOM.render(<App />, appRoot);