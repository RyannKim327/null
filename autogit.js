function depthFirstSearch(graph, startNode) {
  // Create a stack to keep track of nodes to visit
  const stack = [];

  // Set of visited nodes
  const visited = new Set();

  // Push the starting node onto the stack
  stack.push(startNode);

  // Perform depth-first search
  while (stack.length > 0) {
    // Pop a node from the stack
    const currentNode = stack.pop();

    // Process the node if it hasn't been visited
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      console.log(currentNode); // Do something with the node, e.g. print it

      // Get neighbors of the current node
      const neighbors = graph[currentNode];

      // Push unvisited neighbors onto the stack
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};
const startNode = 'A';
depthFirstSearch(graph, startNode);
