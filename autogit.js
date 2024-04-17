class Node {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(element, priority) {
        const node = new Node(element, priority);
        this.heap.push(node);
        this.heapifyUp();
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const highestPriorityNode = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return highestPriorityNode.element;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0].element;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].priority < this.heap[index].priority) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const node = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swap = null;

            if (leftChildIndex < length && this.heap[leftChildIndex].priority > node.priority) {
                swap = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex].priority > node.priority &&
                this.heap[rightChildIndex].priority > this.heap[leftChildIndex].priority) {
                swap = rightChildIndex;
            }

            if (swap === null) {
                break;
            }

            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);

console.log(pq.dequeue()); // Output: task2
console.log(pq.dequeue()); // Output: task3
console.log(pq.dequeue()); // Output: task1
