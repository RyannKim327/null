class BinaryHeap {
  constructor(comparisonFn) {
    this.heap = [];
    this.compare = comparisonFn || ((a, b) => a - b);
  }

  // Other methods will be added here...
}
class BinaryHeap {
  // ...constructor...

  insert(element) {
    this.heap.push(element);
    this.siftUp(this.heap.length - 1);
  }

  siftUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
class BinaryHeap {
  // ...constructor & insert methods...

  deleteMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.siftDown(0);
    }

    return min;
  }

  siftDown(index) {
    let childIndex = 2 * index + 1;
    while (childIndex < this.heap.length) {
      if (
        childIndex + 1 < this.heap.length &&
        this.compare(this.heap[childIndex + 1], this.heap[childIndex]) < 0
      ) {
        childIndex++;
      }

      if (this.compare(this.heap[childIndex], this.heap[index]) >= 0) {
        break;
      }

      this.swap(childIndex, index);
      index = childIndex;
      childIndex = 2 * index + 1;
    }
  }
}
const priorityQueue = new BinaryHeap();

priorityQueue.insert(10);
priorityQueue.insert(5);
priorityQueue.insert(8);

console.log(priorityQueue.deleteMin()); // Output: 5
console.log(priorityQueue.deleteMin()); // Output: 8
