import React from "react";
import "./GameCards.css";

const GameCard = props => (
    <div className="card">
      <div className="img-container" id={props.id} key={props.id} onClick={() => props.handleClick(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
);

export default GameCard;