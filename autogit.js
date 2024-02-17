class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    insert(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.percolateUp(this.size() - 1);
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }

        const minNode = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.size() > 0) {
            this.heap[0] = lastNode;
            this.percolateDown(0);
        }

        return minNode;
    }

    percolateUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    percolateDown(index) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let minIndex = index;

        if (leftChildIndex < this.size() && this.heap[leftChildIndex].priority < this.heap[minIndex].priority) {
            minIndex = leftChildIndex;
        }

        if (rightChildIndex < this.size() && this.heap[rightChildIndex].priority < this.heap[minIndex].priority) {
            minIndex = rightChildIndex;
        }

        if (minIndex !== index) {
            [this.heap[minIndex], this.heap[index]] = [this.heap[index], this.heap[minIndex]];
            this.percolateDown(minIndex);
        }
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert("Task 1", 4);
pq.insert("Task 2", 2);
pq.insert("Task 3", 7);

console.log(pq.extractMin()); // Outputs: { value: 'Task 2', priority: 2 }
