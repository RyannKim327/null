function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return quickSort(left).concat(pivot, quickSort(right));
    }
}

// Example usage:
const unsortedArray = [5, 3, 10, 1, 6, 4];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
