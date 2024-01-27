// Define the graph or tree

// For demonstration purposes, let's assume the graph is represented as an adjacency list.
// Each node is an object with a value and an array of its neighboring nodes.

const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
}

// Implement the breadth-first search algorithm

function breadthFirstSearch(graph, startNode) {
  // Create a set to keep track of visited nodes
  const visited = new Set();

  // Create a queue for traversal
  const queue = [startNode];

  // Mark the start node as visited
  visited.add(startNode);

  // Continue until the queue is empty
  while (queue.length > 0) {
    // Dequeue the next node
    const currentNode = queue.shift();

    // Process the current node
    console.log(currentNode);

    // Get the neighbors of the current node
    const neighbors = graph[currentNode];

    // Enqueue the unvisited neighbors
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}

// Call the breadth-first search function
breadthFirstSearch(graph, 'A');
