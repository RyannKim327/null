function findSecondLargest(arr) {
    arr.sort(function(a, b) {
        return b - a;
    });

    return arr[1];
}

// Example usage
const arr = [3, 8, 1, 9, 5, 12];
const secondLargest = findSecondLargest(arr);
console.log('Second largest element:', secondLargest);
