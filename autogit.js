class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(item, priority) {
        const node = { item, priority };
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index].priority < this.heap[parentIndex].priority) {
            // Swap the current node with its parent
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop().item;
        }

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min.item;
    }

    bubbleDown(index) {
        let leftChildIndex, rightChildIndex, minIndex;

        while (true) {
            leftChildIndex = 2 * index + 1;
            rightChildIndex = 2 * index + 2;
            minIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[minIndex].priority) {
                minIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[minIndex].priority) {
                minIndex = rightChildIndex;
            }

            if (minIndex !== index) {
                // Swap the current node with the smaller child node
                [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
                index = minIndex;
            } else {
                break;
            }
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage
const pq = new PriorityQueue();
pq.insert("Task 1", 5);
pq.insert("Task 2", 3);
pq.insert("Task 3", 8);

console.log(pq.extractMin()); // Task 2
console.log(pq.extractMin()); // Task 1
console.log(pq.extractMin()); // Task 3
