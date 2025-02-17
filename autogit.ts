class PriorityQueue<T> {
    private heap: { value: T; priority: number }[] = [];

    insert(value: T, priority: number): void {
        const node = { value, priority };
        this.heap.push(node);
        this.bubbleUp();
    }

    extractMax(): T | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop()!.value;

        const maxNode = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.sinkDown(0);
        return maxNode.value;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (element.priority <= parent.priority) break;

            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }

    private sinkDown(index: number): void {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild: { value: T; priority: number } | undefined;
            let rightChild: { value: T; priority: number } | undefined;
            let swapIndex: number | null = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.priority > element.priority) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild.priority > element.priority) ||
                    (swapIndex !== null && rightChild.priority > leftChild!.priority)
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

    peek(): T | undefined {
        return this.heap[0]?.value;
    }
}

// Example usage
const priorityQueue = new PriorityQueue<string>();
priorityQueue.insert("task1", 1);
priorityQueue.insert("task2", 3);
priorityQueue.insert("task3", 2);

console.log(priorityQueue.extractMax()); // Outputs: "task2"
console.log(priorityQueue.peek()); // Outputs: "task3"
