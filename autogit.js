function removeDuplicates(arr) {
    let uniqueArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}

// Test the function
let arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let arrWithoutDuplicates = removeDuplicates(arrWithDuplicates);
console.log(arrWithoutDuplicates); // Output: [1, 2, 3, 4, 5]
