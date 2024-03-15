class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) {
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
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex].priority > this.heap[index].priority) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestChildIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallestChildIndex].priority) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallestChildIndex].priority) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== index) {
                [this.heap[index], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[index]];
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}
const pq = new PriorityQueue();
pq.insert("Task 1", 3);
pq.insert("Task 2", 1);
pq.insert("Task 3", 5);
pq.insert("Task 4", 2);

console.log(pq.extractMin()); // Output: Task 2
console.log(pq.extractMin()); // Output: Task 4
