class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.bubbleUp();
    }

    dequeue() {
        const minNode = this.heap[0];
        const lastNode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.trickleDown();
        }
        return minNode;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const node = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (node.priority >= parent.priority) break;
            this.heap[parentIndex] = node;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    trickleDown() {
        let index = 0;
        const node = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < this.heap.length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < node.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.heap.length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.priority < node.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
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

// Usage
const priorityQueue = new BinaryHeap();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log(priorityQueue.dequeue()); // Output: { value: 'Task 2', priority: 1 }
console.log(priorityQueue.dequeue()); // Output: { value: 'Task 3', priority: 2 }
console.log(priorityQueue.dequeue()); // Output: { value: 'Task 1', priority: 3 }
