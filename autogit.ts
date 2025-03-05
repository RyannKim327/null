type Graph = {
  [key: string]: { [key: string]: number }; // Adjacency list representation
};

class PriorityQueue {
  private elements: { node: string; priority: number }[] = [];

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  enqueue(node: string, priority: number): void {
    this.elements.push({ node, priority });
    this.elements.sort((a, b) => a.priority - b.priority); // Sort by priority (ascending)
  }

  dequeue(): { node: string; priority: number } | undefined {
    return this.elements.shift();
  }
}

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
  const distances: { [key: string]: number } = {};
  const pq = new PriorityQueue();
  const visited: Set<string> = new Set();

  // Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { node: currentNode } = pq.dequeue()!;

    if (visited.has(currentNode)) {
      continue; // Skip if already visited
    }
    visited.add(currentNode);

    for (const neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const newDistance = distances[currentNode] + weight;

      // If found a shorter path to the neighbor
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        pq.enqueue(neighbor, newDistance);
      }
    }
  }

  return distances;
}

// Example of using the Dijkstra function
const graph: Graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const shortestPathsFromA = dijkstra(graph, 'A');
console.log(shortestPathsFromA);
