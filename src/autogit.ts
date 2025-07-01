function findKthSmallestBySorting(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    // Sort the array in ascending order
    const sortedArray = [...arr].sort((a, b) => a - b);

    // Return the kth smallest element (1-based index)
    return sortedArray[k - 1];
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(findKthSmallestBySorting(arr, k)); // Output: 7
class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    // Insert a new element into the heap
    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    // Remove and return the smallest element from the heap
    extractMin(): number {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    // Get the size of the heap
    size(): number {
        return this.heap.length;
    }

    // Helper function to maintain heap property upwards
    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    // Helper function to maintain heap property downwards
    private bubbleDown(index: number): void {
        const length = this.heap.length;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }
}

function findKthSmallestByHeap(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    const maxHeap = new MinHeap();

    for (const num of arr) {
        maxHeap.insert(num);
        if (maxHeap.size() > k) {
            maxHeap.extractMin(); // Remove the smallest element if heap size exceeds k
        }
    }

    // The root of the heap is the kth smallest element
    return maxHeap.extractMin();
}

// Example usage:
const arr2 = [7, 10, 4, 3, 20, 15];
const k2 = 3;
console.log(findKthSmallestByHeap(arr2, k2)); // Output: 7
function findKthSmallestByQuickselect(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }

    const quickselect = (left: number, right: number, index: number): number => {
        if (left === right) {
            return arr[left];
        }

        let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
        pivotIndex = partition(left, right, pivotIndex);

        if (index === pivotIndex) {
            return arr[index];
        } else if (index < pivotIndex) {
            return quickselect(left, pivotIndex - 1, index);
        } else {
            return quickselect(pivotIndex + 1, right, index);
        }
    };

    const partition = (left: number, right: number, pivotIndex: number): number => {
        const pivotValue = arr[pivotIndex];
        // Move pivot to end
        [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
        let storeIndex = left;

        for (let i = left; i < right; i++) {
            if (arr[i] < pivotValue) {
                [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
                storeIndex++;
            }
        }

        // Move pivot to its final place
        [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
        return storeIndex;
    };

    return quickselect(0, arr.length - 1, k - 1);
}

// Example usage:
const arr3 = [7, 10, 4, 3, 20, 15];
const k3 = 3;
console.log(findKthSmallestByQuickselect(arr3, k3)); // Output: 7
