function dijkstra(graph, source) {
  const distance = {};
  const previous = {};
  const priorityQueue = new PriorityQueue();

  // Initialize all distances to infinity except the source node
  for (let node in graph) {
    distance[node] = Infinity;
    previous[node] = null;
  }
  distance[source] = 0;

  // Insert source node into the priority queue
  priorityQueue.enqueue(source, 0);

  while (!priorityQueue.isEmpty()) {
    const currentNode = priorityQueue.dequeue().element;

    // Visit each neighboring node of the current node
    for (let neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const totalDistance = distance[currentNode] + weight;

      // Update distance and previous node if a shorter path is found
      if (totalDistance < distance[neighbor]) {
        distance[neighbor] = totalDistance;
        previous[neighbor] = currentNode;
        priorityQueue.enqueue(neighbor, totalDistance);
      }
    }
  }
  
  return { distance, previous };
}

// Priority Queue implementation using a binary heap
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const node = { element, priority };
    this.queue.push(node);
    this.bubbleUp();
  }

  dequeue() {
    const minNode = this.queue.shift();
    this.heapify();
    return minNode;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  bubbleUp() {
    let index = this.queue.length - 1;
    const node = this.queue[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.queue[parentIndex];

      if (node.priority >= parent.priority) break;

      this.queue[parentIndex] = node;
      this.queue[index] = parent;
      index = parentIndex;
    }
  }

  heapify() {
    let index = 0;
    const length = this.queue.length;
    const node = this.queue[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.queue[leftChildIndex];
        if (leftChild.priority < node.priority) swapIndex = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.queue[rightChildIndex];
        if (
          (swapIndex === null && rightChild.priority < node.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;

      this.queue[index] = this.queue[swapIndex];
      this.queue[swapIndex] = node;
      index = swapIndex;
    }
  }
}
