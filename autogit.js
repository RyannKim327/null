function biDirectionalSearch(graph, startNode, goalNode) {
  // Initialize data structures
  const startOpen = [startNode];
  const goalOpen = [goalNode];
  const startClosed = new Set();
  const goalClosed = new Set();
  const startParent = new Map();
  const goalParent = new Map();

  // Perform the search
  while (startOpen.length > 0 && goalOpen.length > 0) {
    // Expand node from start side
    const currentStart = startOpen.shift();
    startClosed.add(currentStart);

    if (goalClosed.has(currentStart)) {
      // Backtrack and return path
      return getPath(currentStart, startParent, goalParent);
    }

    const neighbors = graph[currentStart];
    for (const neighbor of neighbors) {
      if (!startClosed.has(neighbor)) {
        startOpen.push(neighbor);
        startParent.set(neighbor, currentStart);
      }
    }

    // Expand node from goal side
    const currentGoal = goalOpen.shift();
    goalClosed.add(currentGoal);

    if (startClosed.has(currentGoal)) {
      // Backtrack and return path
      return getPath(currentGoal, startParent, goalParent);
    }

    const goalNeighbors = graph[currentGoal];
    for (const neighbor of goalNeighbors) {
      if (!goalClosed.has(neighbor)) {
        goalOpen.push(neighbor);
        goalParent.set(neighbor, currentGoal);
      }
    }
  }

  // No path found
  return null;
}

function getPath(intersectNode, startParent, goalParent) {
  const path = [];
  let currentNode = intersectNode;

  // Backtrack from intersect node to start node
  while (currentNode) {
    path.unshift(currentNode);
    currentNode = startParent.get(currentNode);
  }

  // Backtrack from intersect node to goal node
  currentNode = goalParent.get(intersectNode);
  while (currentNode) {
    path.push(currentNode);
    currentNode = goalParent.get(currentNode);
  }

  return path;
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["C", "G"],
  F: ["D", "H"],
  G: ["E", "I"],
  H: ["F", "J"],
  I: ["G", "K"],
  J: ["H", "K"],
  K: ["I", "J"],
};

const startNode = "A";
const goalNode = "K";
const path = biDirectionalSearch(graph, startNode, goalNode);

console.log(path);
