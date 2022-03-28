// Exercise 012-shuffling-a-deck-of-cards by Francesco Ricci

console.log(createDeck());

function createDeck() {
/* This function return deck of card not shuffled and order */
    
    //  ['spades', 'hearts', 'diamonds' , 'clubs']
    //    pichhe    cuori     quadri       fiori 
    
    let suits = ['s', 'h', 'd' , 'c'];
    let values= ['0','A','1','2','3','4','5','6','7','8','9','T','J','Q','K'];
    let deckOfCards = [];

    

    for (let idxSuits = 0; idxSuits < suits.length; idxSuits++) {
        const elementSuits = suits[idxSuits];
        

        for (let idxValues = 0; idxValues < values.length; idxValues++) {
            const elementValues = values[idxValues];
            //console.log(`${elementSuits}${elementValues}`);
            deckOfCards.push(elementSuits+elementValues)
        }

        
    }
    
    return deckOfCards;
    
}
