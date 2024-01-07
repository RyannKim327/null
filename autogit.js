// Graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

function depthFirstSearch(graph, start) {
  const visited = new Set(); // To store visited nodes
  const stack = [start]; // Start with the initial node

  while (stack.length > 0) {
    const current = stack.pop(); // Get the last inserted node

    if (!visited.has(current)) {
      visited.add(current); // Mark the node as visited
      console.log(current); // Process the current node however you want

      const neighbors = graph[current]; // Get the neighbors of the current node
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor); // Push neighbors onto the stack if they haven't been visited
        }
      }
    }
  }
}

// Perform DFS starting from node 'A'
depthFirstSearch(graph, 'A');
