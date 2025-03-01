function findKthSmallest(array: number[], k: number): number {
    if (k < 1 || k > array.length) {
        throw new Error('k is out of bounds');
    }

    // Sort the array in ascending order
    const sortedArray = array.slice().sort((a, b) => a - b);
    
    // Return the k-th smallest element (1-based index, hence k-1)
    return sortedArray[k - 1];
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallest(array, k)); // Output: 7
function partition(array: number[], left: number, right: number, pivotIndex: number): number {
    const pivotValue = array[pivotIndex];
    // Move the pivot to the end
    [array[pivotIndex], array[right]] = [array[right], array[pivotIndex]];
    
    let storeIndex = left;
    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            [array[storeIndex], array[i]] = [array[i], array[storeIndex]];
            storeIndex++;
        }
    }
    // Move the pivot to its final place
    [array[storeIndex], array[right]] = [array[right], array[storeIndex]];
    
    return storeIndex;
}

function quickSelect(array: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return array[left];
    }

    const pivotIndex = left + Math.floor(Math.random() * (right - left));
    pivotIndex = partition(array, left, right, pivotIndex);
    
    if (k === pivotIndex) {
        return array[k];
    } else if (k < pivotIndex) {
        return quickSelect(array, left, pivotIndex - 1, k);
    } else {
        return quickSelect(array, pivotIndex + 1, right, k);
    }
}

function findKthSmallest(array: number[], k: number): number {
    if (k < 1 || k > array.length) {
        throw new Error('k is out of bounds');
    }
    
    return quickSelect(array.slice(), 0, array.length - 1, k - 1);
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallest(array, k)); // Output: 7
