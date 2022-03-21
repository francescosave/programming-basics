// Exercise m2/001 array sorted by francesco Ricci 

let list = [5,100,55,77,11,53,20,50,7,9];

function getSortedlist(list,descending){
  if (descending){
    return list.sort(function(a,b){return b-a});
  }else{
    return list.sort(function(a,b){return a-b});
  }
  
}

console.table(`original list: ${list}`)
console.table(`sorted   list: ${getSortedlist(list)}`);
