function tarjansAlgorithm(graph) {
  // Initialize variables
  let index = 0;
  const stack = [];
  const indices = new Map();
  const lowLinks = new Map();
  const onStack = new Set();
  const result = [];

  // Recursive function to perform depth-first search
  function strongconnect(node) {
    // Set the depth index for the current node
    indices.set(node, index);
    lowLinks.set(node, index);
    index++;
    stack.push(node);
    onStack.add(node);

    // Check each neighbor of the current node
    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      if (!indices.has(neighbor)) {
        // Neighbor has not yet been visited
        strongconnect(neighbor);
        lowLinks.set(node, Math.min(lowLinks.get(node), lowLinks.get(neighbor)));
      } else if (onStack.has(neighbor)) {
        // Neighbor is on the current path and hence in the current strongly connected component
        lowLinks.set(node, Math.min(lowLinks.get(node), indices.get(neighbor)));
      }
    }

    // If node is a root node, pop the stack and generate a new strongly connected component
    if (lowLinks.get(node) === indices.get(node)) {
      const component = [];

      let currentNode;
      do {
        currentNode = stack.pop();
        onStack.delete(currentNode);
        component.push(currentNode);
      } while (currentNode !== node);

      result.push(component);
    }
  }

  // Apply Tarjan's algorithm for each unvisited node
  const nodes = Object.keys(graph);
  for (const node of nodes) {
    if (!indices.has(node)) {
      strongconnect(node);
    }
  }

  // Return the strongly connected components
  return result;
}

// Example usage:
const graph = {
  A: ['B'],
  B: ['C', 'E', 'F'],
  C: ['A', 'D'],
  D: ['G'],
  E: ['A', 'F'],
  F: ['H'],
  G: ['D', 'H'],
  H: ['I'],
  I: ['J'],
  J: ['G'],
};

const stronglyConnectedComponents = tarjansAlgorithm(graph);
console.log(stronglyConnectedComponents);
