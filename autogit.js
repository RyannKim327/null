function removeDuplicates(array) {
    let uniqueArray = [];
    
    array.forEach((element) => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    
    return uniqueArray;
}

let originalArray = [1, 2, 2, 3, 4, 4, 5];
let newArray = removeDuplicates(originalArray);

console.log(newArray); // Output: [1, 2, 3, 4, 5]
