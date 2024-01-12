function quicksort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        const pivot = array[0];
        const lesser = [];
        const greater = [];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < pivot) {
                lesser.push(array[i]);
            } else {
                greater.push(array[i]);
            }
        }

        return quicksort(lesser).concat(pivot, quicksort(greater));
    }
}

// Example usage
const unsortedArray = [5, 9, 3, 1, 8, 6, 2, 7, 4];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);
