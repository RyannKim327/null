class MinHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return index * 2 + 1;
    }

    private getRightChildIndex(index: number): number {
        return index * 2 + 2;
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

    private parent(index: number): number {
        return this.heap[this.getParentIndex(index)];
    }

    private leftChild(index: number): number {
        return this.heap[this.getLeftChildIndex(index)];
    }

    private rightChild(index: number): number {
        return this.heap[this.getRightChildIndex(index)];
    }

    private swap(indexOne: number, indexTwo: number): void {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    public insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp();
    }

    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    public remove(): number | null {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    private heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    public peek(): number | null {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }
}
class PriorityQueue {
    private minHeap: MinHeap;

    constructor() {
        this.minHeap = new MinHeap();
    }

    public enqueue(value: number): void {
        this.minHeap.insert(value);
    }

    public dequeue(): number | null {
        return this.minHeap.remove();
    }

    public peek(): number | null {
        return this.minHeap.peek();
    }

    public isEmpty(): boolean {
        return this.minHeap.isEmpty();
    }
}
const pq = new PriorityQueue();
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(8);
pq.enqueue(1);

console.log(pq.peek()); // Output: 1
console.log(pq.dequeue()); // Output: 1
console.log(pq.peek()); // Output: 3
console.log(pq.isEmpty()); // Output: false
