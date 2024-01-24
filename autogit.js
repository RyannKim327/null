function breadthFirstSearch(graph, startNode, goalNode) {
  const queue = [startNode]; // Create a queue and enqueue the starting node
  const visited = new Set(); // Create a visited set to track visited nodes

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue a node from the front of the queue

    // Process the current node (check if it is the goal node)
    if (currentNode === goalNode) {
      console.log('Goal node found!');
      return;
    }

    // Enqueue unvisited neighbors into the queue and mark them as visited
    graph[currentNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }

  console.log('Goal node not found!');
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

breadthFirstSearch(graph, 'A', 'F');
