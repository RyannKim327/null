class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to this node
    public h: number; // Heuristic cost to goal
    public f: number; // Total cost (g + h)
    public parent: Node | null;

    constructor(x: number, y: number, g: number = 0, h: number = 0, parent: Node | null = null) {
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

function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
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
            const path: Node[] = [];
            let temp: Node | null = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return the path from start to goal
        }

        closedSet.add(`${current.x},${current.y}`);

        // Explore neighbors (4 directions: up, down, left, right)
        const directions = [
            { x: 0, y: -1 }, // Up
            { x: 0, y: 1 },  // Down
            { x: -1, y: 0 }, // Left
            { x: 1, y: 0 }   // Right
        ];

        for (const dir of directions) {
            const neighborX = current.x + dir.x;
            const neighborY = current.y + dir.y;

            // Check if neighbor is within bounds and not an obstacle
            if (neighborX >= 0 && neighborY >= 0 && neighborX < grid.length && neighborY < grid[0].length && grid[neighborX][neighborY] === 0) {
                const neighbor = new Node(neighborX, neighborY);
                if (closedSet.has(`${neighbor.x},${neighbor.y}`)) {
                    continue; // Ignore the neighbor which is already evaluated
                }

                const tentativeG = current.g + 1; // Assume cost between nodes is 1

                if (!openSet.elements.some(n => n.x === neighbor.x && n.y === neighbor.y && tentativeG >= n.g)) {
                    neighbor.g = tentativeG;
                    neighbor.h = heuristic(neighbor, goal);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = current;

                    openSet.enqueue(neighbor);
                }
            }
        }
    }

    return null; // Return null if no path is found
}
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

const start = new Node(0, 0);
const
