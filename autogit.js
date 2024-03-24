class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.heap[0];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp(this.size() - 1);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        
        const root = this.heap[0];
        if (this.size() > 1) {
            this.heap[0] = this.heap.pop();
            this.heapifyDown(0);
        } else {
            this.heap.pop();
        }

        return root;
    }

    heapifyUp(i) {
        let currentIndex = i;
        while (currentIndex > 0 && this.heap[currentIndex] < this.heap[this.parent(currentIndex)]) {
            this.swap(currentIndex, this.parent(currentIndex));
            currentIndex = this.parent(currentIndex);
        }
    }

    heapifyDown(i) {
        let currentIndex = i;
        let leftChildIndex = this.leftChild(currentIndex);
        let rightChildIndex = this.rightChild(currentIndex);
        let smallest = currentIndex;

        if (leftChildIndex < this.size() && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }

        if (smallest !== currentIndex) {
            this.swap(currentIndex, smallest);
            this.heapifyDown(smallest);
        }
    }
}

// Example usage
const pq = new PriorityQueue();
pq.push(3);
pq.push(2);
pq.push(1);

console.log(pq.pop()); // Output: 1
console.log(pq.pop()); // Output: 2
console.log(pq.pop()); // Output: 3
