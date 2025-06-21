class Node {
    x: number; // X-coordinate
    y: number; // Y-coordinate
    g: number; // Cost from start to this node
    h: number; // Heuristic cost to goal
    f: number; // Total cost (f = g + h)
    parent: Node | null; // Parent node for reconstructing the path

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.parent = null;
    }

    // Calculate Manhattan distance as the heuristic
    calculateHeuristic(goal: Node): void {
        this.h = Math.abs(this.x - goal.x) + Math.abs(this.y - goal.y);
    }

    // Update the total cost
    updateCosts(start: Node, goal: Node): void {
        this.g = start ? this.parent!.g + 1 : 0; // Assuming uniform cost grid
        this.calculateHeuristic(goal);
        this.f = this.g + this.h;
    }
}
class PriorityQueue {
    private queue: Node[] = [];

    enqueue(node: Node): void {
        this.queue.push(node);
        this.queue.sort((a, b) => a.f - b.f); // Sort by f-cost
    }

    dequeue(): Node | undefined {
        return this.queue.shift(); // Remove and return the node with the lowest f-cost
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }
}
function aStarSearch(start: Node, goal: Node, grid: Node[][]): Node[] | null {
    const openList = new PriorityQueue();
    const closedList = new Set<Node>();

    // Initialize the start node
    start.updateCosts(start, goal);
    openList.enqueue(start);

    while (!openList.isEmpty()) {
        const current = openList.dequeue()!;

        // If we've reached the goal, reconstruct the path
        if (current.x === goal.x && current.y === goal.y) {
            return reconstructPath(current);
        }

        closedList.add(current);

        // Get neighbors of the current node
        const neighbors = getNeighbors(current, grid);
        for (const neighbor of neighbors) {
            if (closedList.has(neighbor)) continue;

            const tentativeG = current.g + 1; // Assuming uniform cost grid
            const isNewNodeBetter = !openList.queue.includes(neighbor) || tentativeG < neighbor.g;

            if (isNewNodeBetter) {
                neighbor.parent = current;
                neighbor.g = tentativeG;
                neighbor.updateCosts(start, goal);

                if (!openList.queue.includes(neighbor)) {
                    openList.enqueue(neighbor);
                }
            }
        }
    }

    // No path found
    return null;
}

// Helper function to reconstruct the path
function reconstructPath(node: Node): Node[] {
    const path: Node[] = [];
    let current: Node | null = node;

    while (current !== null) {
        path.push(current);
        current = current.parent;
    }

    return path.reverse(); // Reverse to get the path from start to goal
}

// Helper function to get valid neighbors
function getNeighbors(node: Node, grid: Node[][]): Node[] {
    const neighbors: Node[] = [];
    const directions = [
        { dx: -1, dy: 0 }, // Left
        { dx: 1, dy: 0 },  // Right
        { dx: 0, dy: -1 }, // Up
        { dx: 0, dy: 1 },  // Down
    ];

    for (const { dx, dy } of directions) {
        const newX = node.x + dx;
        const newY = node.y + dy;

        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
            neighbors.push(grid[newX][newY]);
        }
    }

    return neighbors;
}
// Create a 5x5 grid of nodes
const grid: Node[][] = Array.from({ length: 5 }, (_, x) =>
    Array.from({ length: 5 }, (_, y) => new Node(x, y))
);

// Define start and goal nodes
const start = grid[0][0];
const goal = grid[4][4];

// Run A* search
const path = aStarSearch(start, goal, grid);

if (path) {
    console.log("Path found:");
    path.forEach(node => console.log(`(${node.x}, ${node.y})`));
} else {
    console.log("No path found.");
}
