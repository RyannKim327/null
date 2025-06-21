// Define a Node class to represent each point in the graph
class Node {
    x: number;
    y: number;
    g: number; // Cost from start to this node
    h: number; // Heuristic cost from this node to goal
    f: number; // Total cost (g + h)
    parent: Node | null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.parent = null;
    }

    // Calculate the Manhattan distance heuristic
    heuristic(goal: Node): number {
        return Math.abs(this.x - goal.x) + Math.abs(this.y - goal.y);
    }
}

// A* Search Algorithm
function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: Set<string> = new Set();

    while (openSet.length > 0) {
        // Find the node with the lowest f value in the open set
        let current = openSet.reduce((min, node) => (node.f < min.f ? node : min), openSet[0]);

        // If we've reached the goal, reconstruct the path
        if (current.x === goal.x && current.y === goal.y) {
            return reconstructPath(current);
        }

        // Remove the current node from the open set and add it to the closed set
        openSet.splice(openSet.indexOf(current), 1);
        closedSet.add(`${current.x},${current.y}`);

        // Get neighbors of the current node
        const neighbors = getNeighbors(current, grid);

        for (const neighbor of neighbors) {
            // Skip if the neighbor is already in the closed set
            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) continue;

            const tentativeG = current.g + 1; // Assume cost between nodes is 1

            // If the neighbor is not in the open set, add it
            if (!openSet.includes(neighbor)) {
                openSet.push(neighbor);
            } else if (tentativeG >= neighbor.g) {
                // This path is not better than the previously found path
                continue;
            }

            // Update the neighbor's details
            neighbor.parent = current;
            neighbor.g = tentativeG;
            neighbor.h = neighbor.heuristic(goal);
            neighbor.f = neighbor.g + neighbor.h;
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

    return path.reverse();
}

// Helper function to get valid neighbors of a node
function getNeighbors(node: Node, grid: number[][]): Node[] {
    const directions = [
        { dx: -1, dy: 0 }, // Up
        { dx: 1, dy: 0 },  // Down
        { dx: 0, dy: -1 }, // Left
        { dx: 0, dy: 1 },  // Right
    ];

    const neighbors: Node[] = [];

    for (const { dx, dy } of directions) {
        const newX = node.x + dx;
        const newY = node.y + dy;

        // Check boundaries and obstacles
        if (
            newX >= 0 &&
            newY >= 0 &&
            newX < grid.length &&
            newY < grid[0].length &&
            grid[newX][newY] === 0
        ) {
            neighbors.push(new Node(newX, newY));
        }
    }

    return neighbors;
}

// Example usage
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

const start = new Node(0, 0);
const goal = new Node(4, 4);

const path = aStar(start, goal, grid);

if (path) {
    console.log("Path found:");
    path.forEach((node) => console.log(`(${node.x}, ${node.y})`));
} else {
    console.log("No path found.");
}
