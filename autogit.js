function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    if (arr.length < 2) {
        return "Array must have at least two elements";
    }

    return arr[1];
}

// Example
const numbers = [10, 5, 20, 15];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 15
