class Node {
  constructor(state, parent, cost, heuristic) {
    this.state = state;
    this.parent = parent;
    this.cost = cost;
    this.heuristic = heuristic;
  }

  get totalCost() {
    return this.cost + this.heuristic;
  }
}

function beamSearch(initialState, beamWidth, goalTest, heuristicFunction, successorsFunction) {
  let frontier = [new Node(initialState, null, 0, heuristicFunction(initialState))];
  let nextFrontier = [];

  while (frontier.length > 0) {
    for (let node of frontier) {
      if (goalTest(node.state)) {
        // We've found a goal state, so we can reconstruct the path from the initial state
        let path = [];
        let currentNode = node;
        while (currentNode !== null) {
          path.unshift(currentNode.state);
          currentNode = currentNode.parent;
        }
        return path;
      }

      let successors = successorsFunction(node.state);
      for (let successor of successors) {
        let newNode = new Node(successor.state, node, node.cost + successor.cost, heuristicFunction(successor.state));
        nextFrontier.push(newNode);
      }
    }

    nextFrontier.sort((a, b) => a.totalCost - b.totalCost);
    frontier = nextFrontier.slice(0, beamWidth);
    nextFrontier = [];
  }

  return null; // No path found
}
