function quicksort(array) {
    if (array.length <= 1) {
        return array; // base case: array is already sorted
    } else {
        const pivot = array[Math.floor(Math.random() * array.length)]; // choose a random pivot
        const less = array.filter(value => value < pivot); // elements less than pivot
        const equal = array.filter(value => value === pivot); // elements equal to pivot
        const greater = array.filter(value => value > pivot); // elements greater than pivot
        return [...quicksort(less), ...equal, ...quicksort(greater)]; // merge the sorted sub-arrays
    }
}

// Example usage:
const unsortedArray = [5, 3, 1, 6, 4, 2];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6]
