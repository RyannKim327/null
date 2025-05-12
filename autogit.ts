type Point = { x: number; y: number };

// Manhattan distance (heuristic) for grid
function heuristic(a: Point, b: Point): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// Check neighbors (up, down, left, right)
function getNeighbors(node: Point, grid: number[][]): Point[] {
  const neighbors: Point[] = [];
  const directions = [
    { x: 0, y: -1 }, // Up
    { x: 1, y: 0 },  // Right
    { x: 0, y: 1 },  // Down
    { x: -1, y: 0 }, // Left
  ];

  for (const dir of directions) {
    const nx = node.x + dir.x;
    const ny = node.y + dir.y;
    if (
      nx >= 0 && ny >= 0 &&
      ny < grid.length && nx < grid[0].length &&
      grid[ny][nx] === 0 // assuming 0 = walkable, 1 = wall
    ) {
      neighbors.push({ x: nx, y: ny });
    }
  }

  return neighbors;
}
function aStar(
  grid: number[][],
  start: Point,
  goal: Point
): Point[] | null {
  const openSet: Set<string> = new Set([`${start.x},${start.y}`]);
  
  // Maps coordinates 'x,y' -> Point
  const cameFrom = new Map<string, Point>();

  // gScore and fScore maps
  const gScore = new Map<string, number>();
  const fScore = new Map<string, number>();

  const startKey = `${start.x},${start.y}`;
  gScore.set(startKey, 0);
  fScore.set(startKey, heuristic(start, goal));

  while (openSet.size > 0) {
    // Get node in openSet with lowest fScore
    let currentKey: string | null = null;
    let lowestF = Infinity;
    for (const key of openSet) {
      const score = fScore.get(key) ?? Infinity;
      if (score < lowestF) {
        lowestF = score;
        currentKey = key;
      }
    }

    if (!currentKey) break;

    const [cx, cy] = currentKey.split(',').map(Number);
    const current: Point = { x: cx, y: cy };

    if (current.x === goal.x && current.y === goal.y) {
      // Reconstruct path
      const path: Point[] = [current];
      let key = currentKey;
      while (cameFrom.has(key)) {
        const prev = cameFrom.get(key)!;
        path.push(prev);
        key = `${prev.x},${prev.y}`;
      }
      return path.reverse();
    }

    openSet.delete(currentKey);

    for (const neighbor of getNeighbors(current, grid)) {
      const neighborKey = `${neighbor.x},${neighbor.y}`;
      const tentativeGScore = (gScore.get(currentKey) ?? Infinity) + 1; // cost between neighbors is 1

      if (tentativeGScore < (gScore.get(neighborKey) ?? Infinity)) {
        cameFrom.set(neighborKey, current);
        gScore.set(neighborKey, tentativeGScore);
        fScore.set(neighborKey, tentativeGScore + heuristic(neighbor, goal));
        if (!openSet.has(neighborKey)) {
          openSet.add(neighborKey);
        }
      }
    }
  }

  // No path found
  return null;
}
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

const start: Point = { x: 0, y: 0 };
const goal: Point = { x: 3, y: 4 };

const path = aStar(grid, start, goal);

if (path) {
  console.log("Path found:", path);
} else {
  console.log("No path found.");
}
