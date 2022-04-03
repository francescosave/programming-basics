// Exercise 013-tokenizing-a-string by francesco Ricci

let expression = '(15+4 *3)+10 -9*(10/6)*( 1+555)' 

console.log(expression);
console.log(convertTokenSingleChar(expression).toString());
// return ['(','1','5','+','4','*','3',')','+','1','0','-','9','*','(','1',0','/','6',')','*','(','1','+','5','5','5',')']

console.log(convertTokenAggregate(convertTokenSingleChar(expression)).toString());
// return ['(','15','+','4','*','3',')','+','10','-','9','*','(','10','/','6',')','*','(','1','+','555',')']

function convertTokenSingleChar(expression) {
/*This function return an array with single caracter of expression */
    let arraySingelChar = [];
    let characterValid = '()+-*/0123456789';

    for (const element of expression) {
        
        if(characterValid.includes(element)) {

            arraySingelChar.push(element);
        }
    }
    return arraySingelChar;
}

function convertTokenAggregate(arraySingelChar) {
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


// test
console.log(expression === '(15+4 *3)+10 -9*(10/6)*( 1+555)');
console.log(convertTokenSingleChar(expression).toString() === '(,1,5,+,4,*,3,),+,1,0,-,9,*,(,1,0,/,6,),*,(,1,+,5,5,5,)');
console.log(convertTokenAggregate(convertTokenSingleChar(expression)).toString()=== '(,15,+,4,*,3,),+,10,-,9,*,(,10,/,6,),*,(,1,+,555,)');    