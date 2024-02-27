function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

// Example usage
const myArray = [5, 10, 2, 8, 15];
const secondLargest = findSecondLargest(myArray);

console.log("Second largest element: " + secondLargest);
