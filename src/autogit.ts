type Coordinate = { x: number; y: number };

class Node {
  public coordinate: Coordinate;
  public g: number; // Cost from start to this node
  public h: number; // Heuristic cost from this node to goal
  public f: number; // Total cost: f = g + h
  public parent: Node | null;

  constructor(coordinate: Coordinate, g: number, h: number, parent: Node | null = null) {
    this.coordinate = coordinate;
    this.g = g;
    this.h = h;
    this.f = g + h;
    this.parent = parent;
  }
}

function heuristic(a: Coordinate, b: Coordinate): number {
  // Use Manhattan distance as the heuristic
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStarSearch(start: Coordinate, goal: Coordinate, grid: boolean[][]): Coordinate[] | null {
  const openList: Node[] = [];
  const closedList: Set<string> = new Set();

  const startNode = new Node(start, 0, heuristic(start, goal));
  openList.push(startNode);

  while (openList.length > 0) {
    // Sort openList by f value to get the node with the lowest cost
    openList.sort((a, b) => a.f - b.f);
    const currentNode = openList.shift()!;

    // If we've reached the goal, reconstruct the path
    if (currentNode.coordinate.x === goal.x && currentNode.coordinate.y === goal.y) {
      return reconstructPath(currentNode);
    }

    closedList.add(`${currentNode.coordinate.x},${currentNode.coordinate.y}`);

    // Explore neighbors
    const neighbors = getNeighbors(currentNode.coordinate, grid);
    for (const neighbor of neighbors) {
      if (closedList.has(`${neighbor.x},${neighbor.y}`)) {
        continue; // Skip already evaluated nodes
      }

      const tentativeG = currentNode.g + 1; // Assuming uniform cost of 1 for simplicity

      const neighborNode = new Node(neighbor, tentativeG, heuristic(neighbor, goal), currentNode);

      // Check if the neighbor is already in the open list with a lower cost
      const existingNodeIndex = openList.findIndex(
        (node) => node.coordinate.x === neighbor.x && node.coordinate.y === neighbor.y
      );
      if (existingNodeIndex !== -1 && tentativeG >= openList[existingNodeIndex].g) {
        continue; // Skip if this path is not better
      }

      // Add the neighbor to the open list
      openList.push(neighborNode);
    }
  }

  // No path found
  return null;
}

function getNeighbors(coordinate: Coordinate, grid: boolean[][]): Coordinate[] {
  const directions = [
    { x: -1, y: 0 }, // Up
    { x: 1, y: 0 },  // Down
    { x: 0, y: -1 }, // Left
    { x: 0, y: 1 },  // Right
  ];

  const neighbors: Coordinate[] = [];
  for (const direction of directions) {
    const newX = coordinate.x + direction.x;
    const newY = coordinate.y + direction.y;

    // Ensure the neighbor is within bounds and walkable
    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < grid.length &&
      newY < grid[0].length &&
      grid[newX][newY]
    ) {
      neighbors.push({ x: newX, y: newY });
    }
  }

  return neighbors;
}

function reconstructPath(node: Node): Coordinate[] {
  const path: Coordinate[] = [];
  let current: Node | null = node;

  while (current !== null) {
    path.push(current.coordinate);
    current = current.parent;
  }

  return path.reverse(); // Reverse to get the path from start to goal
}
const grid = [
  [true, true, true, false],
  [true, false, true, true],
  [true, true, true, false],
  [false, true, true, true],
];

const start: Coordinate = { x: 0, y: 0 };
const goal: Coordinate = { x: 3, y: 3 };

const path = aStarSearch(start, goal, grid);

if (path) {
  console.log("Path found:", path);
} else {
  console.log("No path found.");
}
Path found: [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 3 } ]
