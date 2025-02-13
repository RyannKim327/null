function kthSmallest(nums: number[], k: number): number {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
    
    // Return the kth smallest element (k-1 due to 0-based indexing)
    return nums[k - 1];
}

// Example usage
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(arr, k)); // Output: 7
function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    // Move the pivot to the end
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
  
    let storeIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            // Swap elements
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }
  
    // Move the pivot to its final place
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex;
}

function quickSelect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left];
    }

    // Select a random pivot
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    pivotIndex = partition(arr, left, right, pivotIndex);

    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

function kthSmallest(nums: number[], k: number): number {
    return quickSelect(nums, 0, nums.length - 1, k - 1);
}

// Example usage
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(arr, k)); // Output: 7
