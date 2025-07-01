// Node class to represent each position in the grid
class Node {
    x: number;
    y: number;
    g: number; // Cost from start to this node
    h: number; // Heuristic cost to the goal
    f: number; // Total cost (f = g + h)
    parent: Node | null;

    constructor(x: number, y: number, g: number = 0, h: number = 0, parent: Node | null = null) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }

    // Update the cost and parent if a better path is found
    update(g: number, h: number, parent: Node): void {
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }
}

// Priority queue to manage nodes based on their f value
class PriorityQueue {
    private queue: Node[] = [];

    enqueue(node: Node): void {
        this.queue.push(node);
        this.queue.sort((a, b) => a.f - b.f); // Sort by f value
    }

    dequeue(): Node | undefined {
        return this.queue.shift(); // Remove and return the node with the lowest f value
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    contains(node: Node): boolean {
        return this.queue.some(n => n.x === node.x && n.y === node.y);
    }
}

// A* algorithm implementation
function aStar(
    start: [number, number],
    goal: [number, number],
    grid: number[][],
    heuristic: (x1: number, y1: number, x2: number, y2: number) => number
): Node[] | null {
    const openList = new PriorityQueue();
    const closedList = new Set<string>();

    const startNode = new Node(start[0], start[1], 0, heuristic(start[0], start[1], goal[0], goal[1]));
    openList.enqueue(startNode);

    while (!openList.isEmpty()) {
        const currentNode = openList.dequeue()!;
        const key = `${currentNode.x},${currentNode.y}`;

        // If we've reached the goal, reconstruct the path
        if (currentNode.x === goal[0] && currentNode.y === goal[1]) {
            return reconstructPath(currentNode);
        }

        closedList.add(key);

        // Explore neighbors (up, down, left, right)
        const neighbors = getNeighbors(currentNode, grid);
        for (const neighbor of neighbors) {
            const neighborKey = `${neighbor.x},${neighbor.y}`;
            if (closedList.has(neighborKey)) continue;

            const tentativeG = currentNode.g + 1; // Assuming uniform cost for simplicity

            if (!openList.contains(neighbor)) {
                openList.enqueue(neighbor);
            } else if (tentativeG >= neighbor.g) {
                continue; // This is not a better path
            }

            // Update the neighbor's details
            neighbor.update(tentativeG, heuristic(neighbor.x, neighbor.y, goal[0], goal[1]), currentNode);
        }
    }

    return null; // No path found
}

// Helper function to reconstruct the path from the goal node
function reconstructPath(node: Node): Node[] {
    const path: Node[] = [];
    let current: Node | null = node;

    while (current !== null) {
        path.push(current);
        current = current.parent;
    }

    return path.reverse(); // Reverse to get the path from start to goal
}

// Helper function to get valid neighbors of a node
function getNeighbors(node: Node, grid: number[][]): Node[] {
    const directions = [
        { dx: 0, dy: -1 }, // Up
        { dx: 0, dy: 1 },  // Down
        { dx: -1, dy: 0 }, // Left
        { dx: 1, dy: 0 },  // Right
    ];

    const neighbors: Node[] = [];
    for (const { dx, dy } of directions) {
        const x = node.x + dx;
        const y = node.y + dy;

        if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 0) {
            neighbors.push(new Node(x, y));
        }
    }

    return neighbors;
}

// Example heuristic function (Manhattan distance)
function manhattanDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

// Example usage
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

const start: [number, number] = [0, 0];
const goal: [number, number] = [4, 4];

const path = aStar(start, goal, grid, manhattanDistance);

if (path) {
    console.log("Path found:");
    path.forEach(node => console.log(`(${node.x}, ${node.y})`));
} else {
    console.log("No path found.");
}
Path found:
(0, 0)
(1, 0)
(2, 0)
(2, 1)
(2, 2)
(3, 2)
(4, 2)
(4, 3)
(4, 4)
