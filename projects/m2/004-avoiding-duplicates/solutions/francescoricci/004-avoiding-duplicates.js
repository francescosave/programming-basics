// Exercise m2/004 avoiding sorted by francesco Ricci 

let list = [40, 30, 22, 80, 60, 60];

const firstElement = 0
const secondElement = 1
const secondToLastElement = -2
const lastElement = -1

function getSortedlist(list, descending) {
    /*
  This function return sorted list of the passed list argument
  */

    if (descending) {

        return list.sort(function (a, b) { return b - a });
    } else {

        return list.sort(function (a, b) { return a - b });
    }

}

function getElementList(list, index) {
    /*
    This function return element value by array
    */
    return list[index];
}

function getSortedListWithoutDuplicate(list) {
    /*
    sorted list,iterate list,if found two equal word remove element 
    */
    count = 1;
    getSortedlist(list);

    while (count < list.length) {
        //console.log(`${count}) count-1:${list[count-1]}   count:${list[count]}`)
        //console.log(`${count})  ${getElementList(list, count - 1)}-${getElementList(list, count)}`)

        if (getElementList(list, count - 1) === getElementList(list, count)) {
            //console.log('EQUAL');
            list.splice(count, 1);
        } else {
            //console.log('NOT EQUAL');
            count++;
        }

    }

    return list;

}


console.log(`original list           ${list}`);
console.log(`list without duplicate  ${getSortedListWithoutDuplicate(list)}`);
