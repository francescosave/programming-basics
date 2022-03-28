// exercise 011-pig-latin by Francesco Ricci

console.log(wordPigLatin('Office'));

function wordPigLatin(wordEnglish){

    let pigLatinWord = '';
    let idx = 0;
    let endString = '';

    if(isConsonantOrY(firstLetter(wordEnglish))){
        
        for (let index = 0; index < wordEnglish.length; index++) {
            const element = wordEnglish[index];
            if(isVowel(wordEnglish[index])){
                 console.log(wordEnglish.substring(index));
                 pigLatinWord = wordEnglish.substring(index);
                 break ;
            }
        }
        
        endString = 'ay';
        pigLatinWord = pigLatinWord + endString;

    } else {

        endString = 'way';
        pigLatinWord = wordEnglish + endString;
    }

    return pigLatinWord;
}

function firstLetter(word){
    return word[0];
}

function isVowel(character){
    /*This function return if character is or no vowel */ 
    
    let vowel = 'aAeEiIoOuU';
    vowel.includes(character[0]) ? res = true : res = false
    return res;
}

function isConsonantOrY(character){
     /*This function return if character is or no consonant plus y includes  */ 
     
    let vowel = 'aeiou';
    vowel.includes(character[0]) ? res = false : res = true
    return res
}