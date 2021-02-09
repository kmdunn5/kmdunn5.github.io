# Black-Jack-Black
Black Jack game

Psuedocode:  

HTML ideas:  
    1. [X] set up sections for the dealer and player  
    2. [X] allow for adding divs that are the cards to each player area  
    3. [X] create buttons that will allow the player to hit or stand  
    4. [X] set up a section that will tell the player the current game state (current total, current action,  
        a. [X] current total for player and dealer  
        b. [] current action  
        c. [X] win/lose  
        d. [] total chips?    
    5. Extras  
        a. [] Add a betting input  
        b. [] Add a way to choose what the background is  
        c. [] Split and or double down buttons  

CSS ideas:  
    1. [X] Class for the card backs  
    2. [X] Class for each card to show what card/Image for each card instead  
        a. [-] Class for all of each number's?  
        b. [-] Class for all of each suit?  
        c. [-] Different styles that allow each card to be an amalgamation of class and suit?  

JS ideas  
    1. [X] Make the deal button deal a hand only if the player has won or lost  
        a. [X] Randomize cards somehow  
        b. [X] Player gets a card, dealer gets a facedown card  
        c. [X] Player gets a card, dealer gets a card  
            i. [X] If the player has a K|Q|J|10 and A, player wins  
    2. [X] Make the hit button deal a card to the player  
        a. [X] If the player's total is > 21, player busts and loses  
        b. [X] If the player's total = 21, player stands  
        c. [X] Otherwise do nothing  
    3. [X] Make the stand button keep the player where they are and run the deal's turn  
    4 .[X] Dealer's turn  
        a. [X] Reveal hidden card  
        b. [X] Deal hits until their total is 16, then stands  
    5. [X] Compare totals, winner wins  


    Citations:
    card styling ideas: https://www.youtube.com/watch?v=D2H5rMK5AI8&ab_channel=CodeWhisperer