// exercise 008 by Francesco Ricci

const millestone = require('./millestone.js');

list = millestone.wordWithoutPunctation("Information School Graduate, seeks gradUate school information");

//console.log(list);
//console.log(millestone.mirrorOfArr(list));

if(list.toString() === millestone.mirrorOfArr(list).toString()){
    
    console.log(`Phrase ${list.toString()} is Palindromes`);
} else {

    console.log(`Phrase ${list.toString()} is not Palindromes`);
};