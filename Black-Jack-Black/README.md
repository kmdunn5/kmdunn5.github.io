# Black-Jack-Black
Black Jack game

### Rules:  

The goal of the game is to get the total of your cards as close to 21 as possible, without going over.  
To do this, you have the opportunity to add cards to your hand by requesting a "hit".  
Each card is worth the value that is shown on it's face. All cards with an image (King, Queen, Jack) are worth 10. Aces can be worth either 11 or 1.  
    The game will automatically evaluate an Ace to be the number that best suits the current situation. If your your other cards total under 11, it will assume you want your Ace to be 11 points, if your other cards total 11 or higher, it will assume you want your Ace to be worth 1.  
If your total ever exceeds 21, you will bust, which will lose you the game.  
When you decide that you no longer want to "hit", you must choose to "stand", so that the dealer knows that you are done with your turn.  
After you have chosen to "stand" the dealer will take their turn. The dealer will always stand if their total is above 16.  
When the cards are dealt, the dealer's first card will be dealt face down. Their second card will be dealt face up so that you can see what it is.  
When your turn is done, the dealer will show all of their cards, and "hit" until their total is above 16.  

To play, you need to deal the cards. Click the deal button to start a hand. You can choose to bet on this hand or play a hand without any consequence.  
    In order to play without betting, all you need to do is click the deal button.  
    In order to play with betting, you only need to input a number in the betting field, and then click the submit button. 
When you decide you want to hit, you can click the hit button.  
When you decide you want to stand, you can click the stand button.  

There will be a winner displayed when someone wins a round. At that point, the player will gain chips if they have won.  
If either the dealer or the player busts, the will be displayed too, and the appropriate winner will also display.  


### Some Problems

-Some cards images are darker, must be because of the file itself.  
-There is a separation between the first and second dealer card that I can't fix. I think it has something to do with removing it and prepending a new card, but I can't quite fix it.  

### Future Additions

-Change the backs of the cards to make this game more Jack Black-y
----Add different classes that will change the images on face down cards

-Build, shuffle, and draw from a deck  
----I currently have a function that will systematically randomize each card drawn. This means that I could potentially get the same card many times in a row. Mostly, this is fine, but with any scaling, it would make sense to make this game create a shuffled deck and pull from that deck

-Add the ability to add more players to the table
---- this would require a class to build each player that would then build all of the HTML and JS.




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
    array shuffle: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  