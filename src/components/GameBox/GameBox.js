import React from "react";
import "./GameBox.css";

const GameBox = props => (
    <div className="container-fluid">{props.children}</div>
);

export default GameBox;