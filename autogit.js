class Node {
  constructor(position, gScore, hScore) {
    this.position = position;
    this.gScore = gScore;
    this.hScore = hScore;
    this.fScore = gScore + hScore;
  }
}
function aStarSearch(start, goal) {
  // Create open and closed sets to track nodes
  const openSet = [new Node(start, 0, heuristic(start, goal))];
  const closedSet = [];

  while (openSet.length > 0) {
    // Find the node with the lowest fScore in the openSet
    const currentNode = openSet.reduce((minNode, node) =>
      node.fScore < minNode.fScore ? node : minNode
    );

    // If we reached the goal, reconstruct and return the path
    if (currentNode.position === goal) {
      return reconstructPath(currentNode);
    }

    // Move the current node from openSet to closedSet
    openSet.splice(openSet.indexOf(currentNode), 1);
    closedSet.push(currentNode);

    // Generate neighboring nodes, evaluate and update scores
    const neighbors = generateNeighbors(currentNode);
    neighbors.forEach((neighbor) => {
      // Ignore the neighbor if it is in the closedSet
      if (closedSet.some((node) => node.position === neighbor.position)) {
        return;
      }

      // Calculate gScore for the neighbor
      const tentativeGScore = currentNode.gScore + distance(currentNode, neighbor);

      // Check if the neighbor is already in the openSet
      const existingNode = openSet.find((node) => node.position === neighbor.position);

      if (!existingNode) {
        // Add the neighbor to the openSet
        openSet.push(
          new Node(neighbor.position, tentativeGScore, heuristic(neighbor.position, goal))
        );
      } else if (tentativeGScore < existingNode.gScore) {
        // Update the existing node's gScore and fScore
        existingNode.gScore = tentativeGScore;
        existingNode.fScore = existingNode.gScore + existingNode.hScore;
      }
    });
  }

  // No path found
  return null;
}
