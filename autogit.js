function topologicalSort(nodes) {
  // Step 2: Create an empty stack to store the result
  const stack = [];

  // Step 3: Create a set to track the visited nodes
  const visited = new Set();

  // Step 4: Iterate over each node and run the DFS algorithm
  for (const node of nodes) {
    if (!visited.has(node)) {
      dfs(node, visited, stack);
    }
  }

  // Step 8: Return the topological sorted result
  return stack.reverse();
}
function dfs(node, visited, stack) {
  // Step 5: Mark the current node as visited
  visited.add(node);

  // Step 6: Recursively visit all the dependencies of the current node
  for (const dependency of node.dependencies) {
    if (!visited.has(dependency)) {
      dfs(dependency, visited, stack);
    }
  }

  // Step 7: Push the current node to the stack after visiting all its dependencies
  stack.push(node);
}
const nodes = [
  { id: 1, dependencies: [2, 3] },
  { id: 2, dependencies: [4] },
  { id: 3, dependencies: [4] },
  { id: 4, dependencies: [] }
];

const result = topologicalSort(nodes);
console.log(result);
