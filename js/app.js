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
    static cardSuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    static playerHand = [];
    static dealerHand = [];
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
    }
    static createCard = (faceStatus) => {
        let card = new Card(CardMethods.cardNumber(), CardMethods.cardSuit(), faceStatus);
        return card
    }
    static dealCard = (area) => {
        const $newCard = $('<div>').addClass('card');
        $newCard.addClass(`${CardMethods.cardNumber()} ${CardMethods.cardSuit()}`);
        $newCard.text(`${CardMethods.cardNumber()} of ${CardMethods.cardSuit()}`);
        area.append($newCard);
    }
    static dealFacedownCard = (area) => {
        const $newCard = $('<div>').addClass('card');
        $newCard.addClass(`${CardMethods.cardNumber()} ${CardMethods.cardSuit()} facedown`);
        $newCard.text(`${CardMethods.cardNumber()} of ${CardMethods.cardSuit()}`);
        area.append($newCard);
    }
}

class Card {
    constructor (number, suit, face) {
        this.number = number;
        this.suit = suit
        this.face = face
    }
}


BlackJackConstants.playerHand.push(CardMethods.createCard('down'));
BlackJackConstants.playerHand.push(CardMethods.createCard('up'));
console.log(BlackJackConstants.playerHand);

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
            CardMethods.dealFacedownCard(BlackJackConstants.$dealerArea);
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
            $('.facedown').toggleClass('facedown')
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






// Thought process for recording cards totals
// when dealing a card, create a new card object and push it into the proper hand array
//      to accomplish this, I have to make the random number function return the number instead of the index....
// make a new function that creates cards, calling each randomNumber and randomSuit as parameters, which will then fill the text, and the object