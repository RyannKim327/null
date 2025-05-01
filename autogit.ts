class BinaryHeap<T> {
    private heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.heap = [];
        this.compare = compare;
    }

    insert(item: T): void {
        this.heap.push(item);
        this.bubbleUp();
    }

    extract(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const root = this.heap[0];
        const last = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
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
            let leftChild: T, rightChild: T;
            let swap: number | null = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (this.compare(leftChild, element) < 0) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && this.compare(rightChild, element) < 0) ||
                    (swap !== null && this.compare(rightChild, leftChild) < 0)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    peek(): T | undefined {
        return this.heap[0];
    }
}
class PriorityQueue<T> {
    private heap: BinaryHeap<T>;

    constructor(compare: (a: T, b: T) => number) {
        this.heap = new BinaryHeap(compare);
    }

    enqueue(item: T): void {
        this.heap.insert(item);
    }

    dequeue(): T | undefined {
        return this.heap.extract();
    }

    peek(): T | undefined {
        return this.heap.peek();
    }

    isEmpty(): boolean {
        return this.heap.isEmpty();
    }
}
// Example: Priority queue for numbers (min-heap)
const minHeapCompare = (a: number, b: number) => a - b;

const pq = new PriorityQueue<number>(minHeapCompare);

pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(8);
pq.enqueue(1);

console.log(pq.dequeue()); // 1
console.log(pq.peek());    // 2
console.log(pq.dequeue()); // 2
console.log(pq.isEmpty()); // false
