function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example
const arr = [10, 20, 5, 15, 30];
const secondLargest = findSecondLargest(arr);
console.log("Second largest element in the array is:", secondLargest);
