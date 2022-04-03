// Exercise 013-tokenizing-a-string by francesco Ricci

const millestone = require('./millestone');
let expression = '(15+4 *3)+10 -9*(10/6)*( 1+555)' 

console.log(expression);

console.log(millestone.convertTokenSingleChar(expression).toString())
// return ['(','1','5','+','4','*','3',')','+','1','0','-','9','*','(','1',0','/','6',')','*','(','1','+','5','5','5',')']

console.log(millestone.convertTokenAggregate(millestone.convertTokenSingleChar(expression)).toString());
// return ['(','15','+','4','*','3',')','+','10','-','9','*','(','10','/','6',')','*','(','1','+','555',')']

// test
console.log(expression === '(15+4 *3)+10 -9*(10/6)*( 1+555)');
console.log(millestone.convertTokenSingleChar(expression).toString() === '(,1,5,+,4,*,3,),+,1,0,-,9,*,(,1,0,/,6,),*,(,1,+,5,5,5,)');
console.log(millestone.convertTokenAggregate(millestone.convertTokenSingleChar(expression)).toString()=== '(,15,+,4,*,3,),+,10,-,9,*,(,10,/,6,),*,(,1,+,555,)');
