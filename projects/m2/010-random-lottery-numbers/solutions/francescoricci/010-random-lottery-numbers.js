// exercise 010 random lottery numbers by Francesco Ricci

function getRandomInt(min, max) {
  /*
  This function generates an random number between min and max value. 
  */

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}


function getLotteryNumbers() {
  /*
  This function generates an array with six random numbers and teturns sorted.
  */

  let list = [];
  let count = 0;

  while (list.length < 6) {

    let numberRandom = getRandomInt(1, 49);
    count++;
    if (!list.includes(numberRandom)) {
      list.push(numberRandom);
    }
  }

  list.sort(function (a, b) { return a - b });
  
  return list
}

console.log(`Lottery number generation: ${getLotteryNumbers().toString()}`);