function kthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[k - 1]; // Return the kth smallest element
}

// Example usage
const array = [3, 1, 4, 2, 5];
const k = 2;
const result = kthSmallestElement(array, k);

console.log(`The ${k}th smallest element is: ${result}`);
function kthSmallestElement(arr, k) {
    function partition(arr, left, right) {
        const pivot = arr[right];
        let i = left;
        for (let j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
        [arr[i], arr[right]] = [arr[right], arr[i]];
        return i;
    }

    function quickselect(arr, left, right, k) {
        if (left === right) return arr[left];

        const pivotIndex = partition(arr, left, right);

        if (pivotIndex === k) {
            return arr[k];
        } else if (k < pivotIndex) {
            return quickselect(arr, left, pivotIndex - 1, k);
        } else {
            return quickselect(arr, pivotIndex + 1, right, k);
        }
    }

    return quickselect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const array = [3, 1, 4, 2, 5];
const k = 2;
const result = kthSmallestElement(array, k);

console.log(`The ${k}th smallest element is: ${result}`);
