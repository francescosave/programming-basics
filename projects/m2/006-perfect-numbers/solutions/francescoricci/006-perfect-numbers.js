//exercise 006 perfect numbers  by Francesco Ricci

function isDivible(number, divisor) {
    return !Boolean(number % divisor)
}

function setOfDisors(number) {

    divisorsList = []

    if (isDivible(number, 2)) {

        lastDivisor = number / 2
        divisorsList = [1, 2];

    } else {

        lastDivisor = parseInt(number / 3)
        divisorsList = [1];
    }

    for (let index = 3; index <= (lastDivisor); index++) {

        if (isDivible(number, index)) {

            divisorsList.push(index)
        }
    }
    return divisorsList;
}

for (let index = 1; index <= 9999; index++) {
    
    number = index
    setOfDisorsList = setOfDisors(number);
    
    const sumList = setOfDisorsList.reduce((acc, cur) => {
        
        var sum = acc + cur;
        return sum;
    }, 0)

    if (number === sumList) {
        
        console.log( number + ' is number PERFECT');
    }   // else number is number not PERFECT
    
}