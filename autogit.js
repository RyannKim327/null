function breadthFirstSearch(graph, startNode) {
  // Step 2: Create a queue and add the start node to it
  const queue = [startNode];

  // Step 3: Create a visited set and mark the start node as visited
  const visited = new Set();
  visited.add(startNode);

  // Step 4: Perform breadth-first search
  while (queue.length > 0) {
    // Dequeue a node from the queue
    const currentNode = queue.shift();

    // Process the node (e.g., print or do something with it)
    console.log(currentNode);

    // Get all adjacent nodes of the current node
    const neighbors = graph[currentNode];

    // Visit each adjacent node if not already visited
    for (let i = 0; i < neighbors.length; i++) {
      const neighborNode = neighbors[i];
      if (!visited.has(neighborNode)) {
        visited.add(neighborNode);
        queue.push(neighborNode);
      }
    }
  }
}
// Step 1: Define the graph
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'D'],
  D: ['B', 'C', 'E'],
  E: ['D']
};

// Step 5: Call the breadthFirstSearch function
breadthFirstSearch(graph, 'A');
