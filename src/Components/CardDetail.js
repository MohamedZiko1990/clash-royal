import React from 'react';

const CardDetail = ({card}) =>{
   if(!card){
       return <div></div>;
   }

    return (
      <div>
          <img src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`} />
          <h2>{card.name}</h2>
          <h3> Cardtype : {card.type} </h3>
          <h4> CardRarity : {card.rarity} </h4>
          <h5> CardElixir : {card.elixirCost} </h5>
      </div>
    );
}

export default CardDetail;