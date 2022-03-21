// Exercise m2/003 array sorted by francesco Ricci 

let list = [5,100,55,77,151,11,53,20,50,4,7,9];

const firstElement = 0
const secondElement = 1
const secondToLastElement = -2
const lastElement = -1

function getSortedlist(list,descending){
  if (descending){
    return list.sort(function(a,b){return b-a});
  }else{
    return list.sort(function(a,b){return a-b});
  }
  
}

function getElementList(position,list){
    return list[position];
}

console.log(`${list}`)
console.log(`${getSortedlist(list)}`);
console.log(`first          : ${(list)[firstElement]}`);
console.log(`second         : ${(list)[secondElement]}`);
console.log(`secont to last : ${(list).slice(secondToLastElement,lastElement)}`);
console.log(`last           : ${(list).slice(lastElement)}`);

