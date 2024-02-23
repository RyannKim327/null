function findKthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[k - 1]; // Return the k-th smallest element (index k-1)
}

// Example of how to use the function
const array = [7, 10, 4, 3, 20, 15];
const k = 2; // Find the 2nd smallest element

const kthSmallestElement = findKthSmallestElement(array, k);
console.log(`The ${k}-th smallest element is: ${kthSmallestElement}`);
