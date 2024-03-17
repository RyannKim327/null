class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this._bubbleUp(this.heap.length - 1);
    }

    dequeue() {
        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown(0);
        }

        return min;
    }

    _bubbleUp(index) {
        const node = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (node.priority >= parent.priority) break;

            this.heap[parentIndex] = node;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    _sinkDown(index) {
        const length = this.heap.length;
        const node = this.heap[index];

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swap = null;

            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < node.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.priority < node.priority) ||
                    (swap !== null && rightChild.priority < this.heap[swap].priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = node;
            index = swap;
        }
    }
}

// Example usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 10);
priorityQueue.enqueue("Task 2", 5);
priorityQueue.enqueue("Task 3", 15);

console.log(priorityQueue.dequeue()); // Output: { value: 'Task 2', priority: 5 }
console.log(priorityQueue.dequeue()); // Output: { value: 'Task 1', priority: 10 }
console.log(priorityQueue.dequeue()); // Output: { value: 'Task 3', priority: 15 }
