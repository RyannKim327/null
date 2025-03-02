class PriorityQueue<T> {
    private heap: { element: T; priority: number }[];
    
    constructor() {
        this.heap = [];
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    private hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    private parent(index: number): { element: T; priority: number } {
        return this.heap[this.getParentIndex(index)];
    }

    private leftChild(index: number): { element: T; priority: number } {
        return this.heap[this.getLeftChildIndex(index)];
    }

    private rightChild(index: number): { element: T; priority: number } {
        return this.heap[this.getRightChildIndex(index)];
    }

    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;

        while (this.hasParent(index) && this.parent(index).priority > this.heap[index].priority) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    private bubbleDown(): void {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChild(index) && this.rightChild(index).priority < this.leftChild(index).priority) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index].priority < this.heap[smallerChildIndex].priority) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    public enqueue(element: T, priority: number): void {
        this.heap.push({ element, priority });
        this.bubbleUp();
    }

    public dequeue(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }

        const item = this.heap[0].element;
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.bubbleDown();

        return item;
    }

    public peek(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
        return this.heap[0].element;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    public size(): number {
        return this.heap.length;
    }
}

// Example Usage:
const pq = new PriorityQueue<string>();
pq.enqueue("task1", 2);
pq.enqueue("task2", 1);
pq.enqueue("task3", 3);

console.log(pq.dequeue()); // task2
console.log(pq.peek());    // task1
console.log(pq.isEmpty()); // false
console.log(pq.size());    // 2
