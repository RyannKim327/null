class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    empty() {
        return this.heap.length === 0;
    }

    insert(value, priority) {
        const newNode = { value, priority };
        this.heap.push(newNode);

        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor((currentIndex - 1) / 2);

        while (
            currentIndex > 0 && 
            this.heap[currentIndex].priority < this.heap[parentIndex].priority
        ) {
            [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
            currentIndex = parentIndex;
            parentIndex = Math.floor((currentIndex - 1) / 2);
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        const minNode = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        let currentIndex = 0;

        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let smallest = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallest].priority) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallest].priority) {
                smallest = rightChildIndex;
            }

            if (smallest !== currentIndex) {
                [this.heap[currentIndex], this.heap[smallest]] = [this.heap[smallest], this.heap[currentIndex]];
                currentIndex = smallest;
            } else {
                break;
            }
        }

        return minNode;
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert('task1', 10);
pq.insert('task2', 5);
pq.insert('task3', 12);

console.log(pq.extractMin()); // { value: 'task2', priority: 5 }
console.log(pq.extractMin()); // { value: 'task1', priority: 10 }
console.log(pq.extractMin()); // { value: 'task3', priority: 12 }
