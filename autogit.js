function findSecondLargest(arr) {
    arr = arr.sort(function(a, b) {
        return b - a;
    });

    return arr[1];
}

// Test the function
const array = [3, 7, 1, 9, 5];
const secondLargest = findSecondLargest(array);
console.log("Second largest element:", secondLargest);
