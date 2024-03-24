function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });
    return arr[1];
}

// Example usage
let arr = [10, 5, 15, 20];
let secondLargest = findSecondLargest(arr);
console.log("The second largest element is: " + secondLargest);
