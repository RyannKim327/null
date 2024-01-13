function breadthLimitedSearch(graph, startNode, depthLimit) {
  // Create a queue to keep track of nodes to be processed
  const queue = [];
  
  // Create a Set to keep track of visited nodes
  const visited = new Set();

  // Create an empty array to store the path
  const path = [];
  
  // Enqueue the starting node along with its depth
  queue.push({ node: startNode, depth: 0 });

  // While there are nodes in the queue
  while (queue.length > 0) {
    // Dequeue a node from the queue
    const { node, depth }  = queue.shift();
    
    // Check if the current depth exceeds the depth limit
    if (depth > depthLimit) continue;

    // Add the node to the visited set
    visited.add(node);
    path.push(node);

    // Check if the goal node is found
    if (isGoalNode(node)) {
      return path; // Return the path if the goal is found
    }

    // Enqueue all adjacent nodes that haven't been visited yet
    for (const adjacentNode of graph[node]) {
      if (!visited.has(adjacentNode)) {
        queue.push({ node: adjacentNode, depth: depth + 1 });
      }
    }
  }

  return null; // Return null if no path is found within the depth limit
}
// Create the graph (adjacency list)
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['G'],
  F: ['H'],
  G: [],
  H: [],
};

// Call the breadth-limited search function
const startNode = 'A';
const depthLimit = 3;
const path = breadthLimitedSearch(graph, startNode, depthLimit);

console.log('Path:', path);
