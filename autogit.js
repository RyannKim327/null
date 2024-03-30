function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

// Example usage
const arr = [3, 7, 1, 9, 5];
const secondLargest = findSecondLargest(arr);
console.log("Second Largest Element:", secondLargest);
