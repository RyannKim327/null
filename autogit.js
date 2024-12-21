// Function to reverse the order of elements in an array
function reverseArray(array) {
    let reversedArray = [];
    
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    
    return reversedArray;
}

// Example usage
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);

console.log(reversedArray);
