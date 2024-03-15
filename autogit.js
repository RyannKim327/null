class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(element, priority) {
        const node = { element, priority };
        this.heap.push(node);
        this.bubbleUp();
    }

    removeMax() {
        if (this.heap.length === 0) {
            return null;
        }
        const max = this.heap[0];
        const lastNode = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }
        return max;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].priority >= this.heap[index].priority)
                break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        while (true) {
            let maxIndex = index;
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority > this.heap[maxIndex].priority) {
                maxIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority > this.heap[maxIndex].priority) {
                maxIndex = rightChildIndex;
            }

            if (maxIndex === index) break;

            [this.heap[index], this.heap[maxIndex]] = [this.heap[maxIndex], this.heap[index]];
            index = maxIndex;
        }
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert('task1', 10);
pq.insert('task2', 5);
pq.insert('task3', 15);

console.log(pq.removeMax()); // { element: 'task3', priority: 15 }
console.log(pq.removeMax()); // { element: 'task1', priority: 10 }
console.log(pq.removeMax()); // { element: 'task2', priority: 5 }
