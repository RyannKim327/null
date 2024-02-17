class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        const min = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.bubbleDown(0);
        }

        return min.value;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0].value : null;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority < this.heap[parentIndex].priority) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        while (index < this.heap.length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallerChildIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallerChildIndex].priority) {
                smallerChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallerChildIndex].priority) {
                smallerChildIndex = rightChildIndex;
            }

            if (smallerChildIndex !== index) {
                [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
                index = smallerChildIndex;
            } else {
                break;
            }
        }
    }
}

// Sample Usage
const pq = new PriorityQueue();
pq.insert('task1', 4);
pq.insert('task2', 1);
pq.insert('task3', 3);

console.log(pq.extractMin()); // Output: task2
console.log(pq.extractMin()); // Output: task3
console.log(pq.extractMin()); // Output: task1
