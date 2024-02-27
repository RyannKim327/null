class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    insert(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        const minNode = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return minNode.value;
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const currNode = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parentNode = this.heap[parentIndex];

            if (currNode.priority < parentNode.priority) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftChildIdx = 2 * index + 1;
            const rightChildIdx = 2 * index + 2;
            let smallestChildIdx = index;

            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx].priority < this.heap[smallestChildIdx].priority) {
                smallestChildIdx = leftChildIdx;
            }

            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx].priority < this.heap[smallestChildIdx].priority) {
                smallestChildIdx = rightChildIdx;
            }

            if (smallestChildIdx !== index) {
                [this.heap[index], this.heap[smallestChildIdx]] = [this.heap[smallestChildIdx], this.heap[index]];
                index = smallestChildIdx;
            } else {
                break;
            }
        }
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert('task 1', 5);
pq.insert('task 2', 3);
console.log(pq.extractMin()); // Output: 'task 2'
console.log(pq.extractMin()); // Output: 'task 1'
