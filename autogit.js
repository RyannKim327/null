class BinaryHeap {
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

    insert(value, priority) {
        const newNode = { value, priority };
        this.heap.push(newNode);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = this.getParentIndex(currentIndex);
            if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return root;
    }

    heapifyDown() {
        let currentIndex = 0;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            let nextIndex = leftChildIndex;
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority) {
                nextIndex = rightChildIndex;
            }
            if (this.heap[currentIndex].priority > this.heap[nextIndex].priority) {
                [this.heap[currentIndex], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[currentIndex]];
                currentIndex = nextIndex;
            } else {
                break;
            }
        }
    }
}

// Example usage:
const priorityQueue = new BinaryHeap();
priorityQueue.insert("Task 1", 2);
priorityQueue.insert("Task 2", 1);
priorityQueue.insert("Task 3", 3);

console.log(priorityQueue.remove()); // { value: 'Task 2', priority: 1 }
console.log(priorityQueue.remove()); // { value: 'Task 1', priority: 2 }
console.log(priorityQueue.remove()); // { value: 'Task 3', priority: 3 }
