class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Other methods will be implemented here
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
compare(a, b) {
  // Implement your own comparison logic here
  return a - b;
}
insert(element) {
  this.heap.push(element);

  let currentIndex = this.heap.length - 1;
  let parentIndex = this.getParentIndex(currentIndex);

  while (currentIndex > 0 && this.compare(element, this.heap[parentIndex]) < 0) {
    this.swap(currentIndex, parentIndex);
    currentIndex = parentIndex;
    parentIndex = this.getParentIndex(currentIndex);
  }
}
remove() {
  if (this.isEmpty()) {
    return null;
  }

  if (this.heap.length === 1) {
    return this.heap.pop();
  }

  const root = this.heap[0];
  this.heap[0] = this.heap.pop();

  let currentIndex = 0;
  let leftChildIndex = this.getLeftChildIndex(currentIndex);

  while (leftChildIndex < this.heap.length) {
    const rightChildIndex = this.getRightChildIndex(currentIndex);
    const smallerChildIndex =
      rightChildIndex < this.heap.length &&
      this.compare(this.heap[rightChildIndex], this.heap[leftChildIndex]) < 0
        ? rightChildIndex
        : leftChildIndex;

    if (this.compare(this.heap[currentIndex], this.heap[smallerChildIndex]) <= 0) {
      break;
    }

    this.swap(currentIndex, smallerChildIndex);
    currentIndex = smallerChildIndex;
    leftChildIndex = this.getLeftChildIndex(currentIndex);
  }

  return root;
}
isEmpty() {
  return this.heap.length === 0;
}
