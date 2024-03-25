class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Function to swap two elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Function to move the element up in the heap
    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex].priority < this.heap[currentIndex].priority) {
                this.swap(parentIndex, currentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    // Function to move the element down in the heap
    heapifyDown() {
        let currentIndex = 0;
        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let maxIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority > this.heap[maxIndex].priority) {
                maxIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority > this.heap[maxIndex].priority) {
                maxIndex = rightChildIndex;
            }

            if (maxIndex !== currentIndex) {
                this.swap(currentIndex, maxIndex);
                currentIndex = maxIndex;
            } else {
                break;
            }
        }
    }

    // Function to add an element to the priority queue
    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }

    // Function to remove and return the element with the highest priority from the priority queue
    dequeue() {
        if (this.heap.length === 0) return null;

        const max = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.heapifyDown();
        }

        return max;
    }

    // Function to check if the priority queue is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 5);
priorityQueue.enqueue("Task 2", 3);
priorityQueue.enqueue("Task 3", 7);

console.log(priorityQueue.dequeue()); // { value: 'Task 3', priority: 7 }
console.log(priorityQueue.dequeue()); // { value: 'Task 1', priority: 5 }
