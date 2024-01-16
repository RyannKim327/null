function depthLimitedSearch(node, target, depthLimit) {
  if (node.value === target) {
    return node;
  }

  if (depthLimit === 0) {
    return null;
  }

  for (const childNode of node.children) {
    const result = depthLimitedSearch(childNode, target, depthLimit - 1);
    if (result) {
      return result;
    }
  }

  return null;
}
