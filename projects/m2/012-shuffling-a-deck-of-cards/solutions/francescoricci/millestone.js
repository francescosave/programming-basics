module.exports = {
    getRandomInt: function (min, max) {
        /*
        This function generates an random number between min and max value. 
        */

        let result = [0, 0];
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);

    },
    shuffle: function (shuffleDeckOfcards,unBiased) {
        /* This function returns the shuffled cards by replacing each element of the starting deck  */

        let temp = '';
        let idxDeckCards = 0;

        for (let idxDeckCards = 0; idxDeckCards < shuffleDeckOfcards.length; idxDeckCards++) {

            temp = shuffleDeckOfcards[idxDeckCards];
            start = unBiased ? idxDeckCards : 0;
            idxRandom = module.exports.getRandomInt(start, 52);
            shuffleDeckOfcards[idxDeckCards] = shuffleDeckOfcards[idxRandom];
            shuffleDeckOfcards[idxRandom] = temp;
        }

        return shuffleDeckOfcards;
    },
    createDeck: function (suits , values) {
        /* This function return deck of card not shuffled and order 
               ['spades', 'hearts', 'diamonds' , 'clubs']
            */

        let deckOfCards = [];

        for (let idxSuits = 0; idxSuits < suits.length; idxSuits++) {

            const elementSuits = suits[idxSuits];

            for (let idxValues = 0; idxValues < values.length; idxValues++) {

                const elementValues = values[idxValues];
                //console.log(`${elementSuits}${elementValues}`);
                deckOfCards.push(elementSuits + elementValues)
            }
        }

        return deckOfCards;
    }

};
