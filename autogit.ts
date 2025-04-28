type Graph = {
  [node: string]: { [neighbor: string]: number }; // adjacency list with weights
};

type Distances = { [node: string]: number | Infinity };
type PreviousNodes = { [node: string]: string | null };
class PriorityQueue<T> {
  private heap: { key: T; priority: number }[] = [];

  enqueue(key: T, priority: number) {
    this.heap.push({ key, priority });
    this.bubbleUp();
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const root = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0 && end) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return root?.key;
  }

  private bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIdx];

      if (element.priority >= parent.priority) break;

      this.heap[index] = parent;
      this.heap[parentIdx] = element;
      index = parentIdx;
    }
  }

  private bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      const leftChildIdx = 2 * index + 1;
      const rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swapIdx: number | null = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild.priority < (this.heap[index].priority)) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < this.heap[index].priority) ||
          (swapIdx !== null && rightChild.priority < leftChild!.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      [this.heap[index], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[index]];
      index = swapIdx;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
function dijkstra(graph: Graph, start: string): { distances: Distances; previous: PreviousNodes } {
  const distances: Distances = {};
  const previous: PreviousNodes = {};
  const unvisited = new PriorityQueue<string>();

  // Initialize distances and previous nodes
  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;
  unvisited.enqueue(start, 0);

  while (!unvisited.isEmpty()) {
    const currentNode = unvisited.dequeue();

    if (!currentNode) break; // Defensive check

    const currentDist = distances[currentNode];

    // Check neighbors
    for (const neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const alt = currentDist + weight;

      if (alt < (distances[neighbor] ?? Infinity)) {
        distances[neighbor] = alt;
        previous[neighbor] = currentNode;
        unvisited.enqueue(neighbor, alt);
      }
    }
  }

  return { distances, previous };
}
const graph: Graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4 },
  D: { B: 1, C: 4 },
};

const result = dijkstra(graph, 'A');
console.log(result.distances); // shortest distance from A to each node
console.log(result.previous);  // to reconstruct paths
