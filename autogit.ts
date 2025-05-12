type Graph = Map<string, Map<string, number>>;

function dijkstra(graph: Graph, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const visited = new Set<string>();
  const nodes = Array.from(graph.keys());

  // Initialize distances to infinity, except start node
  nodes.forEach(node => distances.set(node, Infinity));
  distances.set(start, 0);

  while (visited.size < nodes.length) {
    // Pick the unvisited node with the smallest distance
    let closestNode: string | null = null;
    let smallestDistance = Infinity;

    for (const node of nodes) {
      if (!visited.has(node)) {
        const dist = distances.get(node)!;
        if (dist < smallestDistance) {
          smallestDistance = dist;
          closestNode = node;
        }
      }
    }

    if (closestNode === null) {
      // All remaining nodes are inaccessible from start
      break;
    }

    // Mark this node as visited
    visited.add(closestNode);

    // Update distances for neighbors
    const neighbors = graph.get(closestNode);
    if (neighbors) {
      for (const [neighbor, weight] of neighbors.entries()) {
        if (!visited.has(neighbor)) {
          const currentDist = distances.get(neighbor)!;
          const newDist = distances.get(closestNode)! + weight;
          if (newDist < currentDist) {
            distances.set(neighbor, newDist);
          }
        }
      }
    }
  }

  return distances;
}

// Example usage
const graph: Graph = new Map([
  ['A', new Map([['B', 5], ['C', 1]])],
  ['B', new Map([['A', 5], ['C', 2], ['D', 1]])],
  ['C', new Map([['A', 1], ['B', 2], ['D', 4], ['E', 8]])],
  ['D', new Map([['B', 1], ['C', 4], ['E', 3], ['F', 6]])],
  ['E', new Map([['C', 8], ['D', 3]])],
  ['F', new Map([['D', 6]])],
]);

const distancesFromA = dijkstra(graph, 'A');
console.log('Shortest distances from A:');
for (const [node, dist] of distancesFromA.entries()) {
  console.log(`${node}: ${dist}`);
}
