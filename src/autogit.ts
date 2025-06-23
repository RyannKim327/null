class Node {
    x: number; // X-coordinate
    y: number; // Y-coordinate
    g: number; // Cost from start to this node
    h: number; // Heuristic cost to goal
    f: number; // Total cost (g + h)
    parent: Node | null; // Parent node for path reconstruction

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.parent = null;
    }

    // Helper method to calculate the Manhattan distance heuristic
    heuristic(goal: Node): number {
        return Math.abs(this.x - goal.x) + Math.abs(this.y - goal.y);
    }
}
function aStar(start: Node, goal: Node, grid: boolean[][]): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: Set<string> = new Set();

    while (openSet.length > 0) {
        // Find the node with the lowest f-cost in the open set
        let current = openSet[0];
        let currentIndex = 0;

        for (let i = 1; i < openSet.length; i++) {
            if (openSet[i].f < current.f || (openSet[i].f === current.f && openSet[i].h < current.h)) {
                current = openSet[i];
                currentIndex = i;
            }
        }

        // Remove the current node from the open set and add it to the closed set
        openSet.splice(currentIndex, 1);
        closedSet.add(`${current.x},${current.y}`);

        // Check if we've reached the goal
        if (current.x === goal.x && current.y === goal.y) {
            return reconstructPath(current);
        }

        // Get neighbors of the current node
        const neighbors = getNeighbors(current, grid);

        for (const neighbor of neighbors) {
            // Skip neighbors already in the closed set
            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) continue;

            const tentativeG = current.g + 1; // Assume uniform cost of 1

            // If the neighbor is not in the open set, add it
            if (!openSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                openSet.push(neighbor);
            } else if (tentativeG >= neighbor.g) {
                continue; // This path is not better than the previously found one
            }

            // Update the neighbor's details
            neighbor.g = tentativeG;
            neighbor.h = neighbor.heuristic(goal);
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.parent = current;
        }
    }

    // If we exit the loop, no path was found
    return null;
}
// Define a grid where false represents free space and true represents obstacles
const grid: boolean[][] = [
    [false, false, false, false],
    [false, true, true, false],
    [false, false, false, false],
    [false, false, false, false],
];

// Define start and goal nodes
const start = new Node(0, 0);
const goal = new Node(3, 3);

// Run A* algorithm
const path = aStar(start, goal, grid);

if (path) {
    console.log("Path found:");
    path.forEach(node => console.log(`(${node.x}, ${node.y})`));
} else {
    console.log("No path found.");
}
// Full implementation provided above.
