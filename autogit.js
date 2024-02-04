class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.heap = [];
  }
}
getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}

getChildrenIndices(index) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  return [leftChildIndex, rightChildIndex];
}
enqueue(value, priority) {
  const newNode = new Node(value, priority);
  this.heap.push(newNode);

  let currentNodeIndex = this.heap.length - 1;
  let parentIndex = this.getParentIndex(currentNodeIndex);

  while (
    currentNodeIndex > 0 &&
    this.heap[parentIndex].priority > newNode.priority
  ) {
    // Swap parent and current node
    [this.heap[parentIndex], this.heap[currentNodeIndex]] = [
      this.heap[currentNodeIndex],
      this.heap[parentIndex],
    ];

    currentNodeIndex = parentIndex;
    parentIndex = this.getParentIndex(currentNodeIndex);
  }
}
dequeue() {
  if (this.heap.length === 0) {
    return null;
  }

  if (this.heap.length === 1) {
    return this.heap.pop().value;
  }

  const rootNode = this.heap[0];
  this.heap[0] = this.heap.pop();

  let currentNodeIndex = 0;
  let [leftChildIndex, rightChildIndex] = this.getChildrenIndices(
    currentNodeIndex
  );

  while (
    (this.heap[leftChildIndex] &&
      this.heap[currentNodeIndex].priority >
        this.heap[leftChildIndex].priority) ||
    (this.heap[rightChildIndex] &&
      this.heap[currentNodeIndex].priority >
        this.heap[rightChildIndex].priority)
  ) {
    // Determine the index of the child node to swap
    const swapIndex =
      !this.heap[rightChildIndex] ||
      this.heap[leftChildIndex].priority <
        this.heap[rightChildIndex].priority
        ? leftChildIndex
        : rightChildIndex;

    // Swap current node with the selected child
    [this.heap[currentNodeIndex], this.heap[swapIndex]] = [
      this.heap[swapIndex],
      this.heap[currentNodeIndex],
    ];

    currentNodeIndex = swapIndex;
    [leftChildIndex, rightChildIndex] = this.getChildrenIndices(
      currentNodeIndex
    );
  }

  return rootNode.value;
}
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Task 1', 2);
priorityQueue.enqueue('Task 2', 1);
priorityQueue.enqueue('Task 3', 3);
console.log(priorityQueue.dequeue()); // Output: Task 2
console.log(priorityQueue.dequeue()); // Output: Task 1
console.log(priorityQueue.dequeue()); // Output: Task 3
