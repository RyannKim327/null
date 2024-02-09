function breadthLimitedSearch(startNode, targetNode, limit) {
  const queue = [startNode];
  const visited = new Set();

  while (queue.length > 0 && limit >= 0) {
    const currentNode = queue.shift();

    if (currentNode === targetNode) {
      return currentNode;
    }

    if (!visited.has(currentNode)) {
      visited.add(currentNode);

      // Add child nodes to the queue
      currentNode.children.forEach((childNode) => {
        queue.push(childNode);
      });
    }

    limit--;
  }

  return null;
}
