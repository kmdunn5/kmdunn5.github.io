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
    static playerSum = () => {
        playerTotal = 0;
        for (let i = 0; i < this.playerHand.length; i++) {
            console.log(this.playerHand[i]);
            console.log(this.playerHand[i.number]);

            if (this.playerHand[i.number] === 'J' || this.playerHand[i.number] === 'Q' || this.playerHand[i.number] === 'K') {
                playerTotal = parseInt(playerTotal) + 10;
                console.log(playerTotal)

            } else if (this.playerHand[i.number] === 'A') {
                if (playerTotal < 10) {
                    playerTotal = parseInt(playerTotal) + 11;
                    console.log(playerTotal)

                } else {
                    playerTotal = parseInt(playerTotal) + 1;
                    console.log(playerTotal)

                }
            } else {
                playerTotal = parseInt(playerTotal) + parseInt(this.playerHand[i.number], 10);
                console.log(playerTotal)

            }
        }
        $('#playerTotal').text(playerTotal)
    }   
}

//=====================//
//====Card Methods=====//
//=====================//

class CardMethods {
    static randomCard = (key) => {
        return Math.floor(Math.random() * key.length);
    }
    static cardNumber = () => {
        return BlackJackConstants.cardNumbers[this.randomCard(BlackJackConstants.cardNumbers)];
    }
    static cardSuit = () => {
        return BlackJackConstants.cardSuits[this.randomCard(BlackJackConstants.cardSuits)];
    }
    static createCard = (number, suit, faceStatus) => {
        let card = new Card(number, suit, faceStatus);
        return card;
    }
    static dealCard = (area, face, hand) => {
        let $newDiv = $('<div>').addClass('card');
        let num = this.cardNumber();
        let suit = this.cardSuit();
        let newCard = this.createCard(num, suit, face);
        hand.push(newCard);
        $newDiv.addClass(`${num} ${suit} ${newCard.face}`);
        $newDiv.text(`${num} of ${suit}`);
        area.append($newDiv);
    }
}

class Card {
    constructor (number, suit, face) {
        this.number = number;
        this.suit = suit;
        this.face = face;
    }
}



//=====================//
//====Dealer's Turn====//
//=====================//

const dealerTurn = () => {
    currentGameState = gameStates[2];
    console.log(currentGameState);
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
            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            BlackJackConstants.playerSum()
            //add card div to dealer facedown
            CardMethods.dealCard(BlackJackConstants.$dealerArea, 'down', BlackJackConstants.dealerHand);
            //add card div to player
            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            // BlackJackConstants.playerSum()
            //add card div to deal
            CardMethods.dealCard(BlackJackConstants.$dealerArea, 'up', BlackJackConstants.dealerHand);
            currentGameState = gameStates[0];
            console.log(currentGameState);
        } else {
            console.log('The game is in progress. Please finish the hand');
        }
    }
    static hit = () => {
        if (currentGameState === 'Player\'s Turn') {
            // add card to player area
            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            BlackJackConstants.playerSum()
        } else {
            console.log('It\'s not your turn.');
        }
    }
    static stand = () => {
        if (currentGameState === 'Player\'s Turn') {
            // set game state to dealer turn
            currentGameState = gameStates[1];
            console.log(currentGameState);
            $('.facedown').toggleClass('facedown');
            dealerTurn();
            console.log(BlackJackConstants.playerHand, BlackJackConstants.dealerHand);
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

// Maybe make the sums 1 variable, and just run a sum function each time with the correct hand parameter, return the number, then have a separate function that makes the text of the correct span the returned function number.