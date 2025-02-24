class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number): number {
        return (2 * index) + 1;
    }

    private rightChild(index: number): number {
        return (2 * index) + 2;
    }

    private hasParent(index: number): boolean {
        return this.parent(index) >= 0;
    }

    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    public insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    public extractMin(): number | null {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return min;
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.heap[this.parent(index)] > this.heap[index]) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }

    private heapifyDown(): void {
        let index = 0;
        while (this.leftChild(index) < this.heap.length) {
            let smallerChildIndex = this.leftChild(index);
            if (this.rightChild(index) < this.heap.length &&
                this.heap[this.rightChild(index)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.rightChild(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) break;
            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }
}

class PriorityQueue {
    private minHeap: MinHeap;

    constructor() {
        this.minHeap = new MinHeap();
    }

    public enqueue(value: number): void {
        this.minHeap.insert(value);
    }

    public dequeue(): number | null {
        return this.minHeap.extractMin();
    }

    public peek(): number | null {
        return this.minHeap.isEmpty() ? null : this.minHeap['heap'][0];
    }

    public isEmpty(): boolean {
        return this.minHeap.isEmpty();
    }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(8);
console.log(pq.dequeue()); // Outputs 2
console.log(pq.peek());    // Outputs 5
console.log(pq.isEmpty()); // Outputs false
