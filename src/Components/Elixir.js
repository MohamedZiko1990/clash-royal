import React from 'react';

const Elixir = ({cards}) => {
   var sum =0;
   for(var i=0; i<cards.length; i++)
    {
      sum += cards[i].elixirCost;
    }
    return (
        <div>
           <h3>Average Elixir Cost:</h3>
           <h2><i class="fas fa-tint"> </i> {sum/8} </h2>
           <div class="progress">
               <div class="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
           </div> 
        </div>
    );
}

export default Elixir;