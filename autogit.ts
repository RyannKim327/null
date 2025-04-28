class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    // Adds a value to the heap
    public insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    // Removes and returns the minimum value from the heap
    public extractMin(): number | undefined {
        if (this.heap.length === 0) return undefined;
        
        const minValue = this.heap[0]; // The root
        const end = this.heap.pop(); // Remove the last element
        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end; // Move the last element to the root
            this.bubbleDown(); // Restore the heap property
        }
        return minValue;
    }

    // Returns the minimum value without removing it
    public peek(): number | undefined {
        return this.heap[0];
    }

    // Checks if the heap is empty
    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    // Private methods

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break; // If the current node is larger than the parent, stop.
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // Swap
            index = parentIndex;
        }
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild!)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break; // No swaps needed

            // Swap the element with the smaller child
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

// PriorityQueue class that utilizes MinHeap
class PriorityQueue {
    private heap: MinHeap;

    constructor() {
        this.heap = new MinHeap();
    }

    // Adds an element with a given priority
    public enqueue(priority: number): void {
        this.heap.insert(priority);
    }

    // Removes and returns the element with the highest priority (lowest number)
    public dequeue(): number | undefined {
        return this.heap.extractMin();
    }

    // Returns the element with the highest priority without removing it
    public peek(): number | undefined {
        return this.heap.peek();
    }

    // Checks if the priority queue is empty
    public isEmpty(): boolean {
        return this.heap.isEmpty();
    }
}

// Example Usage
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(10);
console.log(pq.dequeue()); // Outputs 2
console.log(pq.peek());    // Outputs 5
console.log(pq.isEmpty()); // Outputs false
pq.dequeue();
pq.dequeue();
console.log(pq.isEmpty()); // Outputs true
