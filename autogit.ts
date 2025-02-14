class BinaryHeap<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number): number {
        return 2 * index + 1;
    }

    private rightChild(index: number): number {
        return 2 * index + 2;
    }

    public insert(item: T): void {
        this.heap.push(item);
        this.bubbleUp(this.heap.length - 1);
    }

    private bubbleUp(index: number): void {
        while (index > 0) {
            const parentIndex = this.parent(index);
            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    public remove(): T | undefined {
        if (this.heap.length === 0) return undefined;

        const root = this.heap[0];
        const lastItem = this.heap.pop();
        if (this.heap.length > 0 && lastItem !== undefined) {
            this.heap[0] = lastItem;
            this.bubbleDown(0);
        }
        return root;
    }

    private bubbleDown(index: number): void {
        const length = this.heap.length;
        let smallest = index;

        const leftIndex = this.leftChild(index);
        const rightIndex = this.rightChild(index);

        if (leftIndex < length && this.compare(this.heap[leftIndex], this.heap[smallest]) < 0) {
            smallest = leftIndex;
        }
        if (rightIndex < length && this.compare(this.heap[rightIndex], this.heap[smallest]) < 0) {
            smallest = rightIndex;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public size(): number {
        return this.heap.length;
    }
}

class PriorityQueue<T> {
    private heap: BinaryHeap<T>;

    constructor() {
        this.heap = new BinaryHeap<T>((a, b) => {
            // Customize this comparison according to the priority criteria
            return (a as any).priority - (b as any).priority; // Adjust as necessary
        });
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

// Example usage:
interface Task {
    priority: number;
    name: string;
}

const pq = new PriorityQueue<Task>();

pq.enqueue({ priority: 2, name: "Task 1" });
pq.enqueue({ priority: 1, name: "Task 2" });
pq.enqueue({ priority: 3, name: "Task 3" });

console.log(pq.dequeue()); // { priority: 1, name: "Task 2" }
console.log(pq.peek());    // { priority: 2, name: "Task 1" }
