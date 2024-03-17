let array = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
let array = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
let array = [1, 2, 3, 3, 4, 5, 5];
let uniqueArray = array.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
