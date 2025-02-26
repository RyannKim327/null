class BinaryHeap<T> {
    private heap: T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number) {
        this.compare = compare;
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

    private parent(index: number): T {
        return this.heap[this.getParentIndex(index)];
    }

    private leftChild(index: number): T {
        return this.heap[this.getLeftChildIndex(index)];
    }

    private rightChild(index: number): T {
        return this.heap[this.getRightChildIndex(index)];
    }

    private swap(indexOne: number, indexTwo: number): void {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    private bubbleUp(): void {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.compare(this.parent(index), this.heap[index]) > 0) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    private bubbleDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.compare(this.rightChild(index), this.leftChild(index)) < 0) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.compare(this.heap[index], this.heap[smallerChildIndex]) < 0) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    public insert(item: T): void {
        this.heap.push(item);
        this.bubbleUp();
    }

    public remove(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.bubbleDown();
        return item;
    }

    public peek(): T | undefined {
        return this.heap[0];
    }

    public isEmpty(): boolean {
        return this.heap.length === 0;
    }

    public size(): number {
        return this.heap.length;
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

    public isEmpty(): boolean {
        return this.heap.isEmpty();
    }

    public size(): number {
        return this.heap.size();
    }
}
// Example usage
const priorityQueue = new PriorityQueue<number>((a, b) => a - b);

priorityQueue.enqueue(5);
priorityQueue.enqueue(1);
priorityQueue.enqueue(3);

console.log(priorityQueue.peek()); // Output: 1
console.log(priorityQueue.dequeue()); // Output: 1
console.log(priorityQueue.peek()); // Output: 3
