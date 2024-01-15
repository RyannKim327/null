function breadthFirstSearch(startNode) {
  const queue = [startNode]; // Initialize the queue with the starting node
  const visited = new Set(); // Create a set to store the visited nodes

  while (queue.length !== 0) {
    const currentNode = queue.shift(); // Dequeue a node from the queue

    if (visited.has(currentNode)) {
      continue; // Skip to the next iteration if the node has been visited already
    }

    visited.add(currentNode); // Mark the current node as visited
    console.log(currentNode); // Process the current node (print it in this case)

    // Enqueue all adjacent nodes that have not been visited
    currentNode.adjacentNodes.forEach((adjacentNode) => {
      if (!visited.has(adjacentNode)) {
        queue.push(adjacentNode);
      }
    });
  }
}
