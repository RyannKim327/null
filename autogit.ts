class PriorityQueue<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
    }

    // Inserts an element into the priority queue
    enqueue(element: T): void {
        this.heap.push(element);
        this.siftUp();
    }

    // Removes and returns the element with the highest priority
    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;
        
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.siftDown();
        
        return root;
    }

    // Returns the element with the highest priority without removing it
    peek(): T | undefined {
        return this.heap[0];
    }

    // Checks if the heap is empty
    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    // Sift the last element up to its proper position
    private siftUp(): void {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    // Sift the root element down to its proper position
    private siftDown(): void {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < this.heap.length &&
                this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length &&
                this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) {
                break;
            }

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}

// Usage Example

type Item = { priority: number;  string };

const pq = new PriorityQueue<Item>((a, b) => a.priority - b.priority);
pq.enqueue({ priority: 3,  'Task 1' });
pq.enqueue({ priority: 1,  'Task 3' });
pq.enqueue({ priority: 2,  'Task 2' });

console.log(pq.dequeue()); // { priority: 1,  'Task 3' }
console.log(pq.peek()); // { priority: 2,  'Task 2' }
console.log(pq.dequeue()); // { priority: 2,  'Task 2' }
console.log(pq.dequeue()); // { priority: 3,  'Task 1' }
console.log(pq.isEmpty()); // true
