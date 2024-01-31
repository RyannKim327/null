class Node {
  constructor(state, cost, heuristic, parent) {
    this.state = state;
    this.cost = cost;
    this.heuristic = heuristic;
    this.parent = parent;
  }
}
function aStarSearch(initialState, goalState) {
  const openSet = [new Node(initialState, 0, heuristic(initialState), null)];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // Find the node with the lowest f_score
    let currentIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].cost + openSet[i].heuristic <
          openSet[currentIndex].cost + openSet[currentIndex].heuristic) {
        currentIndex = i;
      }
    }

    const currentNode = openSet[currentIndex];
    openSet.splice(currentIndex, 1);

    // Check if the goal state is reached
    if (currentNode.state === goalState) {
      const path = [currentNode.state];
      let parent = currentNode.parent;
      while (parent) {
        path.unshift(parent.state);
        parent = parent.parent;
      }
      return path;
    }

    // Generate neighboring states
    const neighbors = generateNeighbors(currentNode.state);

    for (const neighbor of neighbors) {
      const neighborNode = new Node(
        neighbor.state,
        currentNode.cost + neighbor.cost,
        heuristic(neighbor.state),
        currentNode
      );

      if (closedSet.has(neighborNode.state)) {
        continue;
      }

      const index = openSet.findIndex((node) => node.state === neighborNode.state);

      if (index === -1) {
        openSet.push(neighborNode);
      } else if (neighborNode.cost < openSet[index].cost) {
        openSet[index] = neighborNode;
      }
    }

    closedSet.add(currentNode.state);
  }

  // No path found
  return null;
}
