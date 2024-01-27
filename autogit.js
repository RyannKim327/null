// Depth-limited search algorithm
function depthLimitedSearch(node, goal, limit) {
  if (node === goal) {
    return true; // Goal found
  }

  if (limit === 0) {
    return false; // Reached depth limit
  }

  for (let child of node.getChildren()) {
    if (depthLimitedSearch(child, goal, limit - 1)) {
      return true; // Goal found in child node
    }
  }

  return false; // Goal not found
}
