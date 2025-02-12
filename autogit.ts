class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    getSize(): number {
        return this.heap.length;
    }

    // Insert a new element into the heap
    insert(element: number): void {
        this.heap.push(element);
        this.bubbleUp();
    }

    // Remove and return the smallest element from the heap
    extractMin(): number | null {
        if (this.getSize() === 0) return null;

        const min = this.heap[0];
        const end = this.heap.pop()!;
        if (this.getSize() > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    // Maintain the heap property after insertion
    private bubbleUp(): void {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Maintain the heap property after extraction
    private bubbleDown(): void {
        let index = 0;

        while (true) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftIndex < this.getSize() && this.heap[leftIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftIndex;
            }

            if (rightIndex < this.getSize() && this.heap[rightIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}
class PriorityQueue {
    private minHeap: MinHeap;

    constructor() {
        this.minHeap = new MinHeap();
    }

    // Add an element with a given priority
    enqueue(priority: number): void {
        this.minHeap.insert(priority);
    }

    // Remove and return the element with the highest priority (smallest number)
    dequeue(): number | null {
        return this.minHeap.extractMin();
    }

    // Get the size of the priority queue
    size(): number {
        return this.minHeap.getSize();
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.minHeap.getSize() === 0;
    }
}
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(1);
pq.enqueue(3);
pq.enqueue(4);

console.log(pq.dequeue()); // Outputs: 1 (the smallest number)
console.log(pq.size()); // Outputs: 3
console.log(pq.dequeue()); // Outputs: 3
console.log(pq.isEmpty()); // Outputs: false
console.log(pq.dequeue()); // Outputs: 4
console.log(pq.dequeue()); // Outputs: 5
console.log(pq.isEmpty()); // Outputs: true
