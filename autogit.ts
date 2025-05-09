type Node = {
  x: number;
  y: number;
};

function heuristic(a: Node, b: Node): number {
  // Manhattan distance heuristic
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function neighbors(node: Node, grid: number[][]): Node[] {
  const results: Node[] = [];
  const directions = [
    { x: 0, y: -1 },  // up
    { x: 1, y: 0 },   // right
    { x: 0, y: 1 },   // down
    { x: -1, y: 0 },  // left
  ];

  for (const dir of directions) {
    const nx = node.x + dir.x;
    const ny = node.y + dir.y;
    if (nx >= 0 && ny >= 0 && ny < grid.length && nx < grid[0].length) {
      // Assuming 0 = walkable, 1 = blocked
      if (grid[ny][nx] === 0) {
        results.push({ x: nx, y: ny });
      }
    }
  }
  return results;
}

function nodeEquals(a: Node, b: Node): boolean {
  return a.x === b.x && a.y === b.y;
}

function reconstructPath(cameFrom: Map<string, Node>, current: Node): Node[] {
  const totalPath = [current];
  let key = `${current.x},${current.y}`;

  while (cameFrom.has(key)) {
    current = cameFrom.get(key)!;
    totalPath.unshift(current);
    key = `${current.x},${current.y}`;
  }
  return totalPath;
}

function aStar(grid: number[][], start: Node, goal: Node): Node[] | null {
  const openSet = new Set<string>();
  const cameFrom = new Map<string, Node>();

  const gScore = new Map<string, number>();
  const fScore = new Map<string, number>();

  function key(node: Node): string {
    return `${node.x},${node.y}`;
  }

  openSet.add(key(start));
  gScore.set(key(start), 0);
  fScore.set(key(start), heuristic(start, goal));

  while (openSet.size > 0) {
    // Pick node with lowest fScore in openSet
    let currentKey: string | null = null;
    let lowestF = Infinity;
    for (const k of openSet) {
      const score = fScore.get(k) ?? Infinity;
      if (score < lowestF) {
        lowestF = score;
        currentKey = k;
      }
    }
    if (!currentKey) break;

    const [cx, cy] = currentKey.split(',').map(Number);
    const current: Node = { x: cx, y: cy };

    if (nodeEquals(current, goal)) {
      // Found the path
      return reconstructPath(cameFrom, current);
    }

    openSet.delete(currentKey);

    for (const neighbor of neighbors(current, grid)) {
      const tentative_gScore = (gScore.get(currentKey) ?? Infinity) + 1; // assumes uniform cost

      const neighborKey = key(neighbor);
      if (tentative_gScore < (gScore.get(neighborKey) ?? Infinity)) {
        cameFrom.set(neighborKey, current);
        gScore.set(neighborKey, tentative_gScore);
        fScore.set(neighborKey, tentative_gScore + heuristic(neighbor, goal));
        if (!openSet.has(neighborKey)) {
          openSet.add(neighborKey);
        }
      }
    }
  }

  // No path found
  return null;
}


// Example usage:
const grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0]
];

const start: Node = { x: 0, y: 0 };
const goal: Node = { x: 4, y: 4 };

const path = aStar(grid, start, goal);
console.log(path);
