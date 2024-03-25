function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let array = [1, 2, 3, 4, 2, 1];
let uniqueArray = removeDuplicates(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4]
