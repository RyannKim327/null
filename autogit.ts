class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to this node
    public h: number; // Heuristic cost from this node to the goal
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
        const neighbors = [
            new Node(current.x, current.y - 1), // Up
            new Node(current.x, current.y + 1), // Down
            new Node(current.x - 1, current.y), // Left
            new Node(current.x + 1, current.y)  // Right
        ];

        for (const neighbor of neighbors) {
            // Check if neighbor is within bounds and walkable
            if (neighbor.x < 0 || neighbor.x >= grid.length || neighbor.y < 0 || neighbor.y >= grid[0].length || grid[neighbor.x][neighbor.y] === 1) {
                continue; // Skip walls or out of bounds
            }

            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) {
                continue; // Skip already evaluated nodes
            }

            const gScore = current.g + 1; // Assume cost to move to neighbor is 1
            let isBestPath = false;

            if (!openSet.elements.some(n => n.x === neighbor.x && n.y === neighbor.y)) {
                isBestPath = true; // New node
                neighbor.h = heuristic(neighbor, goal);
                openSet.enqueue(neighbor);
            } else if (gScore < neighbor.g) {
                isBestPath = true; // Found a better path
            }

            if (isBestPath) {
                neighbor.g = gScore;
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = current;
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
    [0, 0, 
