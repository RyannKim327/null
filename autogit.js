class Node {
  constructor(state, parent, gScore, hScore) {
    this.state = state;
    this.parent = parent;
    this.gScore = gScore;
    this.hScore = hScore;
    this.fScore = gScore + hScore;
  }
}
function aStarSearch(start, goal, heuristic, getNeighbours) {
  // Create open and closed sets
  const openSet = [start];
  const closedSet = [];

  // Set gScore for start node to 0
  start.gScore = 0;

  while (openSet.length > 0) {
    // Find the node in the open set with the lowest fScore
    const current = openSet.reduce((a, b) => (b.fScore < a.fScore ? b : a));

    // If the current node is the goal, we're done
    if (current === goal) {
      return reconstructPath(current);
    }

    // Move current node from open set to closed set
    openSet.splice(openSet.indexOf(current), 1);
    closedSet.push(current);

    // Get neighbors of the current node
    const neighbors = getNeighbours(current);

    for (const neighbor of neighbors) {
      // Skip neighbor if it is already in the closed set
      if (closedSet.includes(neighbor)) {
        continue;
      }

      // Calculate tentative gScore for the neighbor
      const tentativeGScore = current.gScore + 1;

      // If neighbor is not in the open set, add it
      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);
      }
      // If the tentative gScore is higher than neighbor's gScore, skip
      else if (tentativeGScore >= neighbor.gScore) {
        continue;
      }

      // Update the parent, gScore and fScore of neighbor
      neighbor.parent = current;
      neighbor.gScore = tentativeGScore;
      neighbor.fScore = neighbor.gScore + heuristic(neighbor, goal);
    }
  }

  // No path found
  return null;
}
function heuristic(node, goal) {
  // Manhattan distance heuristic
  const dx = Math.abs(node.state.x - goal.state.x);
  const dy = Math.abs(node.state.y - goal.state.y);
  return dx + dy;
}

function getNeighbors(node) {
  const neighbors = [];

  // Implement logic to get neighbors of the node
  // e.g., check adjacent cells in a grid

  return neighbors;
}
function reconstructPath(node) {
  const path = [node];
  let current = node;

  while (current.parent) {
    path.unshift(current.parent);
    current = current.parent;
  }

  return path;
}
