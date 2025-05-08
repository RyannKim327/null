interface Node {
  x: number;
  y: number;
}

function nodesEqual(a: Node, b: Node): boolean {
  return a.x === b.x && a.y === b.y;
}
function heuristic(a: Node, b: Node): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
  const rows = grid.length;
  const cols = grid[0].length;

  function neighbors(node: Node): Node[] {
    const result: Node[] = [];
    const directions = [
      {dx: -1, dy: 0},
      {dx: 1, dy: 0},
      {dx: 0, dy: -1},
      {dx: 0, dy: 1}
    ];

    for (const {dx, dy} of directions) {
      const x = node.x + dx;
      const y = node.y + dy;
      if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === 0) {
        result.push({x, y});
      }
    }

    return result;
  }

  // We use a simple array as openSet; for better performance, a priority queue is recommended.
  const openSet: Node[] = [start];
  const cameFrom = new Map<string, Node>();

  // Initialize gScore and fScore
  const gScore = new Map<string, number>();
  const fScore = new Map<string, number>();

  function nodeKey(node: Node): string {
    return `${node.x},${node.y}`;
  }

  gScore.set(nodeKey(start), 0);
  fScore.set(nodeKey(start), heuristic(start, goal));

  while (openSet.length > 0) {
    // Get the node in openSet with the lowest fScore
    openSet.sort((a, b) => (fScore.get(nodeKey(a)) ?? Infinity) - (fScore.get(nodeKey(b)) ?? Infinity));
    const current = openSet.shift()!;
    
    if (nodesEqual(current, goal)) {
      // Reconstruct path
      const path: Node[] = [];
      let curr = current;
      while (cameFrom.has(nodeKey(curr))) {
        path.push(curr);
        curr = cameFrom.get(nodeKey(curr))!;
      }
      path.push(start);
      return path.reverse();
    }

    for (const neighbor of neighbors(current)) {
      const tentativeGScore = (gScore.get(nodeKey(current)) ?? Infinity) + 1; // assuming cost between nodes is 1
      if (tentativeGScore < (gScore.get(nodeKey(neighbor)) ?? Infinity)) {
        cameFrom.set(nodeKey(neighbor), current);
        gScore.set(nodeKey(neighbor), tentativeGScore);
        fScore.set(nodeKey(neighbor), tentativeGScore + heuristic(neighbor, goal));
        if (!openSet.some(n => nodesEqual(n, neighbor))) {
          openSet.push(neighbor);
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
  [0, 1, 1, 0]
];

const start: Node = {x: 0, y: 0};
const goal: Node = {x: 3, y: 3};

const path = aStar(start, goal, grid);
console.log(path);
