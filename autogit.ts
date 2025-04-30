type Node = {
  x: number;
  y: number;
  f: number; // f = g + h
  g: number; // Cost from start to current
  h: number; // Heuristic cost estimate to goal
  parent: Node | null;
};

function heuristic(a: Node, b: Node): number {
  // Manhattan distance for grids
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function nodesEqual(a: Node, b: Node): boolean {
  return a.x === b.x && a.y === b.y;
}

function getNeighbors(node: Node, grid: number[][]): Node[] {
  const neighbors: Node[] = [];
  const directions = [
    [0, -1], // up
    [1, 0],  // right
    [0, 1],  // down
    [-1, 0], // left
  ];

  for (const [dx, dy] of directions) {
    const x = node.x + dx;
    const y = node.y + dy;
    // Check boundaries and obstacles (0 = walkable, 1 = wall)
    if (x >= 0 && y >= 0 && y < grid.length && x < grid[0].length && grid[y][x] === 0) {
      neighbors.push({ x, y, f: 0, g: 0, h: 0, parent: null });
    }
  }

  return neighbors;
}

function reconstructPath(current: Node): { x: number; y: number }[] {
  const path: { x: number; y: number }[] = [];
  let temp: Node | null = current;
  while (temp) {
    path.push({ x: temp.x, y: temp.y });
    temp = temp.parent;
  }
  return path.reverse(); // from start to goal
}

function aStarSearch(grid: number[][], start: { x: number; y: number }, end: { x: number; y: number }): { x: number; y: number }[] | null {
  const startNode: Node = { x: start.x, y: start.y, f: 0, g: 0, h: 0, parent: null };
  const endNode: Node = { x: end.x, y: end.y, f: 0, g: 0, h: 0, parent: null };

  const openList: Node[] = [];
  const closedList: Node[] = [];

  openList.push(startNode);

  while (openList.length > 0) {
    // Sort openList to get node with smallest f at the front
    openList.sort((a, b) => a.f - b.f);
    const currentNode = openList.shift()!; // pop the node with lowest f

    closedList.push(currentNode);

    // Goal check
    if (nodesEqual(currentNode, endNode)) {
      return reconstructPath(currentNode);
    }

    const neighbors = getNeighbors(currentNode, grid);
    for (const neighbor of neighbors) {
      if (closedList.some(n => nodesEqual(n, neighbor))) {
        continue; // Already evaluated
      }

      const tentativeG = currentNode.g + 1; // assume cost between adjacent nodes = 1

      // Check if neighbor is in openList
      const openNode = openList.find(n => nodesEqual(n, neighbor));
      if (!openNode || tentativeG < openNode.g) {
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, endNode);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = currentNode;

        if (!openNode) {
          openList.push(neighbor);
        }
      }
    }
  }

  // No path found
  return null;
}
const grid = [
  [0, 0, 0, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

const start = { x: 0, y: 0 };
const end = { x: 4, y: 4 };

const path = aStarSearch(grid, start, end);
console.log(path);
