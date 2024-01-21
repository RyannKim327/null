const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C", "F"],
  F: ["E"],
};
function breadthFirstSearch(graph, startNode) {
  // Create a visited object to keep track of visited nodes
  const visited = {};
  
  // Create a queue for BFS
  const queue = [startNode];
  
  // Mark the start node as visited
  visited[startNode] = true;

  // Loop until the queue is empty
  while (queue.length > 0) {
    // Dequeue a node from the queue
    const currentNode = queue.shift();
    
    // Process the current node
    console.log(currentNode);

    // Get the neighbors of the current node
    const neighbors = graph[currentNode];

    // Check each neighbor
    for (let neighbor of neighbors) {
      // If the neighbor is not visited
      if (!visited[neighbor]) {
        // Mark it as visited
        visited[neighbor] = true;
        // Enqueue the neighbor
        queue.push(neighbor);
      }
    }
  }
}
breadthFirstSearch(graph, "A");
