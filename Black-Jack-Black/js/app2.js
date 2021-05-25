//=====================//
//======Constants======//
//=====================//

const $playerArea = $('#playerArea');
const $dealerArea = $('#dealerArea');
const $dealButton = $('#deal');
const $hitButton = $('#hit');
const $standButton = $('#stand');
const $readOut = $('#readOut');

const gameStates = ['Your Turn', 'Dealer\'s Turn', 'Game End'];
const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardSuits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const playerHand = [];
const dealerHand = [];

const $chipAmount = $('#chipAmount');
const $bet = $('#submit');
const $chipsTotal = $('#chipsTotal');

const $aboutButton = $('#about');
const $modal = $('#modal');
const $closeButton = $('#close');

//======================//
//===Global Variables===//
//======================//

let currentGameState = '';
let playerTotal = 0;
let dealerTotal = 0;
let winner = ''
let playerChips = 20;
let currentBet = 0;

$chipsTotal.text(playerChips);
//=====================//
//====Table Classes====//
//=====================//

class Card {
    constructor (number, suit, face) {
        this.number = number;
        this.suit = suit;
        this.face = face;
    }
}

class Hand {

}

class Deck {

}

class Player {

}

class Table {

}

//=====================//
//====Dealer's Turn====//
//=====================//

// const dealerTurn = () => {
//     let $newDiv = $('<div>').addClass('card');
//     let num = CardMethods.cardNumber();
//     let suit = CardMethods.cardSuit();
//     let newCard = CardMethods.createCard(num, suit, 'up');
//     BlackJackConstants.dealerHand.push(newCard);
//     $newDiv.addClass(`${num} ${suit} ${newCard.face}`);
//     BlackJackConstants.$dealerArea.prepend($newDiv);
//     dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);
//     $('#dealerTotal').text(dealerTotal);
//     while (dealerTotal < 17) {
//         CardMethods.dealCard(BlackJackConstants.$dealerArea, 'up', BlackJackConstants.dealerHand);
//         dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);
//         $('#dealerTotal').text(dealerTotal);
//     }
//     BlackJackMethods.checkBust();
//     BlackJackMethods.checkWinner();
//     currentGameState = gameStates[2];
// }

//======================//
//===Button Functions===//
//======================//

// const deal = () => {
//     if (currentGameState === gameStates[2] || currentGameState === '') {
        
//         //========remove card divs and reset game
        
//         winner = '';
//         $('.card').remove();
//         BlackJackConstants.playerHand.splice(0, BlackJackConstants.playerHand.length);
//         BlackJackConstants.dealerHand.splice(0, BlackJackConstants.dealerHand.length);
//         playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
//         $('#playerTotal').text(playerTotal);
//         dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);
//         $('#dealerTotal').text(dealerTotal);
        
//         //=======add card div to player

//         CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
//         playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
//         $('#playerTotal').text(playerTotal)
        
//         //======add card div to dealer facedown

//         BlackJackConstants.$dealerArea.append($('<div class="card down">'));
//         dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);

//         //=====add card div to player

//         CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
//         playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
//         $('#playerTotal').text(playerTotal);
        
//         //========add card div to deal

//         CardMethods.dealCard(BlackJackConstants.$dealerArea, 'up', BlackJackConstants.dealerHand);
//         dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);
//         $('#dealerTotal').text(dealerTotal);
        
//         // 

//         currentGameState = gameStates[0];
//         BlackJackConstants.$readOut.text(currentGameState);
//         if (playerTotal === 21) {
//             BlackJackConstants.$readOut.text('Jack Black! I mean Blackjack! Player wins!');
//             winner = 'player';
//             evaluateBet();
//             currentGameState = gameStates[2];
//         }
//     } else {
//         alert('The game is in progress. Please finish the hand');
//     }
// }

// const hit = () => {
//     if (currentGameState === gameStates[0]) {
        
//         //========add card to player area
        
//         CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
//         playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
//         $('#playerTotal').text(playerTotal);
//         BlackJackMethods.checkBust();
//     } else {
//         alert('It\'s not your turn.');
//     }
// }

// const stand = () => {
//     if (currentGameState === gameStates[0]) {
        
//         //=======set game state to dealer turn
        
//         currentGameState = gameStates[1];
//         BlackJackConstants.$readOut.text(currentGameState);
//         $('.down').remove();
//         dealerTurn();
//     } else {
//         alert('Please deal a new hand.');
//     }
// }

//=====================//
//==Button On Clicks===//
//=====================//

$aboutButton.click(() => {
    $modal.show();
});
  
$closeButton.click(() => {
    $modal.hide();
});