import React from "react";
import ReactDOM from "react-dom";
import { Button, Headings } from "./components";
import { Test } from "./Test";

const App = () => (
  <div className="container">
    <div>Name: components</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>

    <Button />
    <Headings />
    <Test />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
