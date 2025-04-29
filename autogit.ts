interface Node {
  x: number;
  y: number;
  f: number; // total cost (g + h)
  g: number; // cost from start node
  h: number; // heuristic to goal
  parent?: Node; // for path reconstruction
}
function heuristic(a: Node, b: Node): number {
  // Manhattan distance
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function getNeighbors(node: Node, grid: number[][]): Node[] {
  const neighbors: Node[] = [];
  const directions = [
    {dx: 1, dy: 0},
    {dx: -1, dy: 0},
    {dx: 0, dy: 1},
    {dx: 0, dy: -1},
  ];

  for (const {dx, dy} of directions) {
    const nx = node.x + dx;
    const ny = node.y + dy;
    if (nx >= 0 && ny >= 0 && nx < grid.length && ny < grid[0].length) {
      if (grid[nx][ny] !== 1) { // Assuming '1' marks obstacle
        neighbors.push({x: nx, y: ny, g: 0, h: 0, f: 0});
      }
    }
  }

  return neighbors;
}
function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
  const openSet: Node[] = [];
  const closedSet: Set<string> = new Set();

  start.g = 0;
  start.h = heuristic(start, goal);
  start.f = start.h;

  openSet.push(start);

  while (openSet.length > 0) {
    // Get node with lowest f
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift()!;
    const currentKey = `${current.x},${current.y}`;

    if (current.x === goal.x && current.y === goal.y) {
      // Path found, backtrack
      const path: Node[] = [];
      let temp: Node | undefined = current;
      while (temp) {
        path.push(temp);
        temp = temp.parent;
      }
      return path.reverse();
    }

    closedSet.add(currentKey);

    for (const neighbor of getNeighbors(current, grid)) {
      const neighborKey = `${neighbor.x},${neighbor.y}`;
      if (closedSet.has(neighborKey)) continue;

      const tentativeG = current.g + 1; // assume cost between neighbors is 1

      const inOpenSet = openSet.find(n => n.x === neighbor.x && n.y === neighbor.y);
      if (!inOpenSet || tentativeG < inOpenSet.g!) {
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, goal);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;

        if (!inOpenSet) {
          openSet.push(neighbor);
        }
      }
    }
  }

  // No path found
  return null;
}
const grid = [
  [0,0,0,1,0],
  [1,1,0,1,0],
  [0,0,0,0,0],
  [0,1,1,1,0],
  [0,0,0,0,0]
];

const startNode: Node = {x:0, y:0, g: 0, h:0, f:0};
const goalNode: Node = {x:4, y:4, g:0, h: 0, f:0};

const path = aStar(startNode, goalNode, grid);
console.log(path);
