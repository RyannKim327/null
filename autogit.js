function findKthSmallest(arr, k) {
    if (k < 1 || k > arr.length) {
        return null;
    }

    const partition = (arr, left, right) => {
        const pivot = arr[right];
        let i = left;

        for (let j = left; j < right; j++) {
            if (arr[j] < pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        [arr[i], arr[right]] = [arr[right], arr[i]];
        return i;
    };

    const quickSelect = (arr, left, right, k) => {
        if (left === right) {
            return arr[left];
        }

        const pivotIndex = partition(arr, left, right);

        if (k === pivotIndex) {
            return arr[k];
        } else if (k < pivotIndex) {
            return quickSelect(arr, left, pivotIndex - 1, k);
        } else {
            return quickSelect(arr, pivotIndex + 1, right, k);
        }
    };

    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

const arr = [3, 1, 4, 2, 5];
const k = 2;
const kthSmallest = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element in the array is: ${kthSmallest}`);
