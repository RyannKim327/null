class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    let current = index;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.heap[current].priority >= this.heap[parent].priority) break;
      [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
      current = parent;
    }
  }

  bubbleDown(index) {
    let current = index;
    const length = this.heap.length;
    while (true) {
      let left = 2 * current + 1;
      let right = 2 * current + 2;
      let swap = null;

      if (left < length && this.heap[left].priority < this.heap[current].priority) {
        swap = left;
      }
      if (right < length && this.heap[right].priority < (swap === null ? this.heap[current].priority : this.heap[left].priority)) {
        swap = right;
      }
      if (swap === null) break;

      [this.heap[current], this.heap[swap]] = [this.heap[swap], this.heap[current]];
      current = swap;
    }
  }
}
const pq = new PriorityQueue();

pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

console.log(pq.dequeue()); // { value: 'Task 2', priority: 1 }
console.log(pq.dequeue()); // { value: 'Task 3', priority: 2 }
console.log(pq.dequeue()); // { value: 'Task 1', priority: 3 }
