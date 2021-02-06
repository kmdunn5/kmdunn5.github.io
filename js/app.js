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

class CardMethods {
    static randomCard = (key) => {
        return Math.floor(Math.random() * key.length);
    }
    static cardNumber = () => {
        return BlackJackConstants.cardNumbers[CardMethods.randomCard(BlackJackConstants.cardNumbers)];
    }
    static cardSuit = () => {
        return BlackJackConstants.cardSuits[CardMethods.randomCard(BlackJackConstants.cardSuits)];
    };
    static dealCard = (area) => {
        const $newCard = $('<div>').addClass('card');
        area.append($newCard);
    }
}

class Card {
    constructor (number, suit) {
        this.number = number;
        this.suit = suit
    }
}

//=====================//
//====Dealer's Turn====//
//=====================//

const dealerTurn = () => {
    currentGameState = gameStates[2];
    console.log(currentGameState)
}


//=====================//
//====Button Methods===//
//=====================//

class ButtonMethods {
    static deal = () => {
        if (currentGameState === 'Game End' || currentGameState === '') {
            //remove card divs
            $('.card').remove()
            //add card div to player
            CardMethods.dealCard(BlackJackConstants.$playerArea);
            //add card div to dealer facedown
            CardMethods.dealCard(BlackJackConstants.$dealerArea);
            //add card div to player
            CardMethods.dealCard(BlackJackConstants.$playerArea);
            //add card div to deal
            CardMethods.dealCard(BlackJackConstants.$dealerArea);
            currentGameState = gameStates[0];
            console.log(currentGameState)
        } else {
            console.log('The game is in progress. Please finish the hand');
        }
    }
    static hit = () => {
        if (currentGameState === 'Player\'s Turn') {
            // add card to player area
            CardMethods.dealCard(BlackJackConstants.$playerArea);
        } else {
            console.log('It\'s not your turn.')
        }
    }
    static stand = () => {
        if (currentGameState === 'Player\'s Turn') {
            // set game state to dealer turn
            currentGameState = gameStates[1];
            console.log(currentGameState);
            dealerTurn();
        }
    }
}


//=====================//
//==Button On Clicks===//
//=====================//

BlackJackConstants.$dealButton.click(ButtonMethods.deal);
BlackJackConstants.$hitButton.click(ButtonMethods.hit);
BlackJackConstants.$standButton.click(ButtonMethods.stand);

const card1 = new Card(CardMethods.cardNumber(), CardMethods.cardSuit());

console.log(card1.number + ' of ' + card1.suit);
