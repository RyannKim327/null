function bidirectionalSearch(graph, start, goal) {
  // Initialize forward and backward queues
  const forwardQueue = [start];
  const backwardQueue = [goal];

  // Initialize forward and backward visited sets
  const forwardVisited = new Set([start]);
  const backwardVisited = new Set([goal]);

  // Initialize forward and backward parent dictionaries
  const forwardParent = {};
  const backwardParent = {};
  forwardParent[start] = null;
  backwardParent[goal] = null;

  // Bi-directional search loop
  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform forward search
    const currentNodeForward = forwardQueue.shift();
    const neighborsForward = graph[currentNodeForward];

    for (let neighbor of neighborsForward) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
        forwardParent[neighbor] = currentNodeForward;
      }

      if (backwardVisited.has(neighbor)) {
        // Path found
        return combinePaths(neighbor, forwardParent, backwardParent);
      }
    }

    // Perform backward search
    const currentNodeBackward = backwardQueue.shift();
    const neighborsBackward = graph[currentNodeBackward];

    for (let neighbor of neighborsBackward) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
        backwardParent[neighbor] = currentNodeBackward;
      }

      if (forwardVisited.has(neighbor)) {
        // Path found
        return combinePaths(neighbor, forwardParent, backwardParent);
      }
    }
  }

  // No path found
  return null;
}

function combinePaths(node, forwardParent, backwardParent) {
  const path = [node];
  let parent = forwardParent[node];

  while (parent !== null) {
    path.unshift(parent);
    parent = forwardParent[parent];
  }

  parent = backwardParent[node];

  while (parent !== null) {
    path.push(parent);
    parent = backwardParent[parent];
  }

  return path;
}

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B', 'F'],
  E: ['C', 'G'],
  F: ['D', 'H'],
  G: ['E', 'I'],
  H: ['F', 'J'],
  I: ['G', 'J'],
  J: ['H', 'I'],
};

const startNode = 'A';
const goalNode = 'J';

const path = bidirectionalSearch(graph, startNode, goalNode);
console.log(path);
