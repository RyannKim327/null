class PriorityQueue<T> {
    private heap: { priority: number; value: T }[] = [];

    constructor() {}

    // Insert a new element with a priority
    enqueue(value: T, priority: number): void {
        this.heap.push({ value, priority });
        this.bubbleUp();
    }

    // Remove and return the element with the highest priority
    dequeue(): T | undefined {
        if (this.heap.length === 0) return undefined;

        const top = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }

        return top.value;
    }

    // Peek at the element with the highest priority without removing it
    peek(): T | undefined {
        return this.heap[0]?.value;
    }

    // Returns the size of the priority queue
    size(): number {
        return this.heap.length;
    }

    // Helper method to maintain heap invariant after insertion
    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority <= this.heap[parentIndex].priority) break;

            // Swap with parent
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Helper method to maintain heap invariant after removal
    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: { priority: number; value: T } | undefined = this.heap[leftChildIndex];
            let rightChild: { priority: number; value: T } | undefined = this.heap[rightChildIndex];
            let swap: number | null = null;

            if (leftChild && leftChild.priority > element.priority) {
                swap = leftChildIndex;
            }
            if (rightChild && (swap === null ? true : rightChild.priority > leftChild!.priority)) {
                swap = rightChildIndex;
            }

            if (swap === null) break;

            // Swap with the child
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}
const pq = new PriorityQueue<string>();

pq.enqueue('Task A', 1);
pq.enqueue('Task B', 5);
pq.enqueue('Task C', 3);

console.log(pq.peek()); // 'Task B'
console.log(pq.dequeue()); // 'Task B'
console.log(pq.dequeue()); // 'Task C'
console.log(pq.size()); // 1
