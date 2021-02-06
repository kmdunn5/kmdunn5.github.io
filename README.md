# Black-Jack-Black
Black Jack game

Psuedocode:

HTML ideas:
    [] set up sections for the dealer and player
    [] allow for adding divs that are the cards to each player area
    [] create buttons that will allow the player to hit or stand
    [] set up a section that will tell the player the current game state (current total, current action,
        () current total for player and dealer
        () current action
        () win/lose
        () total chips?
    Extras
        [] Add a betting input
        [] Add a way to choose what the background is

CSS ideas:
    [] Class for the card backs
    [] Class for each card to show what card
        () Class for all of each number's?
        () Class for all of each suit?
        () Different styles that allow each card to be an amalgamation of class and suit?

JS ideas
    [] Make the deal button deal a hand only if the player has won or lost
        () Randomize cards somehow
        () Player gets a card, dealer gets a facedown card
        () Player gets a card, dealer gets a card
            {} If the player has a K|Q|J and A, player wins
    [] Make the hit button deal a card to the player
        () If the player's total is > 21, player busts and loses
        () If the player's total = 21, player stands
        () Otherwise do nothing
    [] Make the stand button keep the player where they are and run the deal's turn
    [] Dealer's turn
        () Reveal hidden card
        () Deal hits until their total is 16, then stands
    [] Compare totals, winner wins


    Citations:
    card styling ideas: https://www.youtube.com/watch?v=D2H5rMK5AI8&ab_channel=CodeWhisperer