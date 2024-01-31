function depthLimitedSearch(node, goal, depthLimit) {
  if (node.value === goal) {
    return node;
  }

  if (depthLimit === 0) {
    return null;
  }

  for (let i = 0; i < node.children.length; i++) {
    const childNode = node.children[i];
    const result = depthLimitedSearch(childNode, goal, depthLimit - 1);
    if (result !== null) {
      return result;
    }
  }

  return null;
}
