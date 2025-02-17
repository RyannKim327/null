function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found
        }

        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1; 
        } 
        // If target is smaller, ignore right half
        else {
            right = mid - 1; 
        }
    }
    
    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 5;
const result = binarySearch(sortedArray, target);

console.log(result); // Output: 2 (the index of the target)
