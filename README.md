This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Clash Royale Challenge

The goal of this task was to create a random deck of 8 cards each time we press the `generate` button.it was also aimed to show card details upon player selection.The app automatically counts the average elixir cost per deck.

### Overview

A small web app created using ReactJs, which generates random deck with its cards (8 cards) as a default based on the available cards provided through Clash API. Each time the `generate button` is clicked, the app will generate new random deck with different random cards. And the deck average elixir cost will be calculated automatically and shown in the progress bar.

Each card has single character, building, or spell and shows its elixir vlaue just below it. Each card has some characteristics like (name, elixir cost, type and rarity.. etc).

Whenever a card is clicked, it will show all in formation about the card in the a detailed card (image, name, rarity, description, elixir cost and type). The detailed card is set by default to the first card in each new generated deck. the clicked card will be shaded once selected.

The created app is totally responsive and compatible with all devices using bootstrap grid. Google font was also used for the main fonts in the app.

#### Steps

- open the page to show random deck consists of 8 cards with `generate` button to choose another random deck.
- Each deck shows the average cost of elixir.
- Each card is represented as an image with elixir cost for each one.
- Clicking on any card must show information about the card (image, name, rarity, description, elixir cost and type)in the detailed card created.
- Click on any card will shaded it and fly to the detailed card place (if Needed) according to the used window size.

#### Frame Works/ libraries/ tools

- ReactJs
- axios
- Bootstrap 4
- Git
- Postman

---

### Game Introduction

#### Entities

##### Deck

Deck is collection of selected 8 cards from all available cards, and it will be used in battles.

##### Cards

Cards are the key part of the game and it could be troop, building or spell.

##### Elixir bar

Elixir is the average power of the random deck cards.

##### Generate Button

Generate Random Decks of 8 Cards each time Pressed. 

##### Detailed Card

Show the image and all info about clicked card by the user. Bydefault it shows the first card in the deck generated.

---

#### Clash API

- Base url `http://www.clashapi.xyz`
- Cards endpoint `/api/cards`
- Card details `/api/cards/{:id}` or `/api/cards/{:idName}`
- Image urls `/images/cards/${idName}.png`

---

