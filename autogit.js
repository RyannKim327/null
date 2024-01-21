function biDirectionalSearch(startNode, endNode) {
  const startQueue = [startNode];
  const endQueue = [endNode];

  const startVisited = { [startNode]: null };
  const endVisited = { [endNode]: null };

  function exploreStart() {
    const currentNode = startQueue.shift();
    const neighbors = getNeighbors(currentNode); // Replace this with your own function to get neighbors of a node

    for (const neighbor of neighbors) {
      if (endVisited.hasOwnProperty(neighbor)) {
        return getPath(currentNode, neighbor); // Replace this with your own function to get the path
      }

      if (!startVisited.hasOwnProperty(neighbor)) {
        startQueue.push(neighbor);
        startVisited[neighbor] = currentNode;
      }
    }
  }

  function exploreEnd() {
    const currentNode = endQueue.shift();
    const neighbors = getNeighbors(currentNode); // Replace this with your own function to get neighbors of a node

    for (const neighbor of neighbors) {
      if (startVisited.hasOwnProperty(neighbor)) {
        return getPath(startVisited[neighbor], currentNode); // Replace this with your own function to get the path
      }

      if (!endVisited.hasOwnProperty(neighbor)) {
        endQueue.push(neighbor);
        endVisited[neighbor] = currentNode;
      }
    }
  }

  while (startQueue.length > 0 && endQueue.length > 0) {
    const startPath = exploreStart();
    if (startPath) {
      return startPath;
    }

    const endPath = exploreEnd();
    if (endPath) {
      return endPath;
    }
  }

  return null; // No path found
}

// Example usage:
const startNode = "A";
const endNode = "F";
const path = biDirectionalSearch(startNode, endNode);
console.log(path);
