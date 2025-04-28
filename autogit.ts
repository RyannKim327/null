function kthSmallestSort(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    const sorted = arr.slice().sort((a, b) => a - b);
    return sorted[k - 1];
}
function quickselect(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    function select(low: number, high: number): number {
        if (low === high) {
            return arr[low];
        }
        const pivotIndex = partition(low, high);
        const length = pivotIndex - low + 1;
        if (k === length) {
            return arr[pivotIndex];
        } else if (k < length) {
            return select(low, pivotIndex - 1);
        } else {
            return select(pivotIndex + 1, high, k - length);
        }
    }

    function partition(low: number, high: number): number {
        const pivot = arr[high];
        let i = low;
        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
        [arr[i], arr[high]] = [arr[high], arr[i]];
        return i;
    }

    return select(0, arr.length - 1);
}
