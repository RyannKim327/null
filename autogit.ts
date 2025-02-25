interface QueueNode<T> {
    priority: number;
    value: T;
}
class PriorityQueue<T> {
    private heap: QueueNode<T>[] = [];

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private rightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    public push(value: T, priority: number): void {
        const newNode: QueueNode<T> = { value, priority };
        this.heap.push(newNode);
        this.bubbleUp();
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.parentIndex(index);
            if (this.heap[index].priority >= this.heap[parentIndex].priority) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    public pop(): T | undefined {
        if (this.heap.length === 0) return undefined;
        const root = this.heap[0].value;
        const last = this.heap.pop();
        if (this.heap.length > 0 && last) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return root;
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftIndex = this.leftChildIndex(index);
            const rightIndex = this.rightChildIndex(index);
            let smallestIndex = index;

            if (leftIndex < length && this.heap[leftIndex].priority < this.heap[smallestIndex].priority) {
                smallestIndex = leftIndex;
            }
            if (rightIndex < length && this.heap[rightIndex].priority < this.heap[smallestIndex].priority) {
                smallestIndex = rightIndex;
            }
            if (smallestIndex === index) break;
            this.swap(index, smallestIndex);
            index = smallestIndex;
        }
    }

    public peek(): T | undefined {
        return this.heap.length > 0 ? this.heap[0].value : undefined;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }
}
const pq = new PriorityQueue<string>();

pq.push("task 1", 3);
pq.push("task 2", 2);
pq.push("task 3", 1);

console.log(pq.peek()); // Output: "task 3"
while (!pq.isEmpty()) {
    console.log(pq.pop()); // Output: "task 3", "task 2", "task 1"
}
