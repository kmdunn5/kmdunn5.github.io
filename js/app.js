console.log('Jack Black time!')

//=====================//
//======Game State=====//
//=====================//
const gameStates = ['Player\'s Turn', 'Dealer\'s Turn', 'Game End'];
let currentGameState = '';
let playerTotal = 0;
let dealerTotal = 0;


//=====================//
//====Game Constants===//
//=====================//

class BlackJackConstants {
    static $playerArea = $('#playerArea');
    static $dealerArea = $('#dealerArea');
    static $dealButton = $('#deal');
    static $hitButton = $('#hit');
    static $standButton = $('#stand');
    static cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    static cardSuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    static playerHand = [];
    static dealerHand = [];
    static sum = (hand) => {
        let total = 0;
        let numberOfAces = 0;
        for (let i = 0; i < hand.length; i++) {

            if (hand[i].number === 'J' || hand[i].number === 'Q' || hand[i].number === 'K') {
                total = parseInt(total) + 10;

            } else if (hand[i].number === 'A') {
                numberOfAces += 1

            } else {
                total = parseInt(total) + parseInt(hand[i].number, 10);
            }
        }
        if (numberOfAces > 0) {
            total += numberOfAces - 1;
            if (total < 11) {
                total += 11;
            } else {
                total += 1;
            }
        }
        return total
    }
    static checkWinner = () => {
        if (currentGameState !== gameStates[2]) {
            if (playerTotal > dealerTotal) {
                console.log('Player Wins!');
            } else if (dealerTotal > playerTotal) {
                console.log('Dealer Wins!');
            } else {
                console.log('You both have the same number, it\'s a push!')
            }
        }
    }
    static checkBust = () => {
        if (playerTotal > 21) {
            currentGameState = gameStates[2]
            console.log('Player Busted');
        } else if (dealerTotal > 21) {
            currentGameState = gameStates[2]
            console.log('Dealer Busted!');
        }
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
    dealerTotal = BlackJackConstants.sum(BlackJackConstants.dealerHand)
    $('#dealerTotal').text(dealerTotal);
    while (dealerTotal < 16) {
        CardMethods.dealCard(BlackJackConstants.$dealerArea, 'up', BlackJackConstants.dealerHand);
        dealerTotal = BlackJackConstants.sum(BlackJackConstants.dealerHand);
        $('#dealerTotal').text(dealerTotal);
    }
    BlackJackConstants.checkBust();
    BlackJackConstants.checkWinner();
    currentGameState = gameStates[2];
}


//=====================//
//====Button Methods===//
//=====================//

class ButtonMethods {
    static deal = () => {
        if (currentGameState === 'Game End' || currentGameState === '') {
            
            //========remove card divs
            
            $('.card').remove();
            BlackJackConstants.playerHand.splice(0, BlackJackConstants.playerHand.length);
            BlackJackConstants.dealerHand.splice(0, BlackJackConstants.dealerHand.length);
            playerTotal = BlackJackConstants.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal);
            dealerTotal = BlackJackConstants.sum(BlackJackConstants.dealerHand);
            $('#dealerTotal').text('');
            
            //=======add card div to player

            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            playerTotal = BlackJackConstants.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal);
            
            //======add card div to dealer facedown

            CardMethods.dealCard(BlackJackConstants.$dealerArea, 'down', BlackJackConstants.dealerHand);
            dealerTotal = BlackJackConstants.sum(BlackJackConstants.dealerHand);

            //=====add card div to player

            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            playerTotal = BlackJackConstants.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal);
            
            //========add card div to deal

            CardMethods.dealCard(BlackJackConstants.$dealerArea, 'up', BlackJackConstants.dealerHand);
            dealerTotal = BlackJackConstants.sum(BlackJackConstants.dealerHand);

            // 

            currentGameState = gameStates[0];
            console.log(currentGameState);
            if (playerTotal === 21) {
                console.log('Jack Black! I mean Blackjack! Player wins!');
                currentGameState = gameStates[2];
                console.log(currentGameState);
            }
        } else {
            console.log('The game is in progress. Please finish the hand');
        }
    }
    static hit = () => {
        if (currentGameState === 'Player\'s Turn') {
            
            //========add card to player area
            
            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            playerTotal = BlackJackConstants.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal);
            BlackJackConstants.checkBust();
        } else {
            console.log('It\'s not your turn.');
        }
    }
    static stand = () => {
        if (currentGameState === 'Player\'s Turn') {
            
            //=======set game state to dealer turn
            
            currentGameState = gameStates[1];
            console.log(currentGameState);
            $('.down').toggleClass('down');
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

// Maybe make the sums 1 variable, and just run a sum function each time with the correct hand parameter, return the number, then have a separate function that makes the text of the correct span the returned function number.

// Shuffling the deck:
// Set a for loop within a for loop to iterate over the suit array and then number array for each suit
// 
