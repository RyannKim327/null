let arr = [1, 2, 3, 4, 5];
let elementToRemove = 3;

let index = arr.indexOf(elementToRemove);

if (index > -1) {
    arr.splice(index, 1);
}

console.log(arr); // [1, 2, 4, 5]
