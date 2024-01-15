// Function to find strongly connected components using Tarjan's algorithm
function tarjanSCC(graph) {
  // Initialize the variables
  let index = 0;
  const stack = [];
  const indexes = new Map(); // Map to store the index of each node
  const lowLinks = new Map(); // Map to store the low link value of each node
  const onStack = new Set(); // Set to store the visited nodes

  const result = []; // Array to store the strongly connected components

  // Recursive function to perform DFS traversal and find SCCs
  function strongConnect(node) {
    indexes.set(node, index);
    lowLinks.set(node, index);
    index++;
    stack.push(node);
    onStack.add(node);

    // Iterate over the neighbors of the node
    for (const neighbor of graph[node]) {
      if (!indexes.has(neighbor)) {
        strongConnect(neighbor);
        lowLinks.set(node, Math.min(lowLinks.get(node), lowLinks.get(neighbor)));
      } else if (onStack.has(neighbor)) {
        lowLinks.set(node, Math.min(lowLinks.get(node), indexes.get(neighbor)));
      }
    }

    // If node is a root node, pop the stack and add the SCC to the result
    if (lowLinks.get(node) === indexes.get(node)) {
      const scc = [];
      let w;
      do {
        w = stack.pop();
        onStack.delete(w);
        scc.push(w);
      } while (w !== node);
      result.push(scc);
    }
  }

  // Iterate over each node in the graph and perform DFS if not already visited
  for (const node of Object.keys(graph)) {
    if (!indexes.has(node)) {
      strongConnect(node);
    }
  }

  return result;
}

// Example usage
const graph = {
  A: ["B"],
  B: ["C", "E"],
  C: ["A", "D"],
  D: ["C"],
  E: ["F"],
  F: ["G"],
  G: ["E", "H"],
  H: ["I"],
  I: ["J", "G"],
  J: ["H"],
};

const components = tarjanSCC(graph);
console.log(components);
