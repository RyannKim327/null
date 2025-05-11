class PriorityQueue<T> {
  private heap: { priority: number; item: T }[] = [];

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private bubbleUp(index: number) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  private bubbleDown(index: number) {
    const lastIndex = this.heap.length - 1;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex].priority < this.heap[smallestIndex].priority
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex === index) break;

      this.swap(index, smallestIndex);
      index = smallestIndex;
    }
  }

  enqueue(item: T, priority: number): void {
    this.heap.push({ item, priority });
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const root = this.heap[0].item;
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return root;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }
}

// Graph represented as adjacency list: node -> Array<[neighbor, weight]>
type Graph = Map<string, Array<[string, number]>>;

function dijkstra(graph: Graph, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const pq = new PriorityQueue<string>();

  // Initialize distances to infinity and start node to 0
  graph.forEach((_, node) => distances.set(node, Infinity));
  distances.set(start, 0);

  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const current = pq.dequeue()!;
    const currentDistance = distances.get(current)!;

    for (const [neighbor, weight] of graph.get(current) || []) {
      const distance = currentDistance + weight;
      if (distance < distances.get(neighbor)!) {
        distances.set(neighbor, distance);
        pq.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}

// Example usage:
const graph: Graph = new Map([
  ['A', [['B', 5], ['C', 1]]],
  ['B', [['A', 5], ['C', 2], ['D', 1]]],
  ['C', [['A', 1], ['B', 2], ['D', 4], ['E', 8]]],
  ['D', [['B', 1], ['C', 4], ['E', 3], ['F', 6]]],
  ['E', [['C', 8], ['D', 3]]],
  ['F', [['D', 6]]]
]);

const distances = dijkstra(graph, 'A');
console.log(distances); // Map with shortest distances from 'A' to each node
