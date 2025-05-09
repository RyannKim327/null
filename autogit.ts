type Graph = Map<string, Map<string, number>>;

class PriorityQueue<T> {
  private heap: { item: T; priority: number }[] = [];

  enqueue(item: T, priority: number) {
    this.heap.push({ item, priority });
    this.bubbleUp();
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const top = this.heap[0].item;
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return top;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  private bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (element.priority >= parent.priority) break;

      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  private bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swapIdx: number | null = null;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx].priority < element.priority
      ) {
        swapIdx = leftChildIdx;
      }

      if (
        rightChildIdx < length &&
        ((swapIdx === null && this.heap[rightChildIdx].priority < element.priority) ||
          (swapIdx !== null && this.heap[rightChildIdx].priority < this.heap[leftChildIdx].priority))
      ) {
        swapIdx = rightChildIdx;
      }

      if (swapIdx === null) break;

      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

function dijkstra(graph: Graph, start: string, end?: string) {
  const distances: Map<string, number> = new Map();
  const previous: Map<string, string | null> = new Map();

  for (const node of graph.keys()) {
    distances.set(node, Infinity);
    previous.set(node, null);
  }
  distances.set(start, 0);

  const pq = new PriorityQueue<string>();
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const currentNode = pq.dequeue()!;
    const currentDistance = distances.get(currentNode)!;

    if (end && currentNode === end) break;

    const neighbors = graph.get(currentNode)!;
    for (const [neighbor, weight] of neighbors.entries()) {
      const distance = currentDistance + weight;
      if (distance < distances.get(neighbor)!) {
        distances.set(neighbor, distance);
        previous.set(neighbor, currentNode);
        pq.enqueue(neighbor, distance);
      }
    }
  }

  // If end is specified, reconstruct path
  if (end) {
    const path: string[] = [];
    let current: string | null = end;
    while (current) {
      path.unshift(current);
      current = previous.get(current) || null;
    }
    if (path[0] !== start) return { distance: Infinity, path: [] }; // no path
    return { distance: distances.get(end)!, path };
  }

  return distances;
}
const graph: Graph = new Map([
  ['A', new Map([['B', 4], ['C', 2]])],
  ['B', new Map([['C', 5], ['D', 10]])],
  ['C', new Map([['E', 3]])],
  ['D', new Map([['F', 11]])],
  ['E', new Map([['D', 4]])],
  ['F', new Map()]
]);

const result = dijkstra(graph, 'A', 'F');
console.log(result);
// Output: { distance: 20, path: ['A', 'C', 'E', 'D', 'F'] }
