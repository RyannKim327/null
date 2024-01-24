class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.items = [];
  }
}
getLeftChildIndex(index) {
  return 2 * index + 1;
}

getRightChildIndex(index) {
  return 2 * index + 2;
}
getParentIndex(index) {
  return Math.floor((index - 1) / 2);
}
enqueue(value, priority) {
  const node = new Node(value, priority);
  this.items.push(node);
  this.heapifyUp();
}
heapifyUp() {
  let index = this.items.length - 1;
  while (index > 0) {
    const parentIndex = this.getParentIndex(index);
    if (this.items[index].priority <= this.items[parentIndex].priority) {
      break;
    }
    this.swap(index, parentIndex);
    index = parentIndex;
  }
}
swap(index1, index2) {
  [this.items[index1], this.items[index2]] = [this.items[index2], this.items[index1]];
}
dequeue() {
  if (this.isEmpty()) {
    return null;
  }
  const root = this.items[0];
  const lastNode = this.items.pop();
  if (!this.isEmpty()) {
    this.items[0] = lastNode;
    this.heapifyDown();
  }
  return root.value;
}
heapifyDown() {
  let index = 0;
  while (this.getLeftChildIndex(index) < this.items.length) {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    const biggerChildIndex = this.getHigherPriorityChildIndex(
      leftChildIndex,
      rightChildIndex
    );
    if (this.items[index].priority >= this.items[biggerChildIndex].priority) {
      break;
    }
    this.swap(index, biggerChildIndex);
    index = biggerChildIndex;
  }
}
getHigherPriorityChildIndex(leftChildIndex, rightChildIndex) {
  if (
    rightChildIndex >= this.items.length ||
    this.items[leftChildIndex].priority >= this.items[rightChildIndex].priority
  ) {
    return leftChildIndex;
  } else {
    return rightChildIndex;
  }
}
isEmpty() {
  return this.items.length === 0;
}
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.items.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.items.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.items[index].priority <= this.items[parentIndex].priority) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const root = this.items[0];
    const lastNode = this.items.pop();
    if (!this.isEmpty()) {
      this.items[0] = lastNode;
      this.heapifyDown();
    }
    return root.value;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.items.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const biggerChildIndex = this.getHigherPriorityChildIndex(
        leftChildIndex,
        rightChildIndex
      );
      if (
        this.items[index].priority >= this.items[biggerChildIndex].priority
      ) {
        break;
      }
      this.swap(index, biggerChildIndex);
      index = biggerChildIndex;
    }
  }

  getHigherPriorityChildIndex(leftChildIndex, rightChildIndex) {
    if (
      rightChildIndex >= this.items.length ||
      this.items[leftChildIndex].priority >= this.items[rightChildIndex].priority
    ) {
      return leftChildIndex;
    } else {
      return rightChildIndex;
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
