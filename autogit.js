class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    push(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.bubbleUp();
    }

    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const node = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (node.priority <= parent.priority) break;

            this.heap[parentIndex] = node;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const node = this.heap[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let swap = null;

            if (leftChildIdx < length) {
                let leftChild = this.heap[leftChildIdx];
                if (leftChild.priority > node.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                let rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > node.priority) ||
                    (swap !== null && rightChild.priority > this.heap[swap].priority)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = node;
            index = swap;
        }
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

// Example Usage
const pq = new PriorityQueue();
pq.push("A", 1);
pq.push("B", 2);
pq.push("C", 3);

console.log(pq.pop()); // Output: { value: 'C', priority: 3 }
console.log(pq.pop()); // Output: { value: 'B', priority: 2 }
console.log(pq.pop()); // Output: { value: 'A', priority: 1 }
