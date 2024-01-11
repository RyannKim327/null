class Node {
  constructor(position, parent = null, g = 0, h = 0) {
    this.position = position;
    this.parent = parent;
    this.g = g; // cost from start node to current node
    this.h = h; // estimated cost from current node to goal node
    this.f = g + h; // total cost of the node (f = g + h)
  }
}
function aStarSearch(start, goal) {
  const openSet = [start]; // set of nodes we have yet to explore
  const closedSet = []; // set of nodes we have already explored

  while (openSet.length > 0) {
    // Find the node with the lowest f value in the open set
    let lowestIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestIndex].f) {
        lowestIndex = i;
      }
    }

    const current = openSet[lowestIndex];

    // Check if the current node is the goal node
    if (current === goal) {
      const path = [];
      let node = current;
      while (node !== null) {
        path.push(node.position);
        node = node.parent;
      }
      return path.reverse(); // Return the path from the goal node to the start node
    }

    // Move the current node from the open set to the closed set
    openSet.splice(lowestIndex, 1);
    closedSet.push(current);

    // Generate the neighbors of the current node
    const neighbors = generateNeighbors(current);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      // Check if the neighbor node is already in the closed set
      if (closedSet.includes(neighbor)) {
        continue; // Skip to the next neighbor
      }

      // Calculate the cost from start to the neighbor through the current node
      const gScore = current.g + 1;

      // Check if the neighbor is not in the open set or the new g score is lower
      if (!openSet.includes(neighbor) || gScore < neighbor.g) {
        neighbor.g = gScore;
        neighbor.h = heuristic(neighbor, goal);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;

        // Add the neighbor to the open set if it's not already there
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return null; // Return null if no path is found
}
function heuristic(node, goal) {
  // Calculate the Manhattan distance between the current node and the goal node
  const dx = Math.abs(node.position.x - goal.position.x);
  const dy = Math.abs(node.position.y - goal.position.y);
  return dx + dy;
}
