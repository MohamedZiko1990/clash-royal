import './GenerateButton.css';
import React from  'react';

class GenerateButton extends React.Component {

   onButtonClick =(event) => {
        
      this.props.onClick(event);
   }

   render(){


         return (
                <div className="container">
                   <button className="btn btn-lg btn-block" onClick={this.onButtonClick}>
                      Generate 
                   </button>
                </div>
                );
           }
}

export default GenerateButton;