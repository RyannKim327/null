class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.bubbleUp();
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

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }

        return min.value;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const node = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < node.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild.priority < node.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = node;
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert("Task 1", 3);
pq.insert("Task 2", 1);
pq.insert("Task 3", 2);

while (!pq.isEmpty()) {
    console.log(pq.extractMin()); // Should print Task 2, Task 3, Task 1 in order of priority
}
