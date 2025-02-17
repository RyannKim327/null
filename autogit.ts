class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    // Get the index of the parent of a node
    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    // Get the index of the left child of a node
    private leftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    // Get the index of the right child of a node
    private rightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    // Insert a new value into the heap
    public insert(value: number): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    // Bubble up the last element to maintain the heap property
    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.parentIndex(index);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Remove and return the minimum value (root of the heap)
    public remove(): number | null {
        if (this.heap.length === 0) return null;
        const minValue = this.heap[0];
        const lastValue = this.heap.pop();
        if (this.heap.length > 0 && lastValue !== undefined) {
            this.heap[0] = lastValue;
            this.bubbleDown(0);
        }
        return minValue;
    }

    // Bubble down the root element to maintain the heap property
    private bubbleDown(index: number): void {
        const length = this.heap.length;
        let smallest = index;

        const leftIndex = this.leftChildIndex(index);
        if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
            smallest = leftIndex;
        }

        const rightIndex = this.rightChildIndex(index);
        if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
            smallest = rightIndex;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }

    // Peek at the minimum value without removing it
    public peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Check if the heap is empty
    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    // Get the size of the heap
    public size(): number {
        return this.heap.length;
    }
}
const priorityQueue = new MinHeap();

priorityQueue.insert(5);
priorityQueue.insert(3);
priorityQueue.insert(8);
priorityQueue.insert(1);

console.log(priorityQueue.peek()); // Output: 1
console.log(priorityQueue.remove()); // Output: 1
console.log(priorityQueue.peek()); // Output: 3
console.log(priorityQueue.size()); // Output: 3
