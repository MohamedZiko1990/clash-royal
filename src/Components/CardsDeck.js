import React from 'react';
import Card from './Card';


const CardsDeck = ({cards, onCardSelect}) =>{


  const cardsList = cards.map((item) =>{
      return <Card 
      onCardSelect={onCardSelect}
      card={item}
      />;
  }
  )

  return(

  <div className="row justify-content-center">
       {cardsList}
  </div>
    );
}

export default CardsDeck;