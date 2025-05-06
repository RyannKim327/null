type Graph = Map<string, Map<string, number>>;

class PriorityQueue<T> {
  private elements: {item: T; priority: number}[] = [];

  enqueue(item: T, priority: number) {
    this.elements.push({item, priority});
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    return this.elements.shift()?.item;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

function dijkstra(graph: Graph, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const pq = new PriorityQueue<string>();

  graph.forEach((_, node) => distances.set(node, Infinity));
  distances.set(start, 0);
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const current = pq.dequeue()!;
    const currentDistance = distances.get(current)!;

    const neighbors = graph.get(current);
    if (!neighbors) continue;

    neighbors.forEach((weight, neighbor) => {
      const distanceThroughCurrent = currentDistance + weight;
      if (distanceThroughCurrent < distances.get(neighbor)!) {
        distances.set(neighbor, distanceThroughCurrent);
        pq.enqueue(neighbor, distanceThroughCurrent);
      }
    });
  }

  return distances;
}

// Example usage:
const graph: Graph = new Map([
  ['A', new Map([['B', 1], ['C', 4]])],
  ['B', new Map([['C', 2], ['D', 5]])],
  ['C', new Map([['D', 1]])],
  ['D', new Map()],
]);

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths);
// Output distances from A: Map { 'A' => 0, 'B' => 1, 'C' => 3, 'D' => 4 }
