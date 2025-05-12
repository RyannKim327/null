type Node = {
  x: number;
  y: number;
};

function heuristic(a: Node, b: Node): number {
  // Manhattan distance as heuristic
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function neighbors(node: Node, grid: number[][]): Node[] {
  const deltas = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];
  const result: Node[] = [];
  for (const d of deltas) {
    const nx = node.x + d.x;
    const ny = node.y + d.y;
    if (
      ny >= 0 &&
      ny < grid.length &&
      nx >= 0 &&
      nx < grid[0].length &&
      grid[ny][nx] === 0 // 0 = walkable, 1 = obstacle
    ) {
      result.push({ x: nx, y: ny });
    }
  }
  return result;
}

class PriorityQueue<T> {
  private elements: Array<{ item: T; priority: number }> = [];

  enqueue(item: T, priority: number) {
    this.elements.push({ item, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    return this.elements.shift()?.item;
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

function aStar(
  start: Node,
  goal: Node,
  grid: number[][]
): Node[] | null {
  const frontier = new PriorityQueue<Node>();
  frontier.enqueue(start, 0);

  const cameFrom = new Map<string, string | null>();
  const costSoFar = new Map<string, number>();

  function nodeKey(n: Node) {
    return `${n.x},${n.y}`;
  }

  cameFrom.set(nodeKey(start), null);
  costSoFar.set(nodeKey(start), 0);

  while (!frontier.isEmpty()) {
    const current = frontier.dequeue()!;
    if (current.x === goal.x && current.y === goal.y) {
      // Reconstruct path
      const path: Node[] = [];
      let curKey = nodeKey(current);
      while (curKey !== null) {
        const [xStr, yStr] = curKey.split(',');
        path.push({ x: parseInt(xStr), y: parseInt(yStr) });
        curKey = cameFrom.get(curKey)!;
      }
      path.reverse();
      return path;
    }

    for (const next of neighbors(current, grid)) {
      const newCost = (costSoFar.get(nodeKey(current)) ?? Infinity) + 1; // all edges cost 1
      const nextKey = nodeKey(next);
      if (!costSoFar.has(nextKey) || newCost < costSoFar.get(nextKey)!) {
        costSoFar.set(nextKey, newCost);
        const priority = newCost + heuristic(next, goal);
        frontier.enqueue(next, priority);
        cameFrom.set(nextKey, nodeKey(current));
      }
    }
  }
  return null; // no path found
}

// Example usage:

const grid = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

const start: Node = { x: 0, y: 0 };
const goal: Node = { x: 4, y: 4 };
const path = aStar(start, goal, grid);

console.log(path);
