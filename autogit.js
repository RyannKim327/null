function findKthSmallestElement(arr, k) {
    if (k < 1 || k > arr.length) {
        return null; // Invalid k value
    }

    arr.sort((a, b) => a - b); // Sort in ascending order

    return arr[k - 1];
}
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        const min = this.heap[0];
        const lastElement = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = lastElement;
            this.heapifyDown(0);
        }

        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let smallestChildIndex = this.getSmallestChildIndex(index);

        while (
            smallestChildIndex !== null &&
            this.heap[index] > this.heap[smallestChildIndex]
        ) {
            this.swap(index, smallestChildIndex);
            index = smallestChildIndex;
            smallestChildIndex = this.getSmallestChildIndex(index);
        }
    }

    getSmallestChildIndex(parentIndex) {
        const leftChildIndex = 2 * parentIndex + 1;
        const rightChildIndex = 2 * parentIndex + 2;

        if (leftChildIndex >= this.heap.length) {
            return null;
        }

        if (
            rightChildIndex >= this.heap.length ||
            this.heap[leftChildIndex] < this.heap[rightChildIndex]
        ) {
            return leftChildIndex;
        }

        return rightChildIndex;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

function findKthSmallestElement(arr, k) {
    if (k < 1 || k > arr.length) {
        return null; // Invalid k value
    }

    const minHeap = new MinHeap();

    for (let i = 0; i < arr.length; i++) {
        minHeap.insert(arr[i]);
    }

    for (let i = 0; i < k - 1; i++) {
        minHeap.extractMin();
    }

    return minHeap.extractMin();
}
