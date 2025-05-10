class Node {
  x: number;
  y: number;
  g: number; // Cost from start to current node
  h: number; // Heuristic cost from current node to goal
  f: number; // g + h
  parent: Node | null;

  constructor(x: number, y: number, g = 0, h = 0, parent: Node | null = null) {
    this.x = x;
    this.y = y;
    this.g = g;
    this.h = h;
    this.f = g + h;
    this.parent = parent;
  }
}
function heuristic(a: Node, b: Node): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
function getNeighbors(node: Node, grid: number[][]): Node[] {
  const neighbors: Node[] = [];
  const directions = [
    [0, -1], // up
    [0, 1],  // down
    [-1, 0], // left
    [1, 0]   // right
  ];

  for (const [dx, dy] of directions) {
    const x = node.x + dx;
    const y = node.y + dy;

    // Check within grid bounds and if the node is walkable (assuming 0 is walkable and 1 is obstacle)
    if (x >= 0 && x < grid[0].length && y >= 0 && y < grid.length && grid[y][x] === 0) {
      neighbors.push(new Node(x, y));
    }
  }
  
  return neighbors;
}
function aStar(grid: number[][], startPos: [number, number], endPos: [number, number]): Node[] | null {
  const openSet: Node[] = [];
  const closedSet: boolean[][] = grid.map(row => row.map(() => false));

  const startNode = new Node(startPos[0], startPos[1]);
  const endNode = new Node(endPos[0], endPos[1]);
  
  startNode.h = heuristic(startNode, endNode);
  startNode.f = startNode.h;

  openSet.push(startNode);

  while (openSet.length > 0) {
    // Sort openSet by f-value
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift()!;

    // Check if goal reached
    if (current.x === endNode.x && current.y === endNode.y) {
      // Reconstruct path
      const path: Node[] = [];
      let temp: Node | null = current;
      while (temp) {
        path.push(temp);
        temp = temp.parent;
      }
      return path.reverse();
    }

    closedSet[current.y][current.x] = true;

    const neighbors = getNeighbors(current, grid);
    for (const neighbor of neighbors) {
      if (closedSet[neighbor.y][neighbor.x]) {
        continue;
      }

      const tentativeG = current.g + 1; // Distance between adjacent nodes is 1

      // Check if neighbor is in openSet
      const openNode = openSet.find(node => node.x === neighbor.x && node.y === neighbor.y);

      if (!openNode || tentativeG < openNode.g) {
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, endNode);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;

        if (!openNode) {
          openSet.push(neighbor);
        }
      }
    }
  }

  // No path found
  return null;
}
const grid = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
];

const start: [number, number] = [0, 0];
const end: [number, number] = [4, 4];

const path = aStar(grid, start, end);

if (path) {
  console.log("Path found:");
  path.forEach(node => console.log(`(${node.x}, ${node.y})`));
} else {
  console.log("No path found");
}
