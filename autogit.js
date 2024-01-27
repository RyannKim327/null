class Node {
  constructor(state, parent, action, cost, heuristic) {
    this.state = state;
    this.parent = parent;
    this.action = action;
    this.cost = cost;
    this.heuristic = heuristic;
    this.totalCost = cost + heuristic;
  }
}

function AStarSearch(startState, goalState, heuristicFn) {
  const openQueue = new PriorityQueue();
  const closedSet = new Set();

  const startNode = new Node(startState, null, null, 0, heuristicFn(startState));
  openQueue.enqueue(startNode);

  while (!openQueue.isEmpty()) {
    const currentNode = openQueue.dequeue();

    if (currentNode.state === goalState) {
      return getPath(currentNode);
    }

    closedSet.add(currentNode.state);

    const successors = generateSuccessors(currentNode.state);
    for (const successor of successors) {
      if (closedSet.has(successor.state)) {
        continue;
      }

      const newCost = currentNode.cost + successor.cost;
      const existingNode = openQueue.find(node => node.state === successor.state);
      if (!existingNode || newCost < existingNode.cost) {
        const newNode = new Node(
          successor.state,
          currentNode,
          successor.action,
          newCost,
          heuristicFn(successor.state)
        );

        if (!existingNode) {
          openQueue.enqueue(newNode);
        } else {
          openQueue.update(existingNode, newNode);
        }
      }
    }
  }

  return null;
}

function getPath(node) {
  const path = [];
  while (node) {
    path.unshift(node.action);
    node = node.parent;
  }
  return path;
}

// Sample usage:
const startState = // initial state;
const goalState = // goal state;
const heuristicFn = // heuristic function;
const result = AStarSearch(startState, goalState, heuristicFn);
console.log(result);
