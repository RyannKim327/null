class BinaryHeap<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    public insert(item: T): void {
        this.heap.push(item);
        this.bubbleUp();
    }

    public remove(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0 && last !== undefined) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public size(): number {
        return this.heap.length;
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
            let swapIndex: number | null = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (this.compare(leftChild, element) < 0) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && this.compare(rightChild, element) < 0) ||
                    (swapIndex !== null && this.compare(rightChild, leftChild) < 0)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;
            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            index = swapIndex;
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
priorityQueue.enqueue(2);
priorityQueue.enqueue(8);
priorityQueue.enqueue(1);

console.log(priorityQueue.dequeue()); // 1
console.log(priorityQueue.peek());    // 2
console.log(priorityQueue.size());    // 3
