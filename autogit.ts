class PriorityQueue<T> {
    private heap: { element: T; priority: number }[] = [];

    insert(element: T, priority: number): void {
        this.heap.push({ element, priority });
        this.bubbleUp();
    }

    remove(): T | undefined {
        if (this.heap.length === 0) return undefined;

        const max = this.heap[0].element;
        const last = this.heap.pop();
        if (this.heap.length > 0 && last) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        
        return max;
    }

    peek(): T | undefined {
        if (this.heap.length === 0) return undefined;
        return this.heap[0].element;
    }

    size(): number {
        return this.heap.length;
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

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let largestIndex = index;
            if (leftChildIndex < length && this.heap[leftChildIndex].priority > this.heap[largestIndex].priority) {
                largestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex].priority > this.heap[largestIndex].priority) {
                largestIndex = rightChildIndex;
            }
            if (largestIndex === index) break;

            this.heap[index] = this.heap[largestIndex];
            index = largestIndex;
        }
        
        this.heap[index] = element;
    }
}
const pq = new PriorityQueue<string>();

pq.insert("Task 1", 1);
pq.insert("Task 3", 3);
pq.insert("Task 2", 2);

console.log(pq.remove()); // Task 3 (highest priority)
console.log(pq.peek());   // Task 2 (next highest priority)
console.log(pq.size());   // 2 remaining tasks
