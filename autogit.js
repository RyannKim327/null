class Node {
  constructor(state, parent, g, h) {
    this.state = state;
    this.parent = parent;
    this.g = g;
    this.h = h;
    this.f = g + h;
  }
}
function aStarSearch(start, goal) {
  const openSet = [new Node(start, null, 0, heuristic(start, goal))];
  const closedSet = [];

  while (openSet.length > 0) {
    // Find the node with the lowest f value in the openSet
    const currentNode = openSet.reduce((min, node) =>
      node.f < min.f ? node : min
    );

    // Check if goal reached
    if (currentNode.state === goal) {
      return reconstructPath(currentNode);
    }

    // Move the current node from openSet to closedSet
    openSet.splice(openSet.indexOf(currentNode), 1);
    closedSet.push(currentNode);

    // Generate successors and evaluate them
    const successors = generateSuccessors(currentNode);
    for (const successor of successors) {
      if (closedSet.some(node => node.state === successor.state)) {
        continue;
      }

      const g = currentNode.g + 1; // Assumes a uniform cost of 1 between nodes
      const h = heuristic(successor.state, goal);
      const f = g + h;
      const existingNode = openSet.find(node => node.state === successor.state);

      if (existingNode) {
        if (g < existingNode.g) {
          existingNode.g = g;
          existingNode.h = h;
          existingNode.f = f;
          existingNode.parent = currentNode;
        }
      } else {
        openSet.push(new Node(successor.state, currentNode, g, h));
      }
    }
  }

  // No path found
  return null;
}
