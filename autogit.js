function breadthLimitedSearch(startNode, targetNode, limit) {
  if (startNode === targetNode) {
    return [startNode];
  }

  const queue = [startNode];
  const visited = new Set([startNode]);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const neighbors = currentNode.getNeighbors(); // Replace with logic to get neighbors of the current node

    if (currentNode.depth >= limit) {
      continue;
    }

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        neighbor.parent = currentNode;
        neighbor.depth = currentNode.depth + 1;

        if (neighbor === targetNode) {
          // Build and return the path
          const path = [targetNode];
          let node = currentNode;

          while (node !== startNode) {
            path.unshift(node);
            node = node.parent;
          }

          path.unshift(startNode);
          return path;
        }

        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return null; // Path not found
}
