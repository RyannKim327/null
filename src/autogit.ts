const graph: { [key: string]: string[] } = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};
    A
   / \
  B   C
 / \   \
D   E - F
function iterativeDFS(graph: { [key: string]: string[] }, startNode: string): string[] {
  const visited: Set<string> = new Set(); // To track visited nodes
  const stack: string[] = [startNode];    // Stack to manage traversal
  const result: string[] = [];            // To store the traversal order

  while (stack.length > 0) {
    const currentNode = stack.pop()!; // Pop the top node from the stack

    if (!visited.has(currentNode)) {
      visited.add(currentNode);       // Mark the node as visited
      result.push(currentNode);       // Add it to the result

      // Push unvisited neighbors onto the stack in reverse order
      // This ensures we visit neighbors in the order they appear in the adjacency list.
      for (const neighbor of graph[currentNode].reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Example usage:
console.log(iterativeDFS(graph, "A")); // Output: ["A", "C", "F", "E", "B", "D"]
function recursiveDFS(
  graph: { [key: string]: string[] },
  currentNode: string,
  visited: Set<string>,
  result: string[]
): void {
  // Mark the current node as visited and add it to the result
  visited.add(currentNode);
  result.push(currentNode);

  // Recursively visit all unvisited neighbors
  for (const neighbor of graph[currentNode]) {
    if (!visited.has(neighbor)) {
      recursiveDFS(graph, neighbor, visited, result);
    }
  }
}

function dfs(graph: { [key: string]: string[] }, startNode: string): string[] {
  const visited: Set<string> = new Set();
  const result: string[] = [];
  recursiveDFS(graph, startNode, visited, result);
  return result;
}

// Example usage:
console.log(dfs(graph, "A")); // Output: ["A", "B", "D", "E", "F", "C"]
// Graph representation
const graph: { [key: string]: string[] } = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// Iterative DFS
function iterativeDFS(graph: { [key: string]: string[] }, startNode: string): string[] {
  const visited: Set<string> = new Set();
  const stack: string[] = [startNode];
  const result: string[] = [];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      result.push(currentNode);
      for (const neighbor of graph[currentNode].reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Recursive DFS
function recursiveDFS(
  graph: { [key: string]: string[] },
  currentNode: string,
  visited: Set<string>,
  result: string[]
): void {
  visited.add(currentNode);
  result.push(currentNode);

  for (const neighbor of graph[currentNode]) {
    if (!visited.has(neighbor)) {
      recursiveDFS(graph, neighbor, visited, result);
    }
  }
}

function dfs(graph: { [key: string]: string[] }, startNode: string): string[] {
  const visited: Set<string> = new Set();
  const result: string[] = [];
  recursiveDFS(graph, startNode, visited, result);
  return result;
}

// Example usage
console.log("Iterative DFS:", iterativeDFS(graph, "A"));
console.log("Recursive DFS:", dfs(graph, "A"));
Iterative DFS: ["A", "C", "F", "E", "B", "D"]
Recursive DFS: ["A", "B", "D", "E", "F", "C"]
