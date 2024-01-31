class BinaryHeap {
  constructor() {
    this.heap = [];
  }
}
getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

getLeftChildIndex(index) {
  return 2 * index + 1;
}
getRightChildIndex(index) {
  return 2 * index + 2;
}
swap(index1, index2) {
  [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
}
heapifyUp() {
  let currentIndex = this.heap.length - 1;
  
  while (currentIndex > 0) {
    const parentIndex = this.getParentIndex(currentIndex);
    
    if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    } else {
      break;
    }
  }
}
heapifyDown() {
  let currentIndex = 0;

  while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
    const leftChildIndex = this.getLeftChildIndex(currentIndex);
    const rightChildIndex = this.getRightChildIndex(currentIndex);
    let smallerChildIndex = leftChildIndex;

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex].priority < this.heap[leftChildIndex].priority
    ) {
      smallerChildIndex = rightChildIndex;
    }

    if (
      this.heap[currentIndex].priority > this.heap[smallerChildIndex].priority
    ) {
      this.swap(currentIndex, smallerChildIndex);
      currentIndex = smallerChildIndex;
    } else {
      break;
    }
  }
}
enqueue(item, priority) {
  this.heap.push({ item, priority });
  this.heapifyUp();
}
dequeue() {
  if (this.heap.length === 0) {
    return null;
  }

  const topItem = this.heap[0];

  if (this.heap.length === 1) {
    this.heap = [];
  } else {
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
  }

  return topItem;
}
isEmpty() {
  return this.heap.length === 0;
}
const pq = new BinaryHeap();
pq.enqueue("Task 1", 2);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 3);

while (!pq.isEmpty()) {
  const task = pq.dequeue();
  console.log(task.item);
}
Task 2
Task 1
Task 3
