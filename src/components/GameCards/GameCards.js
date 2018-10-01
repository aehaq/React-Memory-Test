import React from "react";
import "./GameCards.css";

const GameCard = props => (
    <div className="card">
      <img className="img-thumbnail" alt={props.name} src={props.image} id={props.id} key={props.id} onClick={() => props.handleClick(props.id)}>
      </img>
    </div>
);

export default GameCard;