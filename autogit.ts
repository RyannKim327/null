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

    public dequeue(): Node {
        return this.elements.shift()!;
    }
}
function heuristic(a: Node, b: Node): number {
    // Using Manhattan distance as the heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
    const openSet = new PriorityQueue();
    const closedSet: Set<string> = new Set();

    openSet.enqueue(start);

    while (!openSet.isEmpty()) {
        const current = openSet.dequeue();

        // Check if we reached the goal
        if (current.x === goal.x && current.y === goal.y) {
            const path: Node[] = [];
            let temp: Node | null = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return reversed path
        }

        closedSet.add(`${current.x},${current.y}`);

        // Explore neighbors (4 directions)
        const neighbors = [
            new Node(current.x + 1, current.y, 0, 0),
            new Node(current.x - 1, current.y, 0, 0),
            new Node(current.x, current.y + 1, 0, 0),
            new Node(current.x, current.y - 1, 0, 0),
        ];

        for (const neighbor of neighbors) {
            // Check if neighbor is within bounds and not an obstacle
            if (neighbor.x < 0 || neighbor.x >= grid.length || neighbor.y < 0 || neighbor.y >= grid[0].length || grid[neighbor.x][neighbor.y] === 1) {
                continue; // Skip if out of bounds or an obstacle
            }

            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) {
                continue; // Skip if already evaluated
            }

            const gScore = current.g + 1; // Assume cost to move to neighbor is 1
            const hScore = heuristic(neighbor, goal);
            const fScore = gScore + hScore;

            // If neighbor is not in openSet, add it
            if (!openSet.elements.some(n => n.x === neighbor.x && n.y === neighbor.y)) {
                neighbor.g = gScore;
                neighbor.h = hScore;
                neighbor.f = fScore;
                neighbor.parent = current;
                openSet.enqueue(neighbor);
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
const goal =
