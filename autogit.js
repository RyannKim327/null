class PriorityQueue {
  constructor(comparison) {
    this.elements = [];
    this.comparison = comparison;
  }

  // Method to add an element to the priority queue
  enqueue(element) {
    this.elements.push(element);
    this.bubbleUp(this.elements.length - 1);
  }

  // Method to remove and return the highest priority element from the priority queue
  dequeue() {
    const min = this.elements[0];
    const end = this.elements.pop();
    if (this.elements.length > 0) {
      this.elements[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  // Method to maintain heap order property by bubbling up the element
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index + 1) / 2) - 1;
      if (this.comparison(this.elements[index], this.elements[parentIndex])) {
        [this.elements[index], this.elements[parentIndex]] = [this.elements[parentIndex], this.elements[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Method to maintain heap order property by sinking down the element
  sinkDown(index) {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swapIndex = null;

      if (leftChildIndex < this.elements.length && this.comparison(this.elements[leftChildIndex], this.elements[index])) {
        swapIndex = leftChildIndex;
      }

      if (rightChildIndex < this.elements.length && this.comparison(this.elements[rightChildIndex], this.elements[index]) && this.comparison(this.elements[rightChildIndex], this.elements[leftChildIndex])) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) {
        break;
      }

      [this.elements[index], this.elements[swapIndex]] = [this.elements[swapIndex], this.elements[index]];
      index = swapIndex;
    }
  }

  // Method to get the highest priority element from the priority queue without removing it
  peek() {
    return this.elements[0];
  }

  // Method to check if the priority queue is empty
  isEmpty() {
    return this.elements.length === 0;
  }

  // Method to get the size of the priority queue
  size() {
    return this.elements.length;
  }

  // Method to clear the priority queue
  clear() {
    this.elements = [];
  }
}
// Example comparison function for numbers (lower values have higher priority)
function compareNumbers(a, b) {
  return a < b;
}

// Create a new priority queue instance with the comparison function
const pq = new PriorityQueue(compareNumbers);

// Enqueue elements
pq.enqueue(5);
pq.enqueue(2);
pq.enqueue(7);
pq.enqueue(1);

// Dequeue elements
console.log(pq.dequeue()); // Output: 1
console.log(pq.dequeue()); // Output: 2

// Get the size of the priority queue
console.log(pq.size()); // Output: 2
