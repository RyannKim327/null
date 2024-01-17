function bidirectionalSearch(graph, start, goal) {
  // Create data structures for forward and backward search
  const forwardQueue = [start];
  const backwardQueue = [goal];
  const forwardVisited = new Set();
  const backwardVisited = new Set();
  const forwardPrev = {};
  const backwardPrev = {};

  forwardVisited.add(start);
  backwardVisited.add(goal);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform forward search
    const forwardNode = forwardQueue.shift();

    // Generate neighbors of forward node
    const forwardNeighbors = graph[forwardNode];

    for (const neighbor of forwardNeighbors) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
        forwardPrev[neighbor] = forwardNode;

        if (backwardVisited.has(neighbor)) {
          return getPath(forwardPrev, backwardPrev, neighbor);
        }
      }
    }

    // Perform backward search
    const backwardNode = backwardQueue.shift();

    // Generate neighbors of backward node
    const backwardNeighbors = graph[backwardNode];

    for (const neighbor of backwardNeighbors) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
        backwardPrev[neighbor] = backwardNode;

        if (forwardVisited.has(neighbor)) {
          return getPath(forwardPrev, backwardPrev, neighbor);
        }
      }
    }
  }

  return null; // No path found
}

function getPath(forwardPrev, backwardPrev, intersectionNode) {
  const path = [];
  let node = intersectionNode;

  // Backtrack from intersection node to starting node of forward search
  while (node !== undefined) {
    path.unshift(node);
    node = forwardPrev[node];
  }

  node = backwardPrev[intersectionNode];

  // Backtrack from intersection node to ending node of backward search
  while (node !== undefined) {
    path.push(node);
    node = backwardPrev[node];
  }

  return path;
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

const startNode = 'A';
const goalNode = 'F';

const path = bidirectionalSearch(graph, startNode, goalNode);

console.log(path); // Output: ['A', 'C', 'F']
