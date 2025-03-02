type Graph = {
  [key: string]: { node: string; weight: number }[];
};

interface ShortestPathResult {
  distances: { [key: string]: number };
  previous: { [key: string]: string | null };
}

function dijkstra(graph: Graph, startNode: string): ShortestPathResult {
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};
  const queue: Set<string> = new Set();

  // Initialize distances and queue
  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
    queue.add(node);
  }
  distances[startNode] = 0;

  while (queue.size > 0) {
    // Get the node with the smallest distance
    let currentNode: string | null = null;
    for (const node of queue) {
      if (currentNode === null || distances[node] < distances[currentNode]) {
        currentNode = node;
      }
    }

    // If the smallest distance is Infinity, the remaining nodes are not reachable
    if (distances[currentNode] === Infinity) {
      break;
    }

    // Remove the current node from the queue
    queue.delete(currentNode);

    // Update the distance to the neighboring nodes
    for (const neighbor of graph[currentNode]) {
      const alt = distances[currentNode] + neighbor.weight;
      if (alt < distances[neighbor.node]) {
        distances[neighbor.node] = alt;
        previous[neighbor.node] = currentNode;
      }
    }
  }

  return { distances, previous };
}

// Example usage
const graph: Graph = {
  A: [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
  B: [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
  C: [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }, { node: 'D', weight: 1 }],
  D: [{ node: 'B', weight: 5 }, { node: 'C', weight: 1 }]
};

const result = dijkstra(graph, 'A');
console.log('Distances:', result.distances);
console.log('Previous nodes:', result.previous);
