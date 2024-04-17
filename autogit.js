function quickSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        const pivot = array[0];
        const left = [];
        const right = [];
        
        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        
        return quickSort(left).concat(pivot, quickSort(right));
    }
}

// Example usage:
const unsortedArray = [5, 3, 8, 1, 2, 7, 4];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
