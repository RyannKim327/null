class BinaryHeap<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    public insert(item: T): void {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    public remove(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return root;
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public size(): number {
        return this.heap.length;
    }

    private bubbleUp(index: number): void {
        let currentIndex = index;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.compare(this.heap[currentIndex], this.heap[parentIndex]) < 0) {
                [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;
        let currentIndex = index;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestIndex = currentIndex;

            if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === currentIndex) break;

            [this.heap[currentIndex], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[currentIndex]];
            currentIndex = smallestIndex;
        }
    }
}
class PriorityQueue<T> {
    private heap: BinaryHeap<T>;

    constructor(compare: (a: T, b: T) => number) {
        this.heap = new BinaryHeap(compare);
    }

    public enqueue(item: T): void {
        this.heap.insert(item);
    }

    public dequeue(): T | undefined {
        return this.heap.remove();
    }

    public peek(): T | undefined {
        return this.heap.peek();
    }

    public size(): number {
        return this.heap.size();
    }
}
// Example usage
const priorityQueue = new PriorityQueue<number>((a, b) => a - b); // Min-heap

priorityQueue.enqueue(5);
priorityQueue.enqueue(1);
priorityQueue.enqueue(3);

console.log(priorityQueue.peek()); // Output: 1
console.log(priorityQueue.dequeue()); // Output: 1
console.log(priorityQueue.peek()); // Output: 3
console.log(priorityQueue.size()); // Output: 2
