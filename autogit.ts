function selectionSort(arr: number[]): number[] {
    const n = arr.length;
    
    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let minIndex = i;
        
        // Find the index of the minimum element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            // Swap using destructuring
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Example usage
const unsortedArray = [64, 25, 12, 22, 11];
console.log("Unsorted array:", unsortedArray);
const sortedArray = selectionSort(unsortedArray);
console.log("Sorted array:", sortedArray);
function selectionSortAlternative(arr: number[]): number[] {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        // Traditional swap method
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    
    return arr;
}
function genericSelectionSort<T>(arr: T[], comparator: (a: T, b: T) => number = (a, b) => 
    a > b ? 1 : a < b ? -1 : 0): T[] {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (comparator(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Usage with custom comparator
const users = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 }
];

const sortedUsers = genericSelectionSort(users, (a, b) => a.age - b.age);
