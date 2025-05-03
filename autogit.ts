type Graph = { [node: string]: string[] };

function breadthLimitedSearch(graph: Graph, start: string, goal: string, limit: number): string[] | null {
  // Each element in the queue will hold a tuple: [currentNode, pathToNode, currentDepth]
  const queue: Array<[string, string[], number]> = [[start, [start], 0]];

  while (queue.length > 0) {
    const [node, path, depth] = queue.shift()!;  // dequeue

    // Check if we reached the goal
    if (node === goal) {
      return path;  // returning the path from start to goal
    }

    // If we reached the depth limit, don’t expand this node further
    if (depth < limit) {
      const neighbors = graph[node] || [];
      for (const neighbor of neighbors) {
        // Avoid cycles by not revisiting nodes already in the path
        if (!path.includes(neighbor)) {
          queue.push([neighbor, [...path, neighbor], depth + 1]);
        }
      }
    }
  }

  // If no solution found within the depth limit
  return null;
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

const path = breadthLimitedSearch(graph, "A", "F", 2);
console.log(path); // Output might be ["A", "C", "F"] if within limit, or null if not found within 2 levels
