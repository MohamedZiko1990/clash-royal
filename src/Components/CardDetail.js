import React from "react";
import "./CardDetail.css";

const CardDetail = ({ card }) => {
  if (!card) {
    return <div></div>;
  }

  return (
    <div>
      <img
        src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`}
        alt="..."
        height="300px"
      />
      <div>
        <h4>{card.name}</h4>
        <h5>
          {" "}
          {card.type} | {card.rarity} | {card.elixirCost}
        </h5>
        <p class="card-text"> {card.description}</p>
      </div>
    </div>
  );
};

export default CardDetail;
