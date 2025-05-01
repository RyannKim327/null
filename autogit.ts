class PriorityQueue<T> {
    private heap: { value: T; priority: number }[] = [];

    constructor() {}

    // Insert a new value with a given priority
    enqueue(value: T, priority: number): void {
        const newNode = { value, priority };
        this.heap.push(newNode);
        this.heapifyUp();
    }

    // Remove and return the highest priority element (smallest value)
    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;
        
        const root = this.heap[0].value;
        const lastNode = this.heap.pop();
        
        if (this.heap.length > 0 && lastNode) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return root;
    }

    // Get the highest priority element without removing it
    peek(): T | undefined {
        return this.isEmpty() ? undefined : this.heap[0].value;
    }

    // Check if the priority queue is empty
    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    // Get the size of the priority queue
    size(): number {
        return this.heap.length;
    }

    // Heapify up to maintain the min-heap property
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        
        while (this.hasParent(index) && this.parent(index).priority > this.heap[index].priority) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }

    // Heapify down to maintain the min-heap property
    private heapifyDown(): void {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.leftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index).priority < this.leftChild(index).priority) {
                smallerChildIndex = this.rightChildIndex(index);
            }

            if (this.heap[index].priority < this.heap[smallerChildIndex].priority) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }

            index = smallerChildIndex;
        }
    }

    // Helper methods
    private hasParent(index: number): boolean {
        return this.parentIndex(index) >= 0;
    }

    private hasLeftChild(index: number): boolean {
        return this.leftChildIndex(index) < this.heap.length;
    }

    private hasRightChild(index: number): boolean {
        return this.rightChildIndex(index) < this.heap.length;
    }

    private parent(index: number) {
        return this.heap[this.parentIndex(index)];
    }

    private leftChild(index: number) {
        return this.heap[this.leftChildIndex(index)];
    }

    private rightChild(index: number) {
        return this.heap[this.rightChildIndex(index)];
    }

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChildIndex(index: number): number {
        return index * 2 + 1;
    }

    private rightChildIndex(index: number): number {
        return index * 2 + 2;
    }

    private swap(indexOne: number, indexTwo: number): void {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
}

// Example usage
const pq = new PriorityQueue<string>();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);

console.log(pq.dequeue()); // Outputs 'task2' (highest priority)
console.log(pq.peek());    // Outputs 'task3'
console.log(pq.size());    // Outputs 2
console.log(pq.dequeue()); // Outputs 'task3' (next highest priority)
console.log(pq.dequeue()); // Outputs 'task1'
console.log(pq.isEmpty()); // Outputs true

