function breadthLimitedSearch(root, limit) {
  const queue = []; // Create an empty queue
  const visited = new Set(); // Keep track of visited nodes
  queue.push(root); // Enqueue the root node
  let depth = 0; // Initialize depth to 0

  while (queue.length > 0 && depth <= limit) {
    // Check if the queue is empty or depth exceeds limit
    const currentNode = queue.shift(); // Dequeue a node from the front of the queue

    // Process the currentNode as needed
    console.log(currentNode); // Example: Print the currentNode value

    if (depth < limit) {
      // If depth is less than limit, enqueue all children/adjacent nodes
      const neighbors = getNeighbors(currentNode); // Example: a helper function to get neighbors of currentNode
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor); // Mark neighbor as visited
        }
      }
    }

    if (queue.length === 0) {
      // Reached the end of a level, increment depth
      depth++;
    }
  }
}

// Example usage:
const rootNode = { value: 1 }; // Example root node
const limit = 2; // Maximum depth limit
breadthLimitedSearch(rootNode, limit);
