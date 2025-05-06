interface Node {
  x: number;
  y: number;
  g: number; // Cost from start
  h: number; // Heuristic to goal
  f: number; // Total cost
  parent: Node | null;
}

function heuristic(a: Node, b: Node): number {
  // Using Manhattan distance for grid
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function neighbors(node: Node, grid: number[][]): Node[] {
  const results: Node[] = [];
  const dirs = [
    [0, -1], // up
    [1, 0],  // right
    [0, 1],  // down
    [-1, 0], // left
  ];

  for (const [dx, dy] of dirs) {
    const x = node.x + dx;
    const y = node.y + dy;
    if (
      x >= 0 &&
      x < grid[0].length &&
      y >= 0 &&
      y < grid.length &&
      grid[y][x] === 0 // assuming 0 is walkable and 1 is obstacle
    ) {
      results.push({
        x,
        y,
        g: Infinity,
        h: 0,
        f: Infinity,
        parent: null,
      });
    }
  }
  return results;
}

function aStar(grid: number[][], start: Node, goal: Node): Node[] | null {
  const openList: Node[] = [];
  const closedList: Set<string> = new Set();

  start.g = 0;
  start.h = heuristic(start, goal);
  start.f = start.g + start.h;
  openList.push(start);

  function nodeKey(n: Node) {
    return `${n.x},${n.y}`;
  }

  while (openList.length > 0) {
    // Sort open list by f cost, lowest first
    openList.sort((a, b) => a.f - b.f);

    const current = openList.shift()!;
    if (current.x === goal.x && current.y === goal.y) {
      // Reconstruct path
      const path: Node[] = [];
      let temp: Node | null = current;
      while (temp) {
        path.push(temp);
        temp = temp.parent;
      }
      return path.reverse();
    }

    closedList.add(nodeKey(current));

    for (const neighbor of neighbors(current, grid)) {
      if (closedList.has(nodeKey(neighbor))) continue;

      const tentativeG = current.g + 1; // assuming cost between adjacent nodes is 1

      const openNode = openList.find(n => n.x === neighbor.x && n.y === neighbor.y);
      if (!openNode || tentativeG < neighbor.g) {
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, goal);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;

        if (!openNode) openList.push(neighbor);
      }
    }
  }

  // No path found
  return null;
}

// Example usage:

const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

const startNode: Node = { x: 0, y: 0, g: 0, h: 0, f: 0, parent: null };
const goalNode: Node = { x: 3, y: 4, g: 0, h: 0, f: 0, parent: null };

const path = aStar(grid, startNode, goalNode);

if (path) {
  console.log("Path found:");
  path.forEach(p => console.log(`(${p.x}, ${p.y})`));
} else {
  console.log("No path found");
}
