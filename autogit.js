function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[1];
}

// Example
const numbers = [5, 10, 2, 8, 15];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 10
