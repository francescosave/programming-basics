// Exercise m2-009-formatting-list

let fruits = ['Banana','Orange','Cocomero','Mele Banane','Fragole','Manderini','Pesche Vaniglia'];

// create filtered1 array(fruits) down to the second last element with filter function.
const filtered1 = fruits.filter((elem,idx,arr) => idx < arr.length - 1); 
console.log(filtered1);

// create filtered2 array with two elements(filtered1 + last element fruits)
const filtered2 = [filtered1.toString(),fruits.slice(-1)[0]]
console.log(filtered2);

//execute join function on the filtered2 array and print its value.
console.log(filtered2.join(' and '));
