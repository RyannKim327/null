function tarjan(graph) {
  let index = 0; // Index counter
  let stack = []; // Stack to store visited nodes
  let ids = new Map(); // Map to store the index of each node
  let lowLink = new Map(); // Map to store the low link value of each node
  let onStack = new Set(); // Set to check if a node is on the stack
  let components = []; // Array to store strongly connected components

  // Recursive function to perform the depth-first search
  function dfs(node) {
    ids.set(node, index);
    lowLink.set(node, index);
    index++;
    stack.push(node);
    onStack.add(node);

    // Iterate through the neighbors of the current node
    for (let neighbor of graph[node]) {
      // If the neighbor has not been visited, perform dfs on it
      if (!ids.has(neighbor)) {
        dfs(neighbor);
        lowLink.set(node, Math.min(lowLink.get(node), lowLink.get(neighbor)));
      }
      // If the neighbor is on the stack, update the low link value
      else if (onStack.has(neighbor)) {
        lowLink.set(node, Math.min(lowLink.get(node), ids.get(neighbor)));
      }
    }

    // If the node is a root node, pop the stack and form a strongly connected component
    if (ids.get(node) === lowLink.get(node)) {
      let component = [];
      let curr = null;
      do {
        curr = stack.pop();
        onStack.delete(curr);
        component.push(curr);
      } while (curr !== node);
      components.push(component);
    }
  }

  // Iterate through all nodes in the graph
  for (let node of Object.keys(graph)) {
    if (!ids.has(node)) {
      dfs(node);
    }
  }

  return components;
}
let graph = {
  'A': ['B'],
  'B': ['C', 'E', 'F'],
  'C': ['D', 'G'],
  'D': ['C', 'H'],
  'E': ['A', 'F'],
  'F': ['G'],
  'G': ['F'],
  'H': ['D', 'G']
};
let components = tarjan(graph);
console.log(components);
