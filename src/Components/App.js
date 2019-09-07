import React from "react";
import "./App.css";
import ClashRoyal from "../API/ClashRoyal";
import GenerateButton from "./GenerateButton";
import CardsDeck from "./CardsDeck";
import Elixir from "./Elixir";
import CardDetail from "./CardDetail";

class App extends React.Component {
  state = { cards: [], selectedCard: null };

  componentDidMount() {
    this.onGenerateButtonClicked();
  }

  onGenerateButtonClicked = () => {
    var selectedCards = [];
    ClashRoyal.get("/api/cards").then(response => {
      for (var i = 1; i < 9; i++) {
        var random = Math.floor(Math.random() * response.data.length);
        selectedCards.push(response.data[random]);
      }
      this.setState({
        cards: selectedCards,
        selectedCard: selectedCards[0]
      });
    });
  };

  onCardSelect = card => {
    this.setState({ selectedCard: card });
  };

  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-12" id="generator">
              <h1>Clash Royal Deck Generator</h1>
              <GenerateButton onClick={this.onGenerateButtonClicked} />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 col-md-12 pt-3" id="elixcalc">
              <h2>
                <Elixir cards={this.state.cards} />
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12" id="deck">
              <CardsDeck
                onCardSelect={this.onCardSelect}
                cards={this.state.cards}
              />
            </div>
            <div className="col-lg-1 "></div>
            <div className="col-lg-3 col-md-12" id="detail">
              <CardDetail card={this.state.selectedCard} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
