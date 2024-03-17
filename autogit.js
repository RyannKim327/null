let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = array.indexOf(elementToRemove);
if (index > -1) {
    array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5]
