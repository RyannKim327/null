function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    
    // Sort the array
    arr.sort((a, b) => a - b);
    
    // Return the k-1 indexed element
    return arr[k - 1];
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
const result = kthSmallest(array, k);
console.log(`${k}th smallest element is ${result}`); // Output: 7th smallest element is 7
