function depthLimitedSearch(node, goal, depth) {
  if (depth === 0) {
    // Reached the maximum depth, end search
    return null;
  }

  if (node === goal) {
    // Goal node found
    return node;
  }

  // Recursively search child nodes
  for (let i = 0; i < node.children.length; i++) {
    const result = depthLimitedSearch(node.children[i], goal, depth - 1);
    if (result) {
      // Goal node found in child nodes
      return result;
    }
  }

  // Goal node not found
  return null;
}
