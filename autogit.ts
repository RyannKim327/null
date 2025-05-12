type Graph = Map<string, Map<string, number>>;

function dijkstra(graph: Graph, start: string): Map<string, number> {
  // Stores shortest distances from start to each node
  const distances = new Map<string, number>();
  // Keeps track of visited nodes
  const visited = new Set<string>();

  // Initialize distances to Infinity except start node
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
  }
  distances.set(start, 0);

  while (visited.size !== graph.size) {
    // Pick the unvisited node with the smallest distance
    let currentNode: string | null = null;
    let smallestDistance = Infinity;

    for (const [node, dist] of distances.entries()) {
      if (!visited.has(node) && dist < smallestDistance) {
        smallestDistance = dist;
        currentNode = node;
      }
    }

    if (currentNode === null) {
      // There are unreachable nodes; stop
      break;
    }

    visited.add(currentNode);

    // Update distances via currentNode
    const neighbors = graph.get(currentNode);
    if (!neighbors) continue;

    for (const [neighbor, weight] of neighbors.entries()) {
      if (visited.has(neighbor)) continue;
      const newDist = distances.get(currentNode)! + weight;
      if (newDist < distances.get(neighbor)!) {
        distances.set(neighbor, newDist);
      }
    }
  }

  return distances;
}
// Graph representation:
// Each node maps to a map of neighbors and edge weights
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
  console.log(`Distance from A to ${node} is ${dist}`);
}
