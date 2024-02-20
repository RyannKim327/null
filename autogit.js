class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert(value, priority) {
        const node = { value, priority };
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index].priority > this.heap[parentIndex].priority) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extractMax() {
        const max = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.sinkDown(0);
        }

        return max.value;
    }

    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;

        if (left < this.heap.length && this.heap[left].priority > this.heap[largest].priority) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right].priority > this.heap[largest].priority) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this.sinkDown(largest);
        }
    }
}
