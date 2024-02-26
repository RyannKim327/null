class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    insert(item, priority) {
        const newNode = { item, priority };
        this.heap.push(newNode);
        
        let currentNodeIndex = this.heap.length - 1;
        let parentIndex = this.getParentIndex(currentNodeIndex);

        while (currentNodeIndex > 0 && this.heap[parentIndex].priority > this.heap[currentNodeIndex].priority) {
            this.swap(parentIndex, currentNodeIndex);
            currentNodeIndex = parentIndex;
            parentIndex = this.getParentIndex(currentNodeIndex);
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop().item;
        }

        const minItem = this.heap[0].item;
        this.heap[0] = this.heap.pop();

        let currentIndex = 0;

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);

            if (leftChildIndex >= this.heap.length) break;

            let nextIndex = (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority) ? rightChildIndex : leftChildIndex;

            if (this.heap[currentIndex].priority > this.heap[nextIndex].priority) {
                this.swap(currentIndex, nextIndex);
                currentIndex = nextIndex;
            } else {
                break;
            }
        }

        return minItem;
    }

    peek() {
        if (this.heap.length === 0) return null;

        return this.heap[0].item;
    }
}


// Example Usage:
const pq = new PriorityQueue();

pq.insert('Task 1', 10);
pq.insert('Task 2', 5);
pq.insert('Task 3', 15);

console.log(pq.peek()); // Output: Task 2
console.log(pq.extractMin()); // Output: Task 2
console.log(pq.peek()); // Output: Task 1
