import React from "react";

const Header = props => (
    <div className="navbar fixed-top bg-dark row text-white">
        <div className="col text-center"><h4>Memory Game</h4></div>
        <div className="col text-center"><h5>{props.result}</h5></div>
        <div className="col text-center"><h5>Score: {props.score} | Best: {props.topScore}</h5></div>
    </div>
  );

export default Header;