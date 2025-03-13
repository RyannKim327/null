function insertionSort(arr: number[]): number[] {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Store the current element to be inserted
        let currentElement = arr[i];
        
        // Start comparing with the element before the current element
        let j = i - 1;
        
        // Move elements that are greater than currentElement 
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the current element in its correct position
        arr[j + 1] = currentElement;
    }
    
    return arr;
}

// Example usage
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", unsortedArray);

const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray);
function genericInsertionSort<T>(arr: T[], comparator: (a: T, b: T) => number = (a, b) => 
    a > b ? 1 : a < b ? -1 : 0): T[] {
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i];
        let j = i - 1;
        
        while (j >= 0 && comparator(arr[j], currentElement) > 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = currentElement;
    }
    
    return arr;
}

// Usage with custom comparator
const stringArray = ['banana', 'apple', 'cherry'];
const sortedStrings = genericInsertionSort(stringArray, (a, b) => a.localeCompare(b));
console.log(sortedStrings);
