function bidirectionalSearch(startNode, goalNode) {
  const startSet = new Set();
  const goalSet = new Set();
  startSet.add(startNode);
  goalSet.add(goalNode);

  let commonNode = null;

  while (startSet.size > 0 && goalSet.size > 0) {
    // Search from start direction
    const startNext = new Set();
    for (const node of startSet) {
      // Expand node to its neighbors
      const neighbors = expandNode(node);

      // Check if any neighbor is in goalSet
      for (const neighbor of neighbors) {
        if (goalSet.has(neighbor)) {
          commonNode = neighbor;
          break;
        }
        startNext.add(neighbor);
      }

      if (commonNode) {
        break;
      }
    }
    if (commonNode) {
      break;
    }
    startSet.clear();
    for (const node of startNext) {
      startSet.add(node);
    }

    // Search from goal direction
    const goalNext = new Set();
    for (const node of goalSet) {
      // Expand node to its neighbors
      const neighbors = expandNode(node);

      // Check if any neighbor is in startSet
      for (const neighbor of neighbors) {
        if (startSet.has(neighbor)) {
          commonNode = neighbor;
          break;
        }
        goalNext.add(neighbor);
      }

      if (commonNode) {
        break;
      }
    }
    if (commonNode) {
      break;
    }
    goalSet.clear();
    for (const node of goalNext) {
      goalSet.add(node);
    }
  }

  if (commonNode) {
    // Path from startNode to commonNode
    const path1 = getPath(startNode, commonNode);

    // Path from commonNode to goalNode
    const path2 = getPath(commonNode, goalNode);

    // Combine both paths
    return path1.concat(path2);
  } else {
    return 'No path found';
  }
}

// Helper function to expand a node
function expandNode(node) {
  // Implement your own logic to expand the node and return its neighbors
  // For example, if the node is represented as an object with a `neighbors` property:
  return node.neighbors;
}

// Helper function to get the path from start to goal
function getPath(startNode, goalNode) {
  // Implement your own logic to find the path between startNode and goalNode
  // For example, if the nodes have a `parent` property:
  const path = [];
  let current = goalNode;
  while (current !== startNode) {
    path.unshift(current);
    current = current.parent;
  }
  path.unshift(startNode);
  return path;
}
