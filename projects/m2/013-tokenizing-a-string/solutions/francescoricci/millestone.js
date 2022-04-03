
module.exports = {
    convertTokenSingleChar: function (expression) {
    /*This function return an array with single caracter of expression */
    let arraySingelChar = [];
    let characterValid = '()+-*/0123456789';

    for (const element of expression) {
        
        if(characterValid.includes(element)) {

            arraySingelChar.push(element);
        }
    }
    return arraySingelChar;
    },
    convertTokenAggregate: function (arraySingelChar) {
        /*This function return an array with aggregate element number */
        
    let array_compact = [];
    let number = '0123456789';
        
    for (let idx = 0; idx < arraySingelChar.length; idx++) {
        
        const element = arraySingelChar[idx];
        const elementbefore = arraySingelChar[idx-1];
        if (number.includes(element)) {
            if (number.includes(elementbefore)) {
                
                array_compact[array_compact.length-1] = array_compact.slice(-1) + element  
            } else {
                
                array_compact.push(element) 
            }
        } else {
            
            array_compact.push(element) 
        }
    }

    return array_compact;
    }
};