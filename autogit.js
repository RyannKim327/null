function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

// Example usage
const array = [10, 5, 20, 15];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 15
