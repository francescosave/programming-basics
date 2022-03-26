
module.exports = { wordWithoutPunctation : function (text){
    /*
     This function return array to phrase without punctation il last character of word
    */
    
    const punctuation = "',.!?'";
    const list =  text.split(' ');
    const listWithoutPunctation = [];
    
    list.forEach(element => {
        
      const lastCharacter = element.slice(-1);
      const containsPuntaction = punctuation.includes(lastCharacter) 
    
      if(containsPuntaction) element = element.slice(0,-1);
      listWithoutPunctation.push(element);
    
    });
    
    return(listWithoutPunctation);
}};
