//exercise 005 by Francesco Ricci


function isDivible(number,divisor){
    /*
    This function return ...
    */
    
    return !Boolean(number % divisor) 
}

function setOfDisors(number){
    /*
    This function return ...
    */
    
    divisorsList = []

    if(isDivible(number,2)){

        lastDivisor = number / 2
        divisorsList = [1,2];

    } else {

        lastDivisor = parseInt(number / 3)
        divisorsList = [1];
    }

    for (let index = 3; index <= (lastDivisor ); index++) {
        
        if (isDivible(number,index)) {
            
            divisorsList.push(index)
        }
    }
    return divisorsList;
}

number = 28
console.log('Divisors of ' + number);
console.log(setOfDisors(number));



