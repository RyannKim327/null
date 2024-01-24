function bidirectionalSearch(graph, start, target) {
  let forwardQueue = [start];
  let forwardVisited = new Set();
  forwardVisited.add(start);

  let backwardQueue = [target];
  let backwardVisited = new Set();
  backwardVisited.add(target);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Forward direction
    let currentForwardNode = forwardQueue.shift();

    if (backwardVisited.has(currentForwardNode)) {
      return constructPath(currentForwardNode, start, target);
    }

    for (let neighbor of graph[currentForwardNode]) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
      }
    }

    // Backward direction
    let currentBackwardNode = backwardQueue.shift();

    if (forwardVisited.has(currentBackwardNode)) {
      return constructPath(currentBackwardNode, start, target).reverse();
    }

    for (let neighbor of graph[currentBackwardNode]) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
      }
    }
  }

  return "No path found";
}

function constructPath(commonNode, start, target) {
  let path = [commonNode];
  let currentNode = commonNode;

  while (currentNode !== start) {
    for (let neighbor of graph[currentNode]) {
      if (forwardVisited.has(neighbor) && graph[currentNode].includes(neighbor)) {
        path.unshift(neighbor);
        currentNode = neighbor;
        break;
      }
    }
  }

  currentNode = commonNode;

  while (currentNode !== target) {
    for (let neighbor of graph[currentNode]) {
      if (backwardVisited.has(neighbor) && graph[currentNode].includes(neighbor)) {
        path.push(neighbor);
        currentNode = neighbor;
        break;
      }
    }
  }

  return path;
}

// Example usage
let graph = {
  A: ["B", "D"],
  B: ["A", "C"],
  C: ["B", "E"],
  D: ["A", "E"],
  E: ["C", "D"],
};

console.log(bidirectionalSearch(graph, "A", "E"));
