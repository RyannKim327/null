function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

// Example usage
let array = [5, 2, 9, 1, 7, 6];
let secondLargest = findSecondLargest(array);

console.log("Second largest element is: " + secondLargest);
