function depthLimitedSearch(node, goal, limit) {
  if (node.value === goal) {
    return node;
  }

  if (limit === 0) {
    return null;
  }

  for (let child of node.children) {
    const result = depthLimitedSearch(child, goal, limit - 1);
    if (result !== null) {
      return result;
    }
  }

  return null;
}
