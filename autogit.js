let array = [1, 2, 3, 4, 5];
let indexToRemove = 2;

array.splice(indexToRemove, 1);

console.log(array); // Output: [1, 2, 4, 5]
let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;
let indexToRemove = array.indexOf(elementToRemove);

if (indexToRemove > -1) {
    array.splice(indexToRemove, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
