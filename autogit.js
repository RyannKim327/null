class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element); // Add the element to the end of the array
    this.bubbleUp(this.heap.length - 1); // Move the element to its correct position
  }

  remove() {
    const max = this.heap[0]; // The element with highest priority is at the root

    // Replace the root with the last element in the heap and remove the last element
    this.heap[0] = this.heap.pop();

    this.bubbleDown(0); // Move the new root to its correct position

    return max; // Return the element with highest priority
  }

  bubbleUp(index) {
    const element = this.heap[index];

    // Compare the element with its parent and swap if necessary
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element <= parent) break; // If the element is in the correct position, stop

      this.heap[parentIndex] = element;
      this.heap[index] = parent;

      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break; // If the element is in the correct position, stop

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;

      index = swap;
    }
  }
}
const priorityQueue = new BinaryHeap();

priorityQueue.insert(5);
priorityQueue.insert(3);
priorityQueue.insert(7);
priorityQueue.insert(1);

console.log(priorityQueue.remove()); // Output: 7
console.log(priorityQueue.remove()); // Output: 5
console.log(priorityQueue.remove()); // Output: 3
console.log(priorityQueue.remove()); // Output: 1
