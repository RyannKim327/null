function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
const myArray = [1, 2, 3, 4, 5];
console.log(isArraySorted(myArray)); // Output will be: true

const myUnsortedArray = [5, 2, 8, 1];
console.log(isArraySorted(myUnsortedArray)); // Output will be: false
