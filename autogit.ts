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
// Define a type for the items in the priority queue
interface Task {
    priority: number;
    name: string;
}

// Create a priority queue with a custom comparator
const pq = new PriorityQueue<Task>((a, b) => a.priority - b.priority);

// Enqueue some tasks
pq.enqueue({ priority: 3, name: "Task 1" });
pq.enqueue({ priority: 1, name: "Task 2" });
pq.enqueue({ priority: 2, name: "Task 3" });

// Dequeue tasks based on priority
console.log(pq.dequeue()); // { priority: 1, name: "Task 2" }
console.log(pq.dequeue()); // { priority: 2, name: "Task 3" }
console.log(pq.dequeue()); // { priority: 3, name: "Task 1" }
