function biDirectionalSearch(startNode, endNode) {
  // Your code goes here
}
function biDirectionalSearch(startNode, endNode) {
  const startSet = new Set([startNode]);
  const endSet = new Set([endNode]);
  // Your code goes here
}
function biDirectionalSearch(startNode, endNode) {
  const startSet = new Set([startNode]);
  const endSet = new Set([endNode]);
  const startParents = { [startNode.id]: null };
  const endParents = { [endNode.id]: null };
  // Your code goes here
}
function biDirectionalSearch(startNode, endNode) {
  const startSet = new Set([startNode]);
  const endSet = new Set([endNode]);
  const startParents = { [startNode.id]: null };
  const endParents = { [endNode.id]: null };

  function getNeighbors(node) {
    // Your code to retrieve neighbors goes here
  }

  // Your code goes here
}
function biDirectionalSearch(startNode, endNode) {
  const startSet = new Set([startNode]);
  const endSet = new Set([endNode]);
  const startParents = { [startNode.id]: null };
  const endParents = { [endNode.id]: null };

  function getNeighbors(node) {
    // Your code to retrieve neighbors goes here
  }

  while (startSet.size && endSet.size) {
    // Consider nodes from the start end
    const nextStartNode = startSet.values().next().value;
    startSet.delete(nextStartNode);

    // Check if the node is present in the endSet
    if (endSet.has(nextStartNode)) {
      // Common node found, do something
      break;
    }

    // Find neighbors of the start node
    const startNeighbors = getNeighbors(nextStartNode);
    for (const neighbor of startNeighbors) {
      if (!startParents.hasOwnProperty(neighbor.id)) {
        startSet.add(neighbor);
        startParents[neighbor.id] = nextStartNode;
      }
    }

    // Consider nodes from the end end
    const nextEndNode = endSet.values().next().value;
    endSet.delete(nextEndNode);

    // Check if the node is present in the startSet
    if (startSet.has(nextEndNode)) {
      // Common node found, do something
      break;
    }

    // Find neighbors of the end node
    const endNeighbors = getNeighbors(nextEndNode);
    for (const neighbor of endNeighbors) {
      if (!endParents.hasOwnProperty(neighbor.id)) {
        endSet.add(neighbor);
        endParents[neighbor.id] = nextEndNode;
      }
    }
  }

  // Your code goes here
}
function biDirectionalSearch(startNode, endNode) {
  const startSet = new Set([startNode]);
  const endSet = new Set([endNode]);
  const startParents = { [startNode.id]: null };
  const endParents = { [endNode.id]: null };

  function getNeighbors(node) {
    // Your code to retrieve neighbors goes here
  }

  while (startSet.size && endSet.size) {
    // Consider nodes from the start end
    const nextStartNode = startSet.values().next().value;
    startSet.delete(nextStartNode);

    // Check if the node is present in the endSet
    if (endSet.has(nextStartNode)) {
      // Common node found, do something
      break;
    }

    // Find neighbors of the start node
    const startNeighbors = getNeighbors(nextStartNode);
    for (const neighbor of startNeighbors) {
      if (!startParents.hasOwnProperty(neighbor.id)) {
        startSet.add(neighbor);
        startParents[neighbor.id] = nextStartNode;
      }
    }

    // Consider nodes from the end end
    const nextEndNode = endSet.values().next().value;
    endSet.delete(nextEndNode);

    // Check if the node is present in the startSet
    if (startSet.has(nextEndNode)) {
      // Common node found, do something
      break;
    }

    // Find neighbors of the end node
    const endNeighbors = getNeighbors(nextEndNode);
    for (const neighbor of endNeighbors) {
      if (!endParents.hasOwnProperty(neighbor.id)) {
        endSet.add(neighbor);
        endParents[neighbor.id] = nextEndNode;
      }
    }
  }

  // Reconstruct the shortest path
  const shortestPath = [];
  let current = nextStartNode;
  while (current !== null) {
    shortestPath.unshift(current);
    current = startParents[current.id];
  }

  current = endParents[nextStartNode.id];
  while (current !== null) {
    shortestPath.push(current);
    current = endParents[current.id];
  }

  return shortestPath;
}
