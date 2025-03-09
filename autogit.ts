class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to this node
    public h: number; // Heuristic cost to goal
    public f: number; // Total cost (g + h)
    public parent: Node | null;

    constructor(x: number, y: number, g: number, h: number, parent: Node | null = null) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }
}
class PriorityQueue {
    private elements: Node[] = [];

    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    public enqueue(node: Node): void {
        this.elements.push(node);
        this.elements.sort((a, b) => a.f - b.f); // Sort by f value
    }

    public dequeue(): Node | undefined {
        return this.elements.shift(); // Remove the node with the lowest f value
    }
}
function heuristic(a: Node, b: Node): number {
    // Using Manhattan distance as the heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStar(start: Node, goal: Node, grid: number[][]): Node | null {
    const openSet = new PriorityQueue();
    const closedSet: Set<string> = new Set();

    openSet.enqueue(start);

    while (!openSet.isEmpty()) {
        const current = openSet.dequeue();

        if (!current) {
            break;
        }

        // Check if we reached the goal
        if (current.x === goal.x && current.y === goal.y) {
            return current; // Return the goal node
        }

        closedSet.add(`${current.x},${current.y}`);

        // Get neighbors (4-directional movement)
        const neighbors = [
            { x: current.x + 1, y: current.y },
            { x: current.x - 1, y: current.y },
            { x: current.x, y: current.y + 1 },
            { x: current.x, y: current.y - 1 },
        ];

        for (const neighbor of neighbors) {
            const { x, y } = neighbor;

            // Check if the neighbor is within bounds and walkable
            if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 1) {
                continue; // Skip walls or out-of-bounds
            }

            const neighborNode = new Node(x, y, current.g + 1, heuristic(goal, new Node(x, y, 0, 0)), current);

            if (closedSet.has(`${x},${y}`)) {
                continue; // Already evaluated
            }

            // Check if this path to neighbor is better
            const existingNode = openSet.elements.find(n => n.x === x && n.y === y);
            if (!existingNode || neighborNode.g < existingNode.g) {
                openSet.enqueue(neighborNode);
            }
        }
    }

    return null; // No path found
}
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
];

const start = new Node(0, 0, 0, heuristic(new Node(0, 0, 0, 0), new Node(4, 4, 0, 0)));
const goal = new Node(4, 4, 0, 0);

const result = aStar(start, goal, grid);

if (result) {
    console.log("Path found!");
    let
