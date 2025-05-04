class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    // Get the size of the heap
    public size(): number {
        return this.heap.length;
    }

    // Check if the heap is empty
    public isEmpty(): boolean {
        return this.size() === 0;
    }

    // Insert a new element into the heap
    public insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp(this.size() - 1);
    }

    // Remove and return the minimum element
    public extractMin(): number | null {
        if (this.isEmpty()) {
            return null;
        }
        
        const min = this.heap[0];
        const end = this.heap.pop()!;
        if (this.size() > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        
        return min;
    }

    // Get the minimum element without removing it
    public peek(): number | null {
        return this.isEmpty() ? null : this.heap[0];
    }

    // Maintain the heap property while inserting
    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Maintain the heap property while removing
    private bubbleDown(index: number): void {
        const length = this.size();
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: number, rightChild: number;
            let swapIndex: number | null = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild < element) ||
                    (swapIndex !== null && rightChild < leftChild!)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) {
                break;
            }

            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }
}

class PriorityQueue {
    private heap: MinHeap;

    constructor() {
        this.heap = new MinHeap();
    }

    // Add an element to the priority queue
    public enqueue(value: number): void {
        this.heap.insert(value);
    }

    // Remove and return the highest priority element (minimum element)
    public dequeue(): number | null {
        return this.heap.extractMin();
    }

    // Peek at the highest priority element without removing it
    public peek(): number | null {
        return this.heap.peek();
    }

    // Check if the queue is empty
    public isEmpty(): boolean {
        return this.heap.isEmpty();
    }

    // Get the size of the queue
    public size(): number {
        return this.heap.size();
    }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(8);
console.log(pq.peek()); // 3
console.log(pq.dequeue()); // 3
console.log(pq.peek()); // 5
console.log(pq.isEmpty()); // false
