function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

// Example usage
const arr = [10, 5, 8, 20, 15];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element is: " + secondLargest);
