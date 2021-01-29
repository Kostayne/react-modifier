import React from "react";
import ReactDOM from "react-dom";
import { createModifier } from "../../src";
import { FlexAppF, flexAppThemes } from "./components/flexApp";
import "./main.scss";

const appRoot = document.getElementById("app-root");
ReactDOM.render(<FlexAppF text="Yeah, it works" mod={createModifier("root__app")} theme={flexAppThemes.dark}></FlexAppF>, appRoot);