let array = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = array.indexOf(elementToRemove); // Get the index of the element to be removed
if (index > -1) {
    array.splice(index, 1); // Remove 1 element starting from the index
}

console.log(array); // Output: [1, 2, 4, 5]
