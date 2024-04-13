function findSecondLargest(arr) {
    arr.sort(function(a, b){return b - a});
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    if (uniqueArr.length < 2) {
        return "Array does not have a second largest element";
    } else {
        return uniqueArr[1];
    }
}

// Test the function
let array = [10, 5, 20, 8, 15];
console.log(findSecondLargest(array)); // Output: 15
