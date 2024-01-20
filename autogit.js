class BinaryHeap {
  constructor() {
    this.heap = [];
  }
}
BinaryHeap.prototype.parent = function (index) {
  return Math.floor((index - 1) / 2);
};

BinaryHeap.prototype.leftChild = function (index) {
  return 2 * index + 1;
};

BinaryHeap.prototype.rightChild = function (index) {
  return 2 * index + 2;
};
BinaryHeap.prototype.insert = function (value) {
  this.heap.push(value);
  this.heapifyUp();
};

BinaryHeap.prototype.remove = function () {
  if (this.isEmpty()) {
    return undefined;
  }
  if (this.size() === 1) {
    return this.heap.pop();
  }

  const root = this.heap[0];
  this.heap[0] = this.heap.pop();
  this.heapifyDown();

  return root;
};
BinaryHeap.prototype.heapifyUp = function () {
  let currentIndex = this.size() - 1;

  while (
    currentIndex > 0 &&
    this.heap[currentIndex] < this.heap[this.parent(currentIndex)]
  ) {
    this.swap(currentIndex, this.parent(currentIndex));
    currentIndex = this.parent(currentIndex);
  }
};
BinaryHeap.prototype.heapifyDown = function () {
  let currentIndex = 0;

  while (this.hasLeftChild(currentIndex)) {
    let smallestChildIndex = this.leftChild(currentIndex);

    if (
      this.hasRightChild(currentIndex) &&
      this.heap[this.rightChild(currentIndex)] < this.heap[smallestChildIndex]
    ) {
      smallestChildIndex = this.rightChild(currentIndex);
    }

    if (this.heap[currentIndex] < this.heap[smallestChildIndex]) {
      break;
    } else {
      this.swap(currentIndex, smallestChildIndex);
    }

    currentIndex = smallestChildIndex;
  }
};
BinaryHeap.prototype.size = function () {
  return this.heap.length;
};

BinaryHeap.prototype.isEmpty = function () {
  return this.size() === 0;
};

BinaryHeap.prototype.swap = function (index1, index2) {
  [this.heap[index1], this.heap[index2]] = [
    this.heap[index2],
    this.heap[index1],
  ];
};

BinaryHeap.prototype.hasLeftChild = function (index) {
  return this.leftChild(index) < this.size();
};

BinaryHeap.prototype.hasRightChild = function (index) {
  return this.rightChild(index) < this.size();
};
const pq = new BinaryHeap();
pq.insert(5);
pq.insert(10);
pq.insert(3);
pq.insert(8);

console.log(pq.remove()); // Output: 3
console.log(pq.remove()); // Output: 5
console.log(pq.remove()); // Output: 8
console.log(pq.remove()); // Output: 10
console.log(pq.remove()); // Output: undefined (empty queue)
