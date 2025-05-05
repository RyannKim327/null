type Graph = Map<string, Map<string, number>>; 
// Map from node to (Map of neighbor -> edge weight)

function dijkstra(graph: Graph, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const visited = new Set<string>();

  // Initialize distances to Infinity, except start = 0
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
  }
  distances.set(start, 0);

  while (visited.size < graph.size) {
    // Pick the unvisited node with the smallest distance
    let currentNode: string | null = null;
    let smallestDistance = Infinity;
    for (const [node, distance] of distances.entries()) {
      if (!visited.has(node) && distance < smallestDistance) {
        smallestDistance = distance;
        currentNode = node;
      }
    }

    if (currentNode === null) {
      // No reachable remaining nodes
      break;
    }

    visited.add(currentNode);

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
const graph: Graph = new Map([
  ["A", new Map([["B", 5], ["C", 2]])],
  ["B", new Map([["D", 1]])],
  ["C", new Map([["B", 8], ["D", 7]])],
  ["D", new Map([["E", 3]])],
  ["E", new Map()],
]);

const distancesFromA = dijkstra(graph, "A");
console.log(distancesFromA);
// Output will be minimum distances from A to all nodes
