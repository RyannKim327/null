type Node = string; // or any type that identifies a node uniquely
type Graph = Map<Node, Node[]>;

/**
 * Breadth-Limited Search
 * @param graph The graph represented as adjacency list
 * @param start The starting node
 * @param goal The goal node to find (optional - null if just traversal)
 * @param limit Maximum depth to explore
 * @returns Path to goal node or null if not found within the depth limit
 */
function breadthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node | null,
  limit: number
): Node[] | null {
  if (limit < 0) return null;

  // Queue elements are: [currentNode, pathSoFar, depth]
  const queue: Array<[Node, Node[], number]> = [[start, [start], 0]];
  const visited = new Set<Node>();
  visited.add(start);

  while (queue.length > 0) {
    const [current, path, depth] = queue.shift()!;

    if (goal !== null && current === goal) {
      return path;
    }

    if (depth < limit) {
      const neighbors = graph.get(current) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, [...path, neighbor], depth + 1]);
        }
      }
    }
  }

  // Goal not found within limit
  return null;
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D', 'E']],
  ['C', ['F']],
  ['D', []],
  ['E', ['F']],
  ['F', []]
]);

const start = 'A';
const goal = 'F';
const limit = 2;

const path = breadthLimitedSearch(graph, start, goal, limit);
console.log(path); // Might output something like ['A', 'C', 'F'] or null if not found within limit
