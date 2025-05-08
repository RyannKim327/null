type Edge = { node: string; weight: number };

type Graph = {
  [key: string]: Edge[];
};
type Edge = { node: string; weight: number };
type Graph = { [key: string]: Edge[] };

function dijkstra(graph: Graph, start: string): { [node: string]: number } {
  const distances: { [node: string]: number } = {};
  const visited: Set<string> = new Set();
  
  // Initialize distances
  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
  });
  distances[start] = 0;

  // Helper function to get the unvisited node with the smallest tentative distance
  function getClosestNode(): string | null {
    let closestNode: string | null = null;
    let smallestDistance = Infinity;

    for (const node in distances) {
      if (!visited.has(node) && distances[node] < smallestDistance) {
        smallestDistance = distances[node];
        closestNode = node;
      }
    }
    return closestNode;
  }

  let currentNode = getClosestNode();

  while (currentNode !== null) {
    visited.add(currentNode);
    const currentDistance = distances[currentNode];

    for (const neighbor of graph[currentNode]) {
      if (visited.has(neighbor.node)) continue;
      
      const newDistance = currentDistance + neighbor.weight;
      if (newDistance < distances[neighbor.node]) {
        distances[neighbor.node] = newDistance;
      }
    }
    currentNode = getClosestNode();
  }

  return distances;
}
const graph: Graph = {
  A: [{ node: "B", weight: 5 }, { node: "C", weight: 1 }],
  B: [{ node: "A", weight: 5 }, { node: "C", weight: 2 }, { node: "D", weight: 1 }],
  C: [{ node: "A", weight: 1 }, { node: "B", weight: 2 }, { node: "D", weight: 4 }, { node: "E", weight: 8 }],
  D: [{ node: "B", weight: 1 }, { node: "C", weight: 4 }, { node: "E", weight: 3 }, { node: "F", weight: 6 }],
  E: [{ node: "C", weight: 8 }, { node: "D", weight: 3 }],
  F: [{ node: "D", weight: 6 }],
};

const distancesFromA = dijkstra(graph, "A");
console.log(distancesFromA);
// Output should be shortest distances from node "A" to all other nodes
