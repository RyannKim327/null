// Tarjan's algorithm for finding strongly connected components
function tarjanSCC(graph) {
  let index = 0; // DFS node index
  const stack = []; // Maintain a stack of nodes during the DFS
  const indices = new Map(); // Map to store each node's DFS index
  const lowLinks = new Map(); // Map to store each node's low link value
  const inStack = new Set(); // Set to keep track of nodes in the current SCC
  const result = []; // Store the strongly connected components

  // A helper function for DFS
  function dfs(node) {
    indices.set(node, index);
    lowLinks.set(node, index);
    index += 1;
    stack.push(node);
    inStack.add(node);

    for (const neighbor of graph[node]) {
      if (!indices.has(neighbor)) {
        dfs(neighbor);
        lowLinks.set(node, Math.min(lowLinks.get(node), lowLinks.get(neighbor)));
      } else if (inStack.has(neighbor)) {
        lowLinks.set(node, Math.min(lowLinks.get(node), indices.get(neighbor)));
      }
    }

    if (lowLinks.get(node) === indices.get(node)) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        inStack.delete(w);
        component.push(w);
      } while (w !== node);
      result.push(component);
    }
  }

  // Call DFS for each unvisited node
  for (const node in graph) {
    if (!indices.has(node)) {
      dfs(node);
    }
  }

  return result;
}

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['A', 'E'],
  D: ['C', 'F'],
  E: ['G'],
  F: ['E'],
  G: ['F'],
};

const scc = tarjanSCC(graph);
console.log(scc);
