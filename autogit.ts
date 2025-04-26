type Node<T> = {
  value: T;
  neighbors: Node<T>[];
};

// Function to perform breadth-limited search
function breadthLimitedSearch<T>(
  start: Node<T>,
  target: T,
  maxDepth: number
): Node<T> | null {
  const queue: Array<{ node: Node<T>; depth: number }> = [{ node: start, depth: 0 }];
  const visited = new Set<Node<T>>();

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;

    if (visited.has(node)) continue;
    visited.add(node);

    if (node.value === target) {
      return node; // Found target
    }

    if (depth < maxDepth) {
      for (const neighbor of node.neighbors) {
        if (!visited.has(neighbor)) {
          queue.push({ node: neighbor, depth: depth + 1 });
        }
      }
    }
  }

  return null; // Target not found within maxDepth
}
// Suppose you have a graph setup:
const nodeA: Node<string> = { value: 'A', neighbors: [] };
const nodeB: Node<string> = { value: 'B', neighbors: [] };
const nodeC: Node<string> = { value: 'C', neighbors: [] };
const nodeD: Node<string> = { value: 'D', neighbors: [] };

nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeD];

const result = breadthLimitedSearch(nodeA, 'D', 2);
console.log(result?.value); // Should output: 'D' if within depth, or null if beyond maxDepth
