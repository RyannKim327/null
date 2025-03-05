class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to node
    public h: number; // Heuristic cost from node to end
    public f: number; // Total cost (g + h)
    public parent: Node | null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.parent = null;
    }
}

// Heuristic function: Manhattan distance
function heuristic(a: Node, b: Node): number {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// A* Search Algorithm
function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
    const openList: Node[] = []; // List of nodes to be evaluated
    const closedList: Set<string> = new Set(); // List of nodes already evaluated

    openList.push(start);

    while (openList.length > 0) {
        // Sort openList based on the f value
        openList.sort((a, b) => a.f - b.f);
        const current = openList.shift()!; // Get the node with the lowest f value

        // Check if we've reached the goal
        if (current.x === goal.x && current.y === goal.y) {
            return reconstructPath(current); // Reconstruct and return the path
        }

        closedList.add(`${current.x},${current.y}`);

        // Loop through each possible direction (up, down, left, right)
        const directions = [
            { dx: 0, dy: -1 }, // Up
            { dx: 0, dy: 1 },  // Down
            { dx: -1, dy: 0 }, // Left
            { dx: 1, dy: 0 }   // Right
        ];

        for (const { dx, dy } of directions) {
            const neighborX = current.x + dx;
            const neighborY = current.y + dy;

            // Check if neighbor is within bounds and walkable
            if (neighborX < 0 || neighborX >= grid.length || neighborY < 0 || neighborY >= grid[0].length || grid[neighborX][neighborY] !== 0) {
                continue; // Skip neighbor if out of bounds or not traversable
            }

            const neighbor = new Node(neighborX, neighborY);

            // If neighbor is already evaluated, skip it
            if (closedList.has(`${neighbor.x},${neighbor.y}`)) {
                continue;
            }

            // Calculate g, h, f values
            const gScore = current.g + 1;
            const hScore = heuristic(neighbor, goal);
            const fScore = gScore + hScore;

            // If this path to neighbor is better than any previous one, record it
            if (!openList.includes(neighbor) || gScore < neighbor.g) {
                neighbor.g = gScore;
                neighbor.h = hScore;
                neighbor.f = fScore;
                neighbor.parent = current;

                if (!openList.includes(neighbor)) {
                    openList.push(neighbor);
                }
            }
        }
    }

    return null; // No path found
}

// Helper function to reconstruct the path from the goal to the start
function reconstructPath(node: Node): Node[] {
    const path: Node[] = [];
    let current: Node | null = node;

    while (current) {
        path.push(current);
        current = current.parent;
    }

    return path.reverse(); // Reverse the path to get it from start to goal
}

// Example Usage
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

const startNode = new Node(0, 0);
const goalNode = new Node(4, 4);
const path = aStar(startNode, goalNode, grid);

if (path) {
    console.log('Path found:');
    path.forEach(node => console.log(`(${node.x}, ${node.y})`));
} else {
    console.log('No path found');
}
