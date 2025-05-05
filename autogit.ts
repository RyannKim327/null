type Point = { x: number; y: number };

class Node {
  position: Point;
  g: number; // Cost from start
  h: number; // Heuristic cost to goal
  f: number; // g + h
  parent: Node | null;

  constructor(position: Point, g = 0, h = 0, parent: Node | null = null) {
    this.position = position;
    this.g = g;
    this.h = h;
    this.f = g + h;
    this.parent = parent;
  }
}

function heuristic(a: Point, b: Point): number {
  // Manhattan distance heuristic
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function neighbors(point: Point, grid: number[][]): Point[] {
  const { x, y } = point;
  const results: Point[] = [];
  const directions = [
    { x: 0, y: -1 }, // up
    { x: 1, y: 0 },  // right
    { x: 0, y: 1 },  // down
    { x: -1, y: 0 }, // left
  ];

  for (const dir of directions) {
    const nx = x + dir.x;
    const ny = y + dir.y;

    if (
      ny >= 0 &&
      ny < grid.length &&
      nx >= 0 &&
      nx < grid[0].length &&
      grid[ny][nx] === 0 // 0 means walkable here, 1 means wall/block
    ) {
      results.push({ x: nx, y: ny });
    }
  }
  return results;
}

function aStar(
  grid: number[][],
  start: Point,
  goal: Point
): Point[] | null {
  const openList: Node[] = [];
  const closedList: boolean[][] = grid.map(row => row.map(() => false));

  const startNode = new Node(start, 0, heuristic(start, goal));
  openList.push(startNode);

  while (openList.length > 0) {
    // Sort open list by f ascending
    openList.sort((a, b) => a.f - b.f);
    const currentNode = openList.shift()!;
    const { x, y } = currentNode.position;

    if (x === goal.x && y === goal.y) {
      // Found path, reconstruct
      const path: Point[] = [];
      let curr: Node | null = currentNode;
      while (curr) {
        path.push(curr.position);
        curr = curr.parent;
      }
      return path.reverse();
    }

    closedList[y][x] = true;

    for (const neighborPos of neighbors(currentNode.position, grid)) {
      if (closedList[neighborPos.y][neighborPos.x]) continue;

      const gScore = currentNode.g + 1; // Assume cost = 1 between adjacent nodes
      const hScore = heuristic(neighborPos, goal);
      const existingNodeIndex = openList.findIndex(
        node =>
          node.position.x === neighborPos.x && node.position.y === neighborPos.y
      );

      if (existingNodeIndex === -1) {
        // Not in open list
        openList.push(new Node(neighborPos, gScore, hScore, currentNode));
      } else {
        const existingNode = openList[existingNodeIndex];
        if (gScore < existingNode.g) {
          // Better path found
          existingNode.g = gScore;
          existingNode.f = gScore + existingNode.h;
          existingNode.parent = currentNode;
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
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];

const start: Point = { x: 0, y: 0 };
const goal: Point = { x: 4, y: 4 };

const path = aStar(grid, start, goal);
console.log(path);
