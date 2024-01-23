// Function to perform a depth-first search
function dfs(graph, node, visited, stack) {
  visited.add(node);

  // Visit all neighbors of the current node
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, stack);
    }
  }

  // Push the current node to the stack
  stack.push(node);
}

// Function to perform topological sort
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  // Visit all nodes in the graph
  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(graph, node, visited, stack);
    }
  }

  // Reverse the order in the stack to get the sorted result
  return stack.reverse();
}

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: [],
  E: ['F'],
  F: []
};

const sorted = topologicalSort(graph);
console.log(sorted); // Output: ["A", "C", "E", "F", "B", "D"]
