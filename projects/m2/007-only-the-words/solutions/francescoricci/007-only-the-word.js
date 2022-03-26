//exercise m2 007-only-the-word

let millestone = require('./millestone.js');
let text = "Contractions include: don’t, isn’t, and wouldn’t.";

listWithoutPunctation = millestone.wordWithoutPunctation(text);

console.log('\nPhrase original');

console.log(`${text}\n`)

console.log('Phrase with removed punctation in word');
console.log(`${millestone.wordWithoutPunctation(text).join(' ')}\n`);
