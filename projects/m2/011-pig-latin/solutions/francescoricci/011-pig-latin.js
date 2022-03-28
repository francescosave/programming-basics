// exercise 011-pig-latin by Francesco Ricci

console.log(wordPigLatin('Office'));

function wordPigLatin(wordEnglish){
   /*This function return word traslated in pig latin */ 

    let pigLatinWord = '';
    let endString = '';

    if(isConsonantOrY(firstLetter(wordEnglish))){
        
        for (let index = 0; index < wordEnglish.length; index++) {
            const element = wordEnglish[index];
            if(isVowel(wordEnglish[index])){
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
    /*This function return only first character of word */ 

    return word[0];
}

function isVowel(character){
    /*This function return if character is a vowel */ 
    
    let vowel = 'aAeEiIoOuU';
    vowel.includes(character[0]) ? res = true : res = false
    return res;
}

function isConsonantOrY(character){
     /*This function returns if the character is not a consonant plus the y included*/ 
     
    let vowel = 'aeiou';
    vowel.includes(character[0]) ? res = false : res = true
    return res
}