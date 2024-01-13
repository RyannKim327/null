const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: []
};
function breadthLimitedSearch(graph, start, limit) {
  const visited = new Set();                // To track visited nodes
  const queue = [[start, 0]];               // Queue to store nodes and their depth

  while (queue.length > 0) {
    const [node, depth] = queue.shift();    // Dequeue the first node

    console.log(node);                      // Perform your required action, here printing node value

    visited.add(node);                      // Mark node as visited

    if (depth >= limit) continue;            // If depth exceeds the limit, skip expanding further

    const neighbors = graph[node];           // Get neighboring nodes

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {          // Check if neighbor is already visited
        queue.push([neighbor, depth + 1]);   // Enqueue unvisited neighbor with increased depth
      }
    }
  }
}

// Example usage
breadthLimitedSearch(graph, 'A', 2);
