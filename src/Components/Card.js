import React from 'react';

const Card = ({card, onCardSelect}) =>{
    return (
    <div onClick={() => onCardSelect(card)} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
        <div >
        <img src={`http://www.clashapi.xyz/images/cards/${card.idName}.png`}  width="150" height="200" />
        <h3> <i class="fas fa-tint"></i>{card.elixirCost} </h3>
        </div>
    </div>
    );
}

export default Card;