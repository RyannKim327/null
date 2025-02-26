class BinaryHeap<T> {
    private heap: T[];

    constructor() {
        this.heap = [];
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    public insert(value: T): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    public extract(): T | undefined {
        if (this.heap.length === 0) return undefined;
        
        const root = this.heap[0];
        const last = this.heap.pop();
        
        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        
        return root;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    public size(): number {
        return this.heap.length;
    }
}
class PriorityQueue<T> {
    private heap: BinaryHeap<T>;

    constructor() {
        this.heap = new BinaryHeap<T>();
    }

    public enqueue(value: T): void {
        this.heap.insert(value);
    }

    public dequeue(): T | undefined {
        return this.heap.extract();
    }

    public peek(): T | undefined {
        return this.heap.peek();
    }

    public isEmpty(): boolean {
        return this.heap.isEmpty();
    }

    public size(): number {
        return this.heap.size();
    }
}
const pq = new PriorityQueue<number>();

pq.enqueue(5);
pq.enqueue(1);
pq.enqueue(3);

console.log(pq.peek()); // Output: 1
console.log(pq.dequeue()); // Output: 1
console.log(pq.dequeue()); // Output: 3
console.log(pq.size()); // Output: 1
console.log(pq.isEmpty()); // Output: false
console.log(pq.dequeue()); // Output: 5
console.log(pq.isEmpty()); // Output: true
