function quicksort(arr) {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }
    
    // Choose a pivot element
    const pivot = arr[Math.floor(arr.length / 2)];
    
    // Partition the array
    const less = [];
    const equal = [];
    const greater = [];
    
    for (let element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element > pivot) {
            greater.push(element);
        } else {
            equal.push(element);
        }
    }
    
    // Recursively sort the sub-arrays
    return [...quicksort(less), ...equal, ...quicksort(greater)];
}

// Example usage
const unsortedArray = [9, 4, 2, 7, 5, 3, 1, 6, 8];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);
