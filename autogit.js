function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    
    return arr[1];
}

// Example
const numbers = [10, 5, 8, 20, 15];
const secondLargest = findSecondLargest(numbers);
console.log("The second largest element is: " + secondLargest);
