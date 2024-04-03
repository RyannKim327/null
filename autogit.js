function findSecondLargest(arr) {
    let max = arr[0];
    let secondMax = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

// Test the function
const arr = [3, 5, 2, 8, 1, 9];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element is: " + secondLargest);
