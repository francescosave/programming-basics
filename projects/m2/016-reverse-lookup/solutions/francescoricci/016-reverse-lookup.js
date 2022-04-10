// exercise 016 reverse lokkup by francesco ricci


function reverseLookup(object, searchValue) {
    /* This function return */

    // varaibles declaration
    let arrayKey = []

    for (const key in object) if (object[key] === searchValue) arrayKey.push(key);

    return arrayKey.toString();
}

// varaibles declaration
let sidesSearch = 3;
let sidesFlatGeometricFigures = {
    scaleneTriangle: 3,
    isoscelesTriangle: 3,
    rectangleTriangle: 3,
    rectangle: 4,
    rhombus: 4,
    square: 4,
    trapezoid: 4,
    pentagon: 5,
    hexagon: 6
}

//Output
console.log('\n', sidesFlatGeometricFigures);
console.log('Search sides', sidesSearch);
console.log('found in ', reverseLookup(sidesFlatGeometricFigures, sidesSearch));

//tests
console.log('\nTest 1 ', reverseLookup(sidesFlatGeometricFigures, 2).length === 0)
console.log('Test 2 ', reverseLookup(sidesFlatGeometricFigures, 3).toString() === 'scaleneTriangle,isoscelesTriangle,rectangleTriangle')
console.log('Test 3 ', reverseLookup(sidesFlatGeometricFigures, 4).toString() === 'rectangle,rhombus,square,trapezoid')
console.log('Test 4 ', reverseLookup(sidesFlatGeometricFigures, 5).toString() === 'pentagon')
console.log('Test 5 ', reverseLookup(sidesFlatGeometricFigures, 6).toString() === 'hexagon')