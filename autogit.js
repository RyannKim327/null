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

    return secondMax !== -Infinity ? secondMax : 'No second largest element found';
}

const arr = [10, 5, 20, 8, 15];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest); // Output: 15
