// Exercise 014-sublists by Francesco Ricci

let smaller = [1, 2];
let larger = [1, 2, 3];

console.log('smaller array ', smaller);
console.log('larger array ', larger);

if (isSublist(smaller, larger)) {
    console.log('smaller array is sublist of larger array');
} else {
    console.log('smaller array isn\'t sublist of larger array');
}

function isSublist(smaller, larger) {
    /* This function return is first array argument is sublist of second array argument */
    
    let isSublist = false;
    let isEmpty = !Boolean(smaller.length);
    let isOneElement = smaller.length === 1
    let isMoreThanOneElement = smaller.length > 1

    // case where smaller is empty array
    if (isEmpty) {
        console.log('is empty');
        isSublist = true;
    }

    // case where smaller contain one element
    if (isOneElement) {
        console.log('is one element');
        let isIncluded = larger.includes(smaller[0]);
        if (isIncluded) {
            isSublist = true;
        } else {
            isSublist = false;
        }
    }

    // case where smaller contain more than one element
    if (isMoreThanOneElement) {
        console.log('is more than one element');
        console.log('feature not implemented');
        isSublist = undefined;
    }

    return isSublist;
}