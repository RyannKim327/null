function depthLimitedSearch(node, goal, limit, depth) {
  if (node === goal) {
    return true;
  }

  if (depth > limit) {
    return false;
  }

  // Get child nodes of the current node
  const childNodes = getChildNodes(node);

  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i];
    const found = depthLimitedSearch(childNode, goal, limit, depth + 1);

    if (found) {
      return true;
    }
  }

  return false;
}
