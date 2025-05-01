type Graph = Map<string, Map<string, number>>;

function dijkstra(graph: Graph, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const visited = new Set<string>();
  const pq = new PriorityQueue<[string, number]>((a, b) => a[1] < b[1]);

  // Initialize distances with Infinity, except the start node
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
  }
  distances.set(start, 0);

  // Initialize priority queue with start node (distance 0)
  pq.enqueue([start, 0]);

  while (!pq.isEmpty()) {
    const [currentNode, currentDist] = pq.dequeue()!;

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    const neighbors = graph.get(currentNode);
    if (!neighbors) continue;

    for (const [neighbor, weight] of neighbors.entries()) {
      if (visited.has(neighbor)) continue;
      const newDist = currentDist + weight;
      if (newDist < (distances.get(neighbor) ?? Infinity)) {
        distances.set(neighbor, newDist);
        pq.enqueue([neighbor, newDist]);
      }
    }
  }

  return distances;
}

// Simple priority queue implementation using a binary heap
class PriorityQueue<T> {
  private heap: T[] = [];
  private compare: (a: T, b: T) => boolean;

  constructor(compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  enqueue(item: T) {
    this.heap.push(item);
    this.bubbleUp();
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const top = this.heap[0];
    const bottom = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = bottom;
      this.bubbleDown();
    }
    return top;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (this.compare(element, parent)) {
        this.heap[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
    this.heap[index] = element;
  }

  private bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let swapIndex = -1;

      if (leftIdx < length) {
        if (this.compare(this.heap[leftIdx], element)) {
          swapIndex = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          this.compare(this.heap[rightIdx], swapIndex === -1 ? element : this.heap[leftIdx])
        ) {
          swapIndex = rightIdx;
        }
      }

      if (swapIndex === -1) break;

      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }

    this.heap[index] = element;
  }
}

// Example usage:

const graph: Graph = new Map([
  ['A', new Map([['B', 5], ['C', 1]])],
  ['B', new Map([['A', 5], ['C', 2], ['D', 1]])],
  ['C', new Map([['A', 1], ['B', 2], ['D', 4], ['E', 8]])],
  ['D', new Map([['B', 1], ['C', 4], ['E', 3], ['F', 6]])],
  ['E', new Map([['C', 8], ['D', 3]])],
  ['F', new Map([['D', 6]])],
]);

const distances = dijkstra(graph, 'A');
for (const [node, dist] of distances.entries()) {
  console.log(`Distance from A to ${node}: ${dist}`);
}
