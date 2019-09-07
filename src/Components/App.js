import React from 'react';
import './App.css';
import ClashRoyal from '../API/ClashRoyal';
import GenerateButton from './GenerateButton';
import CardsDeck from './CardsDeck';
import Elixir from './Elixir';
import CardDetail from './CardDetail';


class App extends React.Component{

    state = {cards: [], selectedCard: null};


    componentDidMount(){
        this.onGenerateButtonClicked();
    }

    onGenerateButtonClicked =  async (event) => {
        
        const response = await ClashRoyal.get('/api/cards');

         var selectedCards =[];
         for(var i=1; i<9; i++){
            var random = Math.floor(Math.random()*response.data.length); // *84 the length , not to get undfined values in mapping 
            selectedCards.push(response.data[random]);
        }
        
         this.setState({
             cards: selectedCards,
             selectedCard: selectedCards[0]
        });
    }

    onCardSelect = (card) => {
        this.setState({selectedCard: card});
    }

    render(){
        return (
           
    <div className="page">
        <div className="container">   
            <div className="row p-auto">
                <div className="col-lg-6 col-sm-12" id="generator">
                    <h1>Clash Royal Deck Generator</h1>
                    <GenerateButton onClick={this.onGenerateButtonClicked}/>
                </div>
                <div className="col-lg-3">
                     
                </div>
                <div className="col-lg-3 col-md-12 pt-3" id="elixcalc">
                    <h2><Elixir cards={this.state.cards} /></h2>
                </div>
            </div>
            <div className="row justify-content-center pt-4">
                <div className="col-8 ">
                     <CardsDeck onCardSelect={this.onCardSelect} cards={this.state.cards}/> 
                </div>
                <div className="col-lg-1">
                          
                </div>
                <div className="col-3">
                      <CardDetail card={this.state.selectedCard}/>
                </div>
            </div>
        </div> 
    </div>
        );
    }
}

export default App;