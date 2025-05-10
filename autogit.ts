type Neighbor = {
  node: string;
  weight: number;
};

type Graph = Map<string, Neighbor[]>;

function dijkstra(graph: Graph, start: string): Map<string, number> {
  // Distance from start to each node
  const distances = new Map<string, number>();
  const visited = new Set<string>();

  // Initialize distances to infinity, except start node = 0
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
  }
  distances.set(start, 0);

  while (visited.size < graph.size) {
    // Pick the unvisited node with the smallest distance
    let currentNode: string | null = null;
    let currentDistance = Infinity;

    for (const [node, distance] of distances) {
      if (!visited.has(node) && distance < currentDistance) {
        currentDistance = distance;
        currentNode = node;
      }
    }

    if (currentNode === null) {
      // Remaining nodes are inaccessible from start
      break;
    }

    visited.add(currentNode);

    // Update distances to neighbors
    const neighbors = graph.get(currentNode) ?? [];
    for (const { node: neighbor, weight } of neighbors) {
      if (!visited.has(neighbor)) {
        const newDist = currentDistance + weight;
        if (newDist < (distances.get(neighbor) ?? Infinity)) {
          distances.set(neighbor, newDist);
        }
      }
    }
  }

  return distances;
}

// Example usage:

const graph: Graph = new Map([
  ['A', [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }]],
  ['B', [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }]],
  ['C', [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }, { node: 'D', weight: 1 }]],
  ['D', [{ node: 'B', weight: 5 }, { node: 'C', weight: 1 }]],
]);

const distances = dijkstra(graph, 'A');

console.log("Shortest distances from A:");
for (const [node, distance] of distances) {
  console.log(`${node}: ${distance}`);
}
