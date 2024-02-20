function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let pivot = arr[0];
        let left = [];
        let right = [];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
