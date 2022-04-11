// Exercise 012-shuffling-a-deck-of-cards by Francesco Ricci

// variables declaration
const millestone = require('./millestone');
const suits = ['s', 'h', 'd' , 'c'];
const  values= ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
let deckOfCards = millestone.createDeck(suits,values); 
let shuffleDeckOfcards1 = millestone.createDeck(suits,values);
let shuffleDeckOfcards2 = millestone.createDeck(suits,values);

// This is deck of card shuffling with shuff unBiases
millestone.shuffle(shuffleDeckOfcards1,true);

// This is deck of card shuffling with shuff Biases
millestone.shuffle(shuffleDeckOfcards2,false);

console.log(deckOfCards);
console.log(shuffleDeckOfcards1);
console.log(shuffleDeckOfcards2);