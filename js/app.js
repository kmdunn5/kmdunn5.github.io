console.log('Jack Black time!')

//=====================//
//======Game State=====//
//=====================//
const gameStates = ['Player\'s Turn', 'Dealer\'s Turn', 'Game End'];
let currentGameState = '';


//=====================//
//====Game Constants===//
//=====================//

class BlackJackConstants {
    static $card = $('.card');
    static cardNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    static cardSuits = ['Heart', 'Diamond', 'Spade', 'Club'];
}

//=====================//
//====Card Methods=====//
//=====================//

class CreateCard {
    static randomCard = (key) => {
        return Math.floor(Math.random() * key.length);
    }
    static cardNumber = () => {
        return cardNumbers[CreateCard.randomCard(cardNumbers)];
    }
    static cardSuit = () => {
        return cardSuits[CreateCard.randomCard(cardSuits)];
    };
}

class Card {
    constructor (number, suit) {
        this.number = number;
        this.suit = suit
    }
}
//=====================//
//====Button Methods===//
//=====================//

class ButtonsMethods {
    deal = () => {
        //remove card divs
        //add card div to player
        //add card div to dealer facedown
        //add card div to player
        //add card div to deal
    }
    hit = () => {
        // add card to player area
    }
    stand = () => {
        // set game state to xxxx
    }
}




const card1 = new Card(CreateCard.cardNumber(), CreateCard.cardSuit());

console.log(card1)
console.log

