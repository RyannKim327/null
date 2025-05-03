class Node {
  x: number;
  y: number;
  g: number; // cost from start
  h: number; // heuristic cost to goal
  f: number; // total cost
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
class PriorityQueue<T> {
  items: { element: T; priority: number }[] = [];

  enqueue(element: T, priority: number) {
    this.items.push({ element, priority });
    this.items.sort((a, b) => a.priority - b.priority); // simple but not optimal for big data
  }

  dequeue(): T | undefined {
    return this.items.shift()?.element;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
function heuristic(a: Node, b: Node): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
function aStar(
  grid: number[][],
  startPos: [number, number],
  goalPos: [number, number]
): [number, number][] | null {
  const rows = grid.length;
  const cols = grid[0].length;

  const startNode = new Node(startPos[0], startPos[1]);
  const goalNode = new Node(goalPos[0], goalPos[1]);

  const openSet = new PriorityQueue<Node>();
  openSet.enqueue(startNode, startNode.f);

  const closedSet = new Set<string>();

  // Helper to get neighbors (4-directional)
  const getNeighbors = (node: Node): Node[] => {
    const neighbors: Node[] = [];
    const directions = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ];
    for (const [dx, dy] of directions) {
      const x = node.x + dx;
      const y = node.y + dy;
      if (
        x >= 0 &&
        x < cols &&
        y >= 0 &&
        y < rows &&
        grid[y][x] === 0 // walkable
      ) {
        neighbors.push(new Node(x, y));
      }
    }
    return neighbors;
  };

  // Helper to encode node position as a string for sets/maps
  const nodeToString = (node: Node) => `${node.x},${node.y}`;

  while (!openSet.isEmpty()) {
    const current = openSet.dequeue()!;
    if (current.x === goalNode.x && current.y === goalNode.y) {
      // Reconstruct path
      const path: [number, number][] = [];
      let curr: Node | null = current;
      while (curr != null) {
        path.push([curr.x, curr.y]);
        curr = curr.parent;
      }
      return path.reverse();
    }

    closedSet.add(nodeToString(current));

    for (const neighbor of getNeighbors(current)) {
      if (closedSet.has(nodeToString(neighbor))) continue;

      const tentativeG = current.g + 1; // assuming uniform cost between neighbors

      // Check if neighbor is in openSet with higher g cost
      let inOpenSet = false;
      for (const item of openSet.items) {
        if (item.element.x === neighbor.x && item.element.y === neighbor.y) {
          inOpenSet = true;
          if (tentativeG < item.element.g) {
            item.element.g = tentativeG;
            item.element.f = tentativeG + item.element.h;
            item.element.parent = current;
            openSet.items.sort((a, b) => a.priority - b.priority); 
          }
          break;
        }
      }

      if (!inOpenSet) {
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, goalNode);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = current;
        openSet.enqueue(neighbor, neighbor.f);
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

const start: [number, number] = [0, 0];
const goal: [number, number] = [3, 4];

const path = aStar(grid, start, goal);
console.log(path);
