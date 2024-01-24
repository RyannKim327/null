class Node {
  constructor(state, parent, g, h) {
    this.state = state;
    this.parent = parent;
    this.g = g;
    this.h = h;
    this.f = g + h;
  }
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node) {
    this.queue.push(node);
    this.queue.sort((a, b) => a.f - b.f);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
function aStarSearch(startState, goalState, heuristic) {
  const openList = new PriorityQueue();
  const closedList = new Set();

  const startNode = new Node(startState, null, 0, heuristic(startState, goalState));
  openList.enqueue(startNode);

  while (!openList.isEmpty()) {
    const currentNode = openList.dequeue();

    if (currentNode.state === goalState) {
      // Goal state reached, return the path
      return getPath(currentNode);
    }

    closedList.add(currentNode.state);

    // Generate neighboring nodes
    const neighbors = generateNeighbors(currentNode.state);

    for (const neighborState of neighbors) {
      if (closedList.has(neighborState)) {
        continue; // Skip neighbors that have already been evaluated
      }

      const g = currentNode.g + 1; // Assuming a cost of 1 to move between states
      const h = heuristic(neighborState, goalState);
      const neighborNode = new Node(neighborState, currentNode, g, h);

      openList.enqueue(neighborNode);
    }
  }

  // No path found
  return null;
}
function heuristic(state, goalState) {
  // Calculate the Manhattan distance between the state and goalState
  const [x1, y1] = state;
  const [x2, y2] = goalState;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
// Your A* search implementation
