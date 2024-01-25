class Node {
  constructor(state, cost, parent, heuristic) {
    this.state = state;
    this.cost = cost;
    this.parent = parent;
    this.heuristic = heuristic;
    this.totalCost = cost + heuristic;
  }
}
function aStarSearch(startState, goalState, heuristicFunction) {
  const open = [];
  // ...
}
const startNode = new Node(startState, 0, null, heuristicFunction(startState, goalState));
open.push(startNode);
while (open.length > 0) {
  const currentNode = open.shift();
  // ...
}
if (currentNode.state === goalState) {
  return constructPath(currentNode);
}
const successors = generateSuccessors(currentNode.state);
successors.forEach((successor) => {
  const cost = currentNode.cost + calculateCost(currentNode.state, successor);
  const heuristic = heuristicFunction(successor, goalState);
  const newNode = new Node(successor, cost, currentNode, heuristic);
  open.push(newNode);
});
open.sort((a, b) => a.totalCost - b.totalCost);
class Node {
  constructor(state, cost, parent, heuristic) {
    this.state = state;
    this.cost = cost;
    this.parent = parent;
    this.heuristic = heuristic;
    this.totalCost = cost + heuristic;
  }
}

function aStarSearch(startState, goalState, heuristicFunction) {
  const open = [];

  const startNode = new Node(startState, 0, null, heuristicFunction(startState, goalState));
  open.push(startNode);

  while (open.length > 0) {
    const currentNode = open.shift();

    if (currentNode.state === goalState) {
      return constructPath(currentNode);
    }

    const successors = generateSuccessors(currentNode.state);
    successors.forEach((successor) => {
      const cost = currentNode.cost + calculateCost(currentNode.state, successor);
      const heuristic = heuristicFunction(successor, goalState);
      const newNode = new Node(successor, cost, currentNode, heuristic);
      open.push(newNode);
    });

    open.sort((a, b) => a.totalCost - b.totalCost);
  }

  // If goal not found
  return null;
}
