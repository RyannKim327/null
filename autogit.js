class PriorityQueue {
    constructor() {
        this.heap = [];
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

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(data) {
        this.heap.push(data);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                break;
            }
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return max;
    }

    sinkDown(index) {
        let largest = index;
        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);
        const size = this.heap.length;

        if (leftIndex < size && this.heap[leftIndex] > this.heap[largest]) {
            largest = leftIndex;
        }

        if (rightIndex < size && this.heap[rightIndex] > this.heap[largest]) {
            largest = rightIndex;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.sinkDown(largest);
        }
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert(5);
pq.insert(10);
pq.insert(3);

console.log(pq.extractMax()); // Output: 10
console.log(pq.extractMax()); // Output: 5
console.log(pq.extractMax()); // Output: 3
