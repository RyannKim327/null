interface Node<T> {
  value: T;
  neighbors: Node<T>[];
}

// Depth-limited search iterative function
function depthLimitedSearch<T>(
  start: Node<T>,
  goalTest: (node: Node<T>) => boolean,
  depthLimit: number
): Node<T> | null {
  // Stack will hold tuples of [node, currentDepth]
  const stack: Array<[Node<T>, number]> = [[start, 0]];
  const visited = new Set<Node<T>>();

  while (stack.length > 0) {
    const [node, depth] = stack.pop()!;

    if (goalTest(node)) {
      return node;
    }

    if (depth < depthLimit) {
      visited.add(node);
      // Push neighbors along with depth+1 if not already visited
      for (const neighbor of node.neighbors) {
        if (!visited.has(neighbor)) {
          stack.push([neighbor, depth + 1]);
        }
      }
    }
  }

  // If no goal node found within depth limit
  return null;
}
const nodeA: Node<string> = { value: "A", neighbors: [] };
const nodeB: Node<string> = { value: "B", neighbors: [] };
const nodeC: Node<string> = { value: "C", neighbors: [] };
// ... build the graph
nodeA.neighbors.push(nodeB, nodeC);
// etc.

const goalTest = (node: Node<string>) => node.value === "C";

const foundNode = depthLimitedSearch(nodeA, goalTest, 2);
if (foundNode) {
  console.log("Goal found:", foundNode.value);
} else {
  console.log("Goal not found within depth limit");
}
