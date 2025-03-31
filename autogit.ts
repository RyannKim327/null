function findSecondLargest(arr: number[]): number {
    let firstLargest = arr[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const array = [5, 2, 8, 10, 3];
const secondLargest = findSecondLargest(array);
console.log("Second largest element in the array is: " + secondLargest);
