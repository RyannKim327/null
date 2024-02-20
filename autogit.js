class Node {
  constructor(state, parent, g, h) {
    this.state = state;
    this.parent = parent;
    this.g = g;
    this.h = h;
  }

  get f() {
    return this.g + this.h;
  }
}

function astar(start, goal, h) {
  let openSet = [new Node(start, null, 0, h(start))];
  let closedSet = [];

  while (openSet.length > 0) {
    let currentNode = openSet.reduce((a, b) => a.f < b.f ? a : b);

    if (currentNode.state === goal) {
      let path = [];
      while (currentNode !== null) {
        path.push(currentNode.state);
        currentNode = currentNode.parent;
      }
      return path.reverse();
    }

    openSet = openSet.filter(node => node !== currentNode);
    closedSet.push(currentNode);

    const neighbors = getNeighbors(currentNode.state);
    neighbors.forEach(neighbor => {
      if (closedSet.find(node => node.state === neighbor)) {
        return;
      }

      const g = currentNode.g + 1;
      const h = heuristic(neighbor, goal);
      const newNode = new Node(neighbor, currentNode, g, h);

      const openNode = openSet.find(node => node.state === neighbor);
      if (!openNode || g < openNode.g) {
        openSet = openSet.filter(node => node.state !== neighbor);
        openSet.push(newNode);
      }
    });
  }

  return null; // No path found
}

function heuristic(a, b) {
  // Manhattan distance heuristic
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function getNeighbors(state) {
  // Define how to get neighbors of a state
  return [
    { x: state.x, y: state.y + 1 },
    { x: state.x, y: state.y - 1 },
    { x: state.x + 1, y: state.y },
    { x: state.x - 1, y: state.y }
  ];
}

// Example usage
const start = { x: 0, y: 0 };
const goal = { x: 4, y: 4 };
const path = astar(start, goal, heuristic);

console.log(path);
