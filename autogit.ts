type Graph = { [key: string]: string[] };

/**
 * Depth Limited Search function
 * @param graph - The graph represented as an adjacency list
 * @param currentNode - The current node being explored
 * @param goalNode - The target node we want to find
 * @param depth - The current depth in the search tree
 * @param depthLimit - The maximum depth to explore
 * @param visited - A set to keep track of visited nodes (to avoid cycles)
 * @returns - True if the goal was found, false otherwise
 */
function depthLimitedSearch(
  graph: Graph,
  currentNode: string,
  goalNode: string,
  depth: number,
  depthLimit: number,
  visited: Set<string> = new Set()
): boolean {
  // Base case: if the current node is the goal node
  if (currentNode === goalNode) {
    return true;
  }

  // Stop searching if depth limit is reached
  if (depth === depthLimit) {
    return false;
  }

  // Mark the current node as visited
  visited.add(currentNode);

  // Explore neighbors
  for (const neighbor of graph[currentNode] || []) {
    // Avoid cycles by checking if the neighbor has already been visited
    if (!visited.has(neighbor)) {
      // Recursively search in the next level
      if (depthLimitedSearch(graph, neighbor, goalNode, depth + 1, depthLimit, visited)) {
        return true;
      }
    }
  }

  // Backtrack: remove the current node from visited set
  visited.delete(currentNode);
  
  return false;
}

// Example usage
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['G'],
  F: [],
  G: ['C'],
};

const startNode = 'A';
const goalNode = 'G';
const depthLimit = 3;

const found = depthLimitedSearch(graph, startNode, goalNode, 0, depthLimit);
console.log(`Goal node ${goalNode} found: ${found}`);
