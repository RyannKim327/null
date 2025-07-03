class PriorityQueue<T> {
    private heap: { value: T; priority: number }[] = [];

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    public size(): number {
        return this.heap.length;
    }

    public enqueue(value: T, priority: number): void {
        this.heap.push({ value, priority });
        this.bubbleUp();
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;

        const min = this.heap[0].value;
        const last = this.heap.pop();
        if (this.heap.length > 0 && last) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return min;
    }

    public peek(): T | undefined {
        return this.isEmpty() ? undefined : this.heap[0].value;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].priority >= this.heap[parentIndex].priority) break;

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
            let leftChild: { value: T; priority: number } | undefined;
            let rightChild: { value: T; priority: number } | undefined;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild!.priority)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

// Example usage:
const pq = new PriorityQueue<string>();
pq.enqueue("high priority", 1);
pq.enqueue("medium priority", 5);
pq.enqueue("low priority", 10);

console.log(pq.dequeue()); // Outputs: "high priority"
console.log(pq.peek());    // Outputs: "medium priority"
