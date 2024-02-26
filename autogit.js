function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least 2 elements";
    }
    
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

// Example usage
const numbers = [10, 5, 20, 8, 15];
const secondLargest = findSecondLargest(numbers);
console.log("Second largest element: ", secondLargest);
