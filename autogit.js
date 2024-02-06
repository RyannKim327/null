function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    return true; // Goal found
  }

  if (depthLimit <= 0) {
    return false; // Reached depth limit
  }

  // Continue searching recursively in children nodes
  for (let child of node.children) {
    if (depthLimitedSearch(child, goal, depthLimit - 1)) {
      return true; // Goal found in child node
    }
  }

  return false; // Goal not found
}
