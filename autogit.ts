class PriorityQueue<T> {
    private heap: T[] = [];
    private comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    size(): number {
        return this.heap.length;
    }

    peek(): T | undefined {
        return this.heap[0];
    }

    insert(value: T): void {
        this.heap.push(value);
        this.bubbleUp();
    }

    extract(): T | undefined {
        if (this.size() === 0) return undefined;
        const top = this.heap[0];
        const end = this.heap.pop()!;
        if (this.size() > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return top;
    }

    private bubbleUp() {
        let index = this.size() - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            // If element has higher priority than parent, swap
            if (this.comparator(element, parent) >= 0) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    private bubbleDown() {
        let index = 0;
        const length = this.size();
        const element = this.heap[0];

        while (true) {
            const leftChildIdx = 2 * index + 1;
            const rightChildIdx = 2 * index + 2;
            let swapIdx: number | null = null;

            if (leftChildIdx < length) {
                const leftChild = this.heap[leftChildIdx];
                if (this.comparator(leftChild, element) < 0) {
                    swapIdx = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                const rightChild = this.heap[rightChildIdx];
                if (
                    (swapIdx === null && this.comparator(rightChild, element) < 0) ||
                    (swapIdx !== null && this.comparator(rightChild, this.heap[swapIdx]) < 0)
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if (swapIdx === null) break;
            this.heap[index] = this.heap[swapIdx];
            index = swapIdx;
        }

        this.heap[index] = element;
    }
}
// Min heap: smaller numbers = higher priority
const pq = new PriorityQueue<number>((a, b) => a - b);

pq.insert(5);
pq.insert(3);
pq.insert(6);
pq.insert(2);

console.log(pq.peek());   // 2
console.log(pq.extract()); // 2
console.log(pq.extract()); // 3
console.log(pq.size());   // 2
type Task = { priority: number; name: string };
const pq = new PriorityQueue<Task>((a, b) => a.priority - b.priority);
