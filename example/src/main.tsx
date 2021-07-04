import React from "react";
import ReactDOM from "react-dom";
import { createMod, modElement } from "../../src";
import { Btn, BtnThemes } from "./components/btn";
import "./main.scss";

const appRoot = document.getElementById("app-root");

const redMod = createMod("red");
const greenBoxMod = createMod("green-box");

const App = () => {
    return (
        <div className="app">
            {/* Modify whole component with theams */}
            <Btn theme={BtnThemes.gray} text="button gray" />
            <Btn theme={BtnThemes.dark} text="button dark" />

            {/* modify component head */}
            <Btn theme={BtnThemes.dark} mod={redMod} text="button red" />

            {/* modify single elem */}
            {modElement((
                <div className="box">

                </div>
            ), greenBoxMod)}
        </div>
    );
}

ReactDOM.render(<App />, appRoot);