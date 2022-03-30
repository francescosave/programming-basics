// Exercise 012-shuffling-a-deck-of-cards by Francesco Ricci

const millestone = require('./millestone');

const suits = ['s', 'h', 'd' , 'c'];
const  values= ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

let deckOfCards = createDeck(suits,values); 
let shuffleDeckOfcards1 = createDeck(suits,values);
let shuffleDeckOfcards2 = createDeck(suits,values);

// This is deck of card shuffling with shuff unBiases
shuffle(shuffleDeckOfcards1,true);

// This is deck of card shuffling with shuff Biases
shuffle(shuffleDeckOfcards2,false);

console.log(deckOfCards);
console.log(shuffleDeckOfcards1);
console.log(shuffleDeckOfcards2);


function shuffle(shuffleDeckOfcards,unBiased) {
    /* This function returns the shuffled cards by replacing each element of the starting deck  */

    let temp = '';
    let idxDeckCards = 0;
    
    for (let idxDeckCards = 0; idxDeckCards < shuffleDeckOfcards.length; idxDeckCards++) {
       
           temp = shuffleDeckOfcards[idxDeckCards];
           start = unBiased ? idxDeckCards : 0;
           idxRandom = millestone.getRandomInt(start,52);
           shuffleDeckOfcards[idxDeckCards] = shuffleDeckOfcards[idxRandom];
           shuffleDeckOfcards[idxRandom] = temp;
    }

    return shuffleDeckOfcards;
}

function createDeck(suits , values) {
    /* This function return deck of card not shuffled and order 
       ['spades', 'hearts', 'diamonds' , 'clubs']
    */
    
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
