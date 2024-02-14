function bidirectionalSearch(startNode, goalNode) {
  const startVisited = new Set();
  const goalVisited = new Set();
  const startQueue = [startNode];
  const goalQueue = [goalNode];
  const predecessor = new Map();

  while (startQueue.length && goalQueue.length) {
    const start = startQueue.shift();
    const goal = goalQueue.shift();

    if (startVisited.has(goal)) {
      return getPath(predecessor, start, goal);
    }

    if (goalVisited.has(start)) {
      return getPath(predecessor, start, goal);
    }

    for (const neighbor of getNeighbors(start)) {
      if (!startVisited.has(neighbor)) {
        startVisited.add(neighbor);
        startQueue.push(neighbor);
        predecessor.set(neighbor, start);
      }
    }

    for (const neighbor of getNeighbors(goal)) {
      if (!goalVisited.has(neighbor)) {
        goalVisited.add(neighbor);
        goalQueue.push(neighbor);
        predecessor.set(neighbor, goal);
      }
    }
  }

  return null;
}

function getPath(predecessor, start, goal) {
  const path = [start];
  let current = goal;

  while (current !== start) {
    path.push(current);
    current = predecessor.get(current);
  }

  path.push(start);
  return path.reverse();
}

// Helper function to get neighbors of a node (replace it with your own adjacency list implementation)
function getNeighbors(node) {
  // Return neighbors of the node
}

// Example usage:
const startNode = // your start node;
const goalNode = // your goal node;
const path = bidirectionalSearch(startNode, goalNode);
console.log(path);
