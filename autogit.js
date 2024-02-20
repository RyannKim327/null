class BinaryHeap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    extract() {
        if (this.heap.length === 0) {
            return null;
        }

        const maxValue = this.heap[0];
        const lastValue = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.heapifyDown(0);
        }

        return maxValue;
    }

    heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.comparator(this.heap[parent], this.heap[index]) < 0) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;

        if (left < this.heap.length && this.comparator(this.heap[left], this.heap[largest]) > 0) {
            largest = left;
        }

        if (right < this.heap.length && this.comparator(this.heap[right], this.heap[largest]) > 0) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
            this.heapifyDown(largest);
        }
    }
}

// Example comparator function for max priority queue
function maxComparator(a, b) {
    return a - b;
}

// Example usage
const maxPriorityQueue = new BinaryHeap(maxComparator);
maxPriorityQueue.insert(5);
maxPriorityQueue.insert(3);
maxPriorityQueue.insert(7);
maxPriorityQueue.insert(2);

console.log(maxPriorityQueue.extract()); // Output: 7
console.log(maxPriorityQueue.extract()); // Output: 5
console.log(maxPriorityQueue.extract()); // Output: 3
console.log(maxPriorityQueue.extract()); // Output: 2
