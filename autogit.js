class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Helper functions
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Functions to maintain the heap property
    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] < this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let swapIndex = index;

            if (this.heap[swapIndex] < this.heap[leftChildIndex]) {
                swapIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[swapIndex] < this.heap[rightChildIndex]) {
                swapIndex = rightChildIndex;
            }

            if (swapIndex !== index) {
                this.swap(index, swapIndex);
                index = swapIndex;
            } else {
                break;
            }
        }
    }

    // Priority Queue API
    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return maxValue;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert(5);
pq.insert(2);
pq.insert(10);
console.log(pq.extractMax()); // 10
console.log(pq.extractMax()); // 5
