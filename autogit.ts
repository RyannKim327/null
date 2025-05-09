class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    // Insert a new value into the heap
    insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    // Removes and returns the minimum value (root) from the heap
    removeMin(): number | null {
        if (this.heap.length === 0) {
            return null;
        }
        const min = this.heap[0];
        const end = this.heap.pop(); // Remove the last element
        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end; // Move the last element to the root
            this.bubbleDown();
        }
        return min;
    }

    // Get the minimum value without removing it
    peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Bubble up the last element
    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (element >= parent) break; // If the element is in the correct position

            this.heap[index] = parent; // Move parent down
            index = parentIndex; // Move index up to parent's index
        }
        this.heap[index] = element; // Place the element at its final position
    }

    // Bubble down the root element
    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: number, rightChild: number;
            let swapIndex: number = -1; // To keep track of the index to swap with

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === -1 && rightChild < element) ||
                    (swapIndex !== -1 && rightChild < leftChild!)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === -1) break; // Element is in the correct position
            this.heap[index] = this.heap[swapIndex]; // Swap with the child
            index = swapIndex; // Move index down to the child's index
        }
        this.heap[index] = element; // Place the element at its final position
    }

    // Returns the size of the heap
    size(): number {
        return this.heap.length;
    }

    // Check if the heap is empty
    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}

class PriorityQueue {
    private minHeap: MinHeap;

    constructor() {
        this.minHeap = new MinHeap();
    }

    // Enqueue a new value with priority
    enqueue(value: number): void {
        this.minHeap.insert(value);
    }

    // Dequeue the highest priority value
    dequeue(): number | null {
        return this.minHeap.removeMin();
    }

    // Peek the highest priority value
    peek(): number | null {
        return this.minHeap.peek();
    }

    // Returns the size of the queue
    size(): number {
        return this.minHeap.size();
    }

    // Check if the priority queue is empty
    isEmpty(): boolean {
        return this.minHeap.isEmpty();
    }
}

// Usage:
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(8);

console.log(pq.dequeue()); // 3 (minimum)
console.log(pq.peek());    // 5 (next minimum)
console.log(pq.size());    // 2
console.log(pq.isEmpty()); // false
