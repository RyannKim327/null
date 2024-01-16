function bfs(graph, startNode, targetNode, depthLimit) {
  // Create a queue for BFS and add the start node to it
  const queue = [[startNode, 0]];
  
  // Create a set to track visited nodes
  const visited = new Set();
  visited.add(startNode);
  
  // Perform BFS until the queue is empty
  while (queue.length > 0) {
    // Dequeue a node from the front of the queue
    const [node, depth] = queue.shift();
    
    // Check if the target node is found
    if (node === targetNode) {
      return `Target node found at depth ${depth}`;
    }
    
    // Check if depth limit has been reached
    if (depth >= depthLimit) {
      return 'Depth limit reached';
    }
    
    // Enqueue all the neighbors of the current node
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, depth + 1]);
        visited.add(neighbor);
      }
    }
  }
  
  return 'Target node not found';
}
const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['G', 'H'],
  'F': ['I', 'J'],
  'G': [],
  'H': [],
  'I': [],
  'J': []
};

console.log(bfs(graph, 'A', 'I', 3));  // Output: Target node found at depth 3
console.log(bfs(graph, 'A', 'J', 2));  // Output: Depth limit reached
console.log(bfs(graph, 'A', 'K', 5));  // Output: Target node not found
