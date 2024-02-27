function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[1];
}

// Example:
const myArray = [5, 2, 8, 10, 3];
const secondLargest = findSecondLargest(myArray);
console.log("Second Largest Element:", secondLargest);
