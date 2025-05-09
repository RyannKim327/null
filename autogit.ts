function selectionSort(arr: number[]): number[] {
    // Make a copy to avoid mutating the original array, if you want to sort in-place, you can remove this
    const sortedArr = [...arr]; 
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
        let minIndex = i;
        
        // Find the index of the minimum element in the remaining array
        for (let j = i + 1; j < sortedArr.length; j++) {
            if (sortedArr[j] < sortedArr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
        }
    }
    return sortedArr;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
const sorted = selectionSort(numbers);
console.log(sorted); // [11, 12, 22, 25, 64]
