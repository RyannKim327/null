class Node {
  x: number;
  y: number;
  gCost: number; // Cost from start to this node
  hCost: number; // Heuristic cost to goal
  fCost: number; // Total cost: gCost + hCost
  parent: Node | null;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.gCost = Infinity;
    this.hCost = 0;
    this.fCost = 0;
    this.parent = null;
  }

  calculateFCost(): void {
    this.fCost = this.gCost + this.hCost;
  }
}

function heuristic(a: Node, b: Node): number {
  // Manhattan distance as the heuristic
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStar(start: Node, goal: Node, grid: Node[][]): Node[] | null {
  const openSet: Node[] = [start];
  const closedSet: Set<Node> = new Set();

  start.gCost = 0;
  start.hCost = heuristic(start, goal);
  start.calculateFCost();

  while (openSet.length > 0) {
    // Sort openSet by fCost (ascending order)
    openSet.sort((a, b) => a.fCost - b.fCost);

    // Get the node with the lowest fCost
    const current = openSet.shift()!;
    if (current === goal) {
      return reconstructPath(current);
    }

    closedSet.add(current);

    // Get neighbors (assuming a 2D grid with up, down, left, right movement)
    const neighbors = getNeighbors(current, grid);
    for (const neighbor of neighbors) {
      if (closedSet.has(neighbor)) continue;

      const tentativeGCost = current.gCost + 1; // Assuming uniform cost of 1 for simplicity

      if (tentativeGCost < neighbor.gCost) {
        neighbor.parent = current;
        neighbor.gCost = tentativeGCost;
        neighbor.hCost = heuristic(neighbor, goal);
        neighbor.calculateFCost();

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  // No path found
  return null;
}

function getNeighbors(node: Node, grid: Node[][]): Node[] {
  const directions = [
    { dx: 0, dy: -1 }, // Up
    { dx: 1, dy: 0 },  // Right
    { dx: 0, dy: 1 },  // Down
    { dx: -1, dy: 0 }, // Left
  ];

  const neighbors: Node[] = [];
  for (const dir of directions) {
    const newX = node.x + dir.dx;
    const newY = node.y + dir.dy;

    if (
      newX >= 0 &&
      newX < grid.length &&
      newY >= 0 &&
      newY < grid[0].length &&
      !grid[newX][newY].parent // Assuming blocked nodes have `parent` set
    ) {
      neighbors.push(grid[newX][newY]);
    }
  }

  return neighbors;
}

function reconstructPath(node: Node): Node[] {
  const path: Node[] = [];
  let current: Node | null = node;

  while (current !== null) {
    path.push(current);
    current = current.parent;
  }

  return path.reverse();
}

// Example Usage
const grid: Node[][] = Array.from({ length: 5 }, (_, x) =>
  Array.from({ length: 5 }, (_, y) => new Node(x, y))
);

const start = grid[0][0];
const goal = grid[4][4];

const path = aStar(start, goal, grid);

if (path) {
  console.log("Path found:", path.map((node) => `(${node.x}, ${node.y})`));
} else {
  console.log("No path found.");
}
