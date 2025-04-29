interface Node {
  x: number;
  y: number;
  walkable: boolean;
  gScore: number;
  fScore: number;
  cameFrom?: Node;
}

function heuristic(a: Node, b: Node): number {
  // Manhattan distance
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// A simple min-heap for open set
class PriorityQueue<T> {
  private items: { node: T; priority: number }[] = [];

  enqueue(node: T, priority: number) {
    this.items.push({ node, priority });
    this.items.sort((a, b) => a.priority - b.priority); // Keep sorted
  }

  dequeue(): T | undefined {
    return this.items.shift()?.node;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  update(node: T, priority: number) {
    this.items = this.items.filter(item => item.node !== node);
    this.enqueue(node, priority);
  }

  // Optional: check if a node is in the queue
  contains(node: T): boolean {
    return this.items.some(item => item.node === node);
  }
}

function aStar(grid: Node[][], start: Node, goal: Node): Node[] | null {
  const openSet = new PriorityQueue<Node>();
  const closedSet = new Set<Node>();

  start.gScore = 0;
  start.fScore = heuristic(start, goal);
  openSet.enqueue(start, start.fScore);

  while (!openSet.isEmpty()) {
    const current = openSet.dequeue()!;
    if (current === goal) {
      return reconstructPath(current);
    }

    closedSet.add(current);

    for (const neighbor of getNeighbors(grid, current)) {
      if (!neighbor.walkable || closedSet.has(neighbor)) {
        continue;
      }

      const tentativeGScore = current.gScore + distanceBetween(current, neighbor);

      if (tentativeGScore < neighbor.gScore) {
        neighbor.cameFrom = current;
        neighbor.gScore = tentativeGScore;
        neighbor.fScore = tentativeGScore + heuristic(neighbor, goal);

        if (!openSet.contains(neighbor)) {
          openSet.enqueue(neighbor, neighbor.fScore);
        } else {
          openSet.update(neighbor, neighbor.fScore);
        }
      }
    }
  }

  return null; // No path found
}

// Helper to reconstruct the path after reaching goal
function reconstructPath(node: Node): Node[] {
  const path: Node[] = [];
  let current: Node | undefined = node;
  while (current) {
    path.unshift(current);
    current = current.cameFrom;
  }
  return path;
}

// Example: getting neighbors in a grid
function getNeighbors(grid: Node[][], node: Node): Node[] {
  const neighbors: Node[] = [];
  const directions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
  ];

  for (const dir of directions) {
    const nx = node.x + dir.dx;
    const ny = node.y + dir.dy;
    if (grid[nx]?.[ny]) {
      neighbors.push(grid[nx][ny]);
    }
  }
  return neighbors;
}

// Distance between neighboring nodes
function distanceBetween(a: Node, b: Node): number {
  return 1; // uniform cost for grid movement
}
