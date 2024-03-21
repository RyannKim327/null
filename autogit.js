class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const minNode = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.bubbleDown(0);
        }

        return minNode.value;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        let currentIndex = index;
        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let nextIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[nextIndex].priority) {
                nextIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[nextIndex].priority) {
                nextIndex = rightChildIndex;
            }

            if (currentIndex !== nextIndex) {
                [this.heap[currentIndex], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[currentIndex]];
                currentIndex = nextIndex;
            } else {
                break;
            }
        }
    }
}

// Usage
const pq = new PriorityQueue();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);

console.log(pq.dequeue()); // Output: task2
console.log(pq.dequeue()); // Output: task3
console.log(pq.dequeue()); // Output: task1
