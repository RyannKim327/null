class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.g = Infinity; // cost from start node
    this.h = 0; // heuristic value
    this.f = 0; // total cost f(x) = g(x) + h(x)
    this.parent = null; // previous node in the optimal path
  }
}

function aStarSearch(grid, start, goal) {
  const openQueue = [start]; // priority queue
  const closedNodes = [];
  const numRows = grid.length;
  const numCols = grid[0].length;
  const dx = [-1, 0, 1, 0]; // neighboring cell positions
  const dy = [0, 1, 0, -1];

  start.g = 0;
  start.f = start.h = heuristic(start, goal);

  while (openQueue.length > 0) {
    openQueue.sort((a, b) => a.f - b.f); // sort by f value
    const current = openQueue.shift();

    if (current === goal) {
      return getPath(current);
    }

    closedNodes.push(current);

    for (let i = 0; i < 4; i++) {
      const newX = current.x + dx[i];
      const newY = current.y + dy[i];

      if (isValid(newX, newY, numRows, numCols) && grid[newX][newY] !== 0) {
        const neighbor = new Node(newX, newY);
        const tentativeG = current.g + 1;

        if (closedNodes.find(node => node.x === neighbor.x && node.y === neighbor.y)) {
          continue;
        }

        if (!openQueue.find(node => node.x === neighbor.x && node.y === neighbor.y)) {
          openQueue.push(neighbor);
        } else if (tentativeG >= neighbor.g) {
          continue;
        }

        neighbor.parent = current;
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, goal);
        neighbor.f = neighbor.g + neighbor.h;
      }
    }
  }

  return null; // no solution found
}

function isValid(x, y, numRows, numCols) {
  return x >= 0 && y >= 0 && x < numRows && y < numCols;
}

function heuristic(node, goal) {
  // Manhattan distance heuristic
  return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}

function getPath(node) {
  const path = [];
  while (node) {
    path.push({ x: node.x, y: node.y });
    node = node.parent;
  }
  return path.reverse();
}

// Example usage:
const grid = [
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
];

const start = new Node(0, 0);
const goal = new Node(4, 4);

const path = aStarSearch(grid, start, goal);
console.log(path);
