let arr = [1, 2, 3, 4, 5];
let elemToRemove = 3;

let index = arr.indexOf(elemToRemove);
if (index > -1) {
    arr.splice(index, 1);
}

console.log(arr); // Output: [1, 2, 4, 5]
