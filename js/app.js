console.log('Jack Black time!')

//=====================//
//======Game State=====//
//=====================//
const gameStates = ['Player\'s Turn', 'Dealer\'s Turn', 'Game End'];
let currentGameState = '';
let playerTotal = '';
let dealerTotal = '';


//=====================//
//====Game Constants===//
//=====================//

class BlackJackConstants {
    static $card = $('.card');
    static $playerArea = $('#playerArea');
    static $dealerArea = $('#dealerArea');
    static $dealButton = $('#deal');
    static $hitButton = $('#hit');
    static $standButton = $('#stand');
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
        return BlackJackConstants.cardNumbers[CreateCard.randomCard(BlackJackConstants.cardNumbers)];
    }
    static cardSuit = () => {
        return BlackJackConstants.cardSuits[CreateCard.randomCard(BlackJackConstants.cardSuits)];
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
    static deal = () => {
        //remove card divs
        //add card div to player
        const $newCard = $('<div>').addClass('card');
        $playerArea.append($newCard);
        //add card div to dealer facedown
        //add card div to player
        //add card div to deal
    }
    static hit = () => {
        // add card to player area
    }
    static stand = () => {
        // set game state to dealer turn
    }
}

//=====================//
//====Dealer's Turn====//
//=====================//

const dealerTurn = () => {
    
}


//=====================//
//==Button On Clicks===//
//=====================//


const card1 = new Card(CreateCard.cardNumber(), CreateCard.cardSuit());

console.log(card1.number + ' of ' + card1.suit)
console.log(BlackJackConstants.cardSuits)

