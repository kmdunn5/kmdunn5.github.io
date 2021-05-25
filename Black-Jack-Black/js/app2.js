// This file is the growth after learning more about coding. OOP organization is better and makes sense, and each class gets instatiated when it needs to be, and doesn't get used unless it needs to be.

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
    randomCard = (key) => {
        return Math.floor(Math.random() * key.length);
    }
    cardNumber = () => {
        return BlackJackConstants.cardNumbers[this.randomCard(BlackJackConstants.cardNumbers)];
    }
    cardSuit = () => {
        return BlackJackConstants.cardSuits[this.randomCard(BlackJackConstants.cardSuits)];
    }
    createCard = (number, suit, faceStatus) => {
        let card = new Card(number, suit, faceStatus);
        return card;
    }
}

class Hand {
    sum = (hand) => {
        let total = 0;
        let numberOfAces = 0;
        for (let i = 0; i < hand.length; i++) {

            if (hand[i].number === 'J' || hand[i].number === 'Q' || hand[i].number === 'K') {
                total = total + 10;

            } else if (hand[i].number === 'A') {
                numberOfAces += 1

            } else {
                total = total + parseInt(hand[i].number, 10);
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
}

class Deck {
    dealCard = (area, face, hand) => {
        let $newDiv = $('<div>').addClass('card');
        let num = this.cardNumber();
        let suit = this.cardSuit();
        let newCard = this.createCard(num, suit, face);
        hand.push(newCard);
        $newDiv.addClass(`${num} ${suit} ${newCard.face}`);
        area.append($newDiv);
    }

    deal = () => {
        if (currentGameState === gameStates[2] || currentGameState === '') {
            
            //========remove card divs and reset game
            
            winner = '';
            $('.card').remove();
            BlackJackConstants.playerHand.splice(0, BlackJackConstants.playerHand.length);
            BlackJackConstants.dealerHand.splice(0, BlackJackConstants.dealerHand.length);
            playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal);
            dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);
            $('#dealerTotal').text(dealerTotal);
            
            //=======add card div to player

            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal)
            
            //======add card div to dealer facedown

            BlackJackConstants.$dealerArea.append($('<div class="card down">'));
            dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);

            //=====add card div to player

            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal);
            
            //========add card div to deal

            CardMethods.dealCard(BlackJackConstants.$dealerArea, 'up', BlackJackConstants.dealerHand);
            dealerTotal = BlackJackMethods.sum(BlackJackConstants.dealerHand);
            $('#dealerTotal').text(dealerTotal);
            
            // 

            currentGameState = gameStates[0];
            BlackJackConstants.$readOut.text(currentGameState);
            if (playerTotal === 21) {
                BlackJackConstants.$readOut.text('Jack Black! I mean Blackjack! Player wins!');
                winner = 'player';
                evaluateBet();
                currentGameState = gameStates[2];
            }
        } else {
            alert('The game is in progress. Please finish the hand');
        }
    }
}

class Player {
    hit = () => {
        if (currentGameState === gameStates[0]) {
            
            //========add card to player area
            
            CardMethods.dealCard(BlackJackConstants.$playerArea, 'up', BlackJackConstants.playerHand);
            playerTotal = BlackJackMethods.sum(BlackJackConstants.playerHand);
            $('#playerTotal').text(playerTotal);
            BlackJackMethods.checkBust();
        } else {
            alert('It\'s not your turn.');
        }
    }

    stand = () => {
        if (currentGameState === gameStates[0]) {
            
            //=======set game state to dealer turn
            
            currentGameState = gameStates[1];
            BlackJackConstants.$readOut.text(currentGameState);
            $('.down').remove();
            dealerTurn();
        } else {
            alert('Please deal a new hand.');
        }
    }

    bet = () => {
        currentBet = parseInt($('input').val());
        if (currentBet <= playerChips) {
            playerChips -= currentBet;
            $chipsTotal.text(playerChips);
            BlackJackConstants.$readOut.text(`You've bet ${currentBet} chips. Good luck!`);
        } else if (currentBet > playerChips) {
            alert('You don\'t have enough chips, bet again please.');
        } else {
            alert('You haven\'t bet yet, please enter a chip amount.')
        }
    }
}

class Table {

    createDealer = () => {

    }

    createPlayers = (playerNum) => {

    }

    checkWinner = () => {
        if (currentGameState !== gameStates[2]) {
            if (playerTotal > dealerTotal) {
                BlackJackConstants.$readOut.text('You Win! Will you teach me your ways?');
                winner = 'player';
                evaluateBet();
            } else if (dealerTotal > playerTotal) {
                BlackJackConstants.$readOut.text('Dealer Wins. Crapola!');
                winner = 'dealer';
                evaluateBet();
            } else {
                BlackJackConstants.$readOut.text('You both have the same number, it\'s a push!')
                winner = 'push';
                evaluateBet();
            }
        }
    }

    checkBust = () => {
        if (playerTotal > 21) {
            currentGameState = gameStates[2]
            BlackJackConstants.$readOut.text('Player Busted, Dealer Wins...I guess they don\'t know genius when they see it. ');
            winner = 'dealer';
            evaluateBet();
        } else if (dealerTotal > 21) {
            currentGameState = gameStates[2]
            BlackJackConstants.$readOut.text('Dealer Busted! Player Wins! That\'s especially delicous.');
            winner = 'player';
            evaluateBet();
        }
    }
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