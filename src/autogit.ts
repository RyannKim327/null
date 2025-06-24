function findKthSmallestBySorting(arr: number[], k: number): number | null {
    if (k < 1 || k > arr.length) {
        return null; // Invalid k value
    }

    const sortedArr = [...arr].sort((a, b) => a - b);
    return sortedArr[k - 1];
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
const kthSmallest = findKthSmallestBySorting(array, k);
console.log(`The ${k}rd smallest element is:`, kthSmallest); // Output: 7
class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMin(): number | null {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0 && end !== undefined) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    size(): number {
        return this.heap.length;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element >= parent) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    private sinkDown(): void {
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
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}

function findKthSmallestByHeap(arr: number[], k: number): number | null {
    if (k < 1 || k > arr.length) {
        return null; // Invalid k value
    }

    const minHeap = new MinHeap();
    arr.forEach(num => minHeap.insert(num));

    let kthSmallest: number | null = null;
    for (let i = 0; i < k; i++) {
        kthSmallest = minHeap.extractMin();
    }

    return kthSmallest;
}

// Example usage:
const array2 = [7, 10, 4, 3, 20, 15];
const k2 = 3;
const kthSmallest2 = findKthSmallestByHeap(array2, k2);
console.log(`The ${k2}rd smallest element is:`, kthSmallest2); // Output: 7
function findKthSmallestByQuickselect(arr: number[], k: number): number | null {
    if (k < 1 || k > arr.length) {
        return null; // Invalid k value
    }

    const n = arr.length;
    const targetIndex = k - 1;

    function quickselect(left: number, right: number): number {
        if (left === right) {
            return arr[left];
        }

        let pivotIndex = partition(left, right);

        if (pivotIndex === targetIndex) {
            return arr[pivotIndex];
        } else if (pivotIndex > targetIndex) {
            return quickselect(left, pivotIndex - 1);
        } else {
            return quickselect(pivotIndex + 1, right);
        }
    }

    function partition(left: number, right: number): number {
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

    return quickselect(0, n - 1);
}

// Example usage:
const array3 = [7, 10, 4, 3, 20, 15];
const k3 = 3;
const kthSmallest3 = findKthSmallestByQuickselect(array3, k3);
console.log(`The ${k3}rd smallest element is:`, kthSmallest3); // Output: 7
// Sorting Method
function findKthSmallestBySorting(arr: number[], k: number): number | null {
    if (k < 1 || k > arr.length) return null;
    const sortedArr = [...arr].sort((a, b) => a - b);
    return sortedArr[k - 1];
}

// Heap Method
class MinHeap {
    private heap: number[] = [];

    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMin(): number | null {
        if (this.size() === 0) return null;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0 && end !== undefined) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    size(): number {
        return this.heap.length;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element >= parent) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    private sinkDown(): void {
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
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}

function findKthSmallestByHeap(arr: number[], k: number): number | null {
    if (k < 1 || k > arr.length) return null;
    const minHeap = new MinHeap();
    arr.forEach(num => minHeap.insert(num));
    let kthSmallest: number | null = null;
    for (let i = 0; i < k; i++) {
        kthSmallest = minHeap.extractMin();
    }
    return kthSmallest;
}

// Quickselect Method
function findKthSmallestByQuickselect(arr: number[], k: number): number | null {
    if (k < 1 || k > arr.length) return null;
    const n = arr.length;
    const targetIndex = k - 1;

    function quickselect(left: number, right: number): number {
        if (left === right) return arr[left];

        let pivotIndex = partition(left, right);

        if (pivotIndex === targetIndex) {
            return arr[pivotIndex];
        } else if (pivotIndex > targetIndex) {
            return quickselect(left, pivotIndex - 1);
        } else {
            return quickselect(pivotIndex + 1, right);
        }
    }

    function partition(left: number, right: number): number {
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

    return quickselect(0, n - 1);
}

// Example usage:
const array = [7, 10, 4, 3, 20, 15];
const k = 3;

console.log('Original Array:', array);

const resultSort = findKthSmallestBySorting([...array], k);
console.log(`The ${k}rd smallest element by sorting is:`, resultSort);

const resultHeap = findKthSmallestByHeap([...array], k);
console.log(`The ${k}rd smallest element by heap is:`, resultHeap);

const resultQuickselect = findKthSmallestByQuickselect([...array], k);
console.log(`The ${k}rd smallest element by quickselect is:`, resultQuickselect);
Original Array: [7, 10, 4, 3, 20, 15]
The 3rd smallest element by sorting is: 7
The 3rd smallest element by heap is: 7
The 3rd smallest element by quickselect is: 7
