# Black-Jack-Black
Black Jack game

Psuedocode:  

HTML ideas:  
    1. [X] set up sections for the dealer and player  
    1. [X] allow for adding divs that are the cards to each player area  
    1. [X] create buttons that will allow the player to hit or stand  
    1. [] set up a section that will tell the player the current game state (current total, current action,  
        1. () current total for player and dealer  
        1. () current action  
        1. () win/lose  
        1. () total chips?  
    1. Extras
        1. [] Add a betting input  
        1. [] Add a way to choose what the background is  
        1. Split and or double down buttons  

CSS ideas:  
    1. [X] Class for the card backs  
    1. [] Class for each card to show what card  
        1. () Class for all of each number's?  
        1. () Class for all of each suit?  
        1. () Different styles that allow each card to be an amalgamation of class and suit?  

JS ideas  
    1. [X] Make the deal button deal a hand only if the player has won or lost  
        1. [X] Randomize cards somehow  
        1. [X] Player gets a card, dealer gets a facedown card  
        1. [X] Player gets a card, dealer gets a card  
            1. [X] If the player has a K|Q|J|10 and A, player wins  
    1. [X] Make the hit button deal a card to the player  
        1. [X] If the player's total is > 21, player busts and loses  
        1. [] If the player's total = 21, player stands  
        1. [X] Otherwise do nothing  
    1. [X] Make the stand button keep the player where they are and run the deal's turn  
    1 .[X] Dealer's turn  
        1. [X] Reveal hidden card  
        1. [X] Deal hits until their total is 16, then stands  
    1. [X] Compare totals, winner wins  


    Citations:
    card styling ideas: https://www.youtube.com/watch?v=D2H5rMK5AI8&ab_channel=CodeWhisperer