type Node = {
  x: number;
  y: number;
  g: number; // Cost from start to this node
  h: number; // Heuristic estimate to goal
  f: number; // g + h
  parent: Node | null;
};

// Simple heuristic: Manhattan distance
function heuristic(a: Node, b: Node): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// We'll need a priority queue for the open set:
// To keep it simple, use an array and sort it every time (not optimal but fine for small grids)
function sortOpenSet(openSet: Node[]) {
  openSet.sort((a, b) => a.f - b.f);
}

function neighbors(node: Node, gridWidth: number, gridHeight: number): Node[] {
  let results: Node[] = [];
  const directions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
  ];

  for (const dir of directions) {
    const nx = node.x + dir.dx;
    const ny = node.y + dir.dy;
    if (nx >= 0 && nx < gridWidth && ny >= 0 && ny < gridHeight) {
      results.push({ x: nx, y: ny, g: 0, h: 0, f: 0, parent: null });
    }
  }
  return results;
}

// The main A* function
function aStar(
  start: { x: number; y: number },
  goal: { x: number; y: number },
  gridWidth: number,
  gridHeight: number,
  isWalkable: (x: number, y: number) => boolean
): { x: number; y: number }[] | null {
  const startNode: Node = { ...start, g: 0, h: 0, f: 0, parent: null };
  startNode.h = heuristic(startNode, goal);
  startNode.f = startNode.g + startNode.h;

  const openSet: Node[] = [startNode];
  const closedSet: boolean[][] = Array.from({ length: gridHeight }, () =>
    Array(gridWidth).fill(false)
  );

  while (openSet.length > 0) {
    sortOpenSet(openSet);
    const current = openSet.shift()!; // Node with lowest f-score

    if (current.x === goal.x && current.y === goal.y) {
      // Reconstruct path
      const path: { x: number; y: number }[] = [];
      let temp: Node | null = current;
      while (temp) {
        path.push({ x: temp.x, y: temp.y });
        temp = temp.parent;
      }
      return path.reverse();
    }

    closedSet[current.y][current.x] = true;

    for (const neighbor of neighbors(current, gridWidth, gridHeight)) {
      if (!isWalkable(neighbor.x, neighbor.y) || closedSet[neighbor.y][neighbor.x]) {
        continue;
      }

      const tentativeG = current.g + 1; // Assuming uniform cost between nodes
      const existingNodeIndex = openSet.findIndex(
        (n) => n.x === neighbor.x && n.y === neighbor.y
      );

      if (existingNodeIndex === -1 || tentativeG < openSet[existingNodeIndex].g) {
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, goal);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;

        if (existingNodeIndex === -1) {
          openSet.push(neighbor);
        } else {
          openSet[existingNodeIndex] = neighbor;
        }
      }
    }
  }

  // No path found
  return null;
}
const gridWidth = 5;
const gridHeight = 5;

const walls = new Set(['1,2', '2,2', '3,2']); // Some walls blocking path

function isWalkable(x: number, y: number): boolean {
  return !walls.has(`${x},${y}`);
}

const path = aStar({ x: 0, y: 0 }, { x: 4, y: 4 }, gridWidth, gridHeight, isWalkable);

console.log(path);
