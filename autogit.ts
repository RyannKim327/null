type Graph = {
  [node: string]: { neighbor: string; weight: number }[];
};
function dijkstra(graph: Graph, start: string) {
  // Distances from start to each node, initialized to Infinity
  const distances: Record<string, number> = {};
  // Keeps track of visited nodes
  const visited: Set<string> = new Set();
  // Previous node for path reconstruction
  const previous: Record<string, string | null> = {};

  // Initialize distances and previous nodes
  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[start] = 0;

  while (true) {
    // Find unvisited node with smallest tentative distance
    let closestNode: string | null = null;
    let smallestDistance = Infinity;
    for (const node in distances) {
      if (!visited.has(node) && distances[node] < smallestDistance) {
        smallestDistance = distances[node];
        closestNode = node;
      }
    }

    // If all nodes visited or smallest distance is Infinity, stop
    if (closestNode === null) break;

    // Mark current node as visited
    visited.add(closestNode);

    // Update distances to neighbors
    for (const { neighbor, weight } of graph[closestNode]) {
      if (visited.has(neighbor)) continue;

      const newDistance = distances[closestNode] + weight;
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = closestNode;
      }
    }
  }

  return { distances, previous };
}

// Optional helper function to reconstruct path from start to target
function reconstructPath(previous: Record<string, string | null>, start: string, end: string): string[] {
  const path: string[] = [];
  let current: string | null = end;

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }

  if (path[0] === start) {
    return path;
  } else {
    // No path found
    return [];
  }
}
const graph: Graph = {
  A: [{ neighbor: "B", weight: 7 }, { neighbor: "C", weight: 9 }, { neighbor: "F", weight: 14 }],
  B: [{ neighbor: "A", weight: 7 }, { neighbor: "C", weight: 10 }, { neighbor: "D", weight: 15 }],
  C: [{ neighbor: "A", weight: 9 }, { neighbor: "B", weight: 10 }, { neighbor: "D", weight: 11 }, { neighbor: "F", weight: 2 }],
  D: [{ neighbor: "B", weight: 15 }, { neighbor: "C", weight: 11 }, { neighbor: "E", weight: 6 }],
  E: [{ neighbor: "D", weight: 6 }, { neighbor: "F", weight: 9 }],
  F: [{ neighbor: "A", weight: 14 }, { neighbor: "C", weight: 2 }, { neighbor: "E", weight: 9 }]
};

const { distances, previous } = dijkstra(graph, "A");
console.log("Distances from A:", distances);

const path = reconstructPath(previous, "A", "E");
console.log("Path from A to E:", path);
