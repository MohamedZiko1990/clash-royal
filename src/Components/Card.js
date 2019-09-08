import React from "react";
import "./Card.css";

const Card = ({ card, onCardSelect, selectedCard }) => {
  var selected = null;
  if (card == selectedCard) {
    selected = "selected";
  }
  return (
    <div
      onClick={() => onCardSelect(card)}
      className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
    >
      <div className={selected}>
        <a href="#top">
          <img
            className="selection"
            src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`}
            title={card.name}
            width="150"
            height="200"
          />
        </a>
        <h3 id="power">
          {" "}
          <i class="fas fa-tint"></i>
          {card.elixirCost}{" "}
        </h3>
      </div>
    </div>
  );
};

export default Card;
