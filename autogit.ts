function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    arr.sort((a, b) => a - b); // Sort in ascending order
    return arr[k - 1]; // k is 1-based index
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(arr, k)); // Output: 7
class MinHeap {
    private heap: number[] = [];

    insert(value: number) {
        this.heap.push(value);
        this.bubbleUp();
    }

    removeMin(): number | null {
        if (this.heap.length === 0) {
            return null;
        }
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    private bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    private bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}

function kthSmallest(arr: number[], k: number): number {
    const minHeap = new MinHeap();

    for (const num of arr) {
        minHeap.insert(num);
    }

    let result = null;
    for (let i = 0; i < k; i++) {
        result = minHeap.removeMin();
    }

    return result as number; // Since k is valid, result cannot be null
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(arr, k)); // Output: 7
function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    // Move pivot to end
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            [arr[storeIndex], arr[i]] = [arr[i], arr[storeIndex]];
            storeIndex++;
        }
    }

    // Move pivot to its final place
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex;
}

function quickSelect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left]; // Only one element
    }

    // Select a random pivot index
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;

    pivotIndex = partition(arr, left, right, pivotIndex);

    // The pivot is in its final sorted position
    if (k === pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

function kthSmallest(arr: number[], k: number): number {
    if (k < 1 || k > arr.length) {
        throw new Error("k is out of bounds");
    }
    return quickSelect(arr, 0, arr.length - 1, k - 1); // k is 1-based index
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log(kthSmallest(arr, k)); // Output: 7
