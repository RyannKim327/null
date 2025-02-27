// Define a Node class to represent each step in the pathfinding
class Node {
    public f: number; // Total cost (g + h)
    public g: number; // Cost from start to the node
    public h: number; // Heuristic (estimated cost from node to end)
    public parent: Node | null;
    
    constructor(public x: number, public y: number, parent: Node | null = null) {
        this.parent = parent;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }
}

// Heuristic function: using Manhattan Distance
function heuristic(nodeA: Node, nodeB: Node): number {
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);
}

// A* Search Algorithm
function aStar(start: Node, goal: Node, grid: boolean[][]): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: boolean[][] = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));

    while (openSet.length > 0) {
        // Get the node with the lowest f value
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;

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

        closedSet[current.y][current.x] = true;

        // Generate neighbors (4 directions)
        const neighbors = [
            new Node(current.x, current.y - 1, current), // Up
            new Node(current.x, current.y + 1, current), // Down
            new Node(current.x - 1, current.y, current), // Left
            new Node(current.x + 1, current.y, current)  // Right
        ];

        for (const neighbor of neighbors) {
            // Check for grid boundaries and obstacles
            if (
                neighbor.x < 0 || neighbor.x >= grid[0].length ||
                neighbor.y < 0 || neighbor.y >= grid.length ||
                grid[neighbor.y][neighbor.x] === true || // True indicates an obstacle
                closedSet[neighbor.y][neighbor.x]
            ) {
                continue; // Skip to the next neighbor
            }

            const gScore = current.g + 1;
            if (!openSet.some(node => node.x === neighbor.x && node.y === neighbor.y && gScore >= node.g)) {
                neighbor.g = gScore;
                neighbor.h = heuristic(neighbor, goal);
                neighbor.f = neighbor.g + neighbor.h;

                if (!openSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                    openSet.push(neighbor); // Add to the open set
                }
            }
        }
    }
    
    return null; // No path found
}

// Example usage:
const start = new Node(0, 0);
const goal = new Node(4, 4);
const grid = [
    [false, false, false, false, false],
    [false, true, true, true, false],
    [false, false, false, true, false],
    [false, true, false, false, false],
    [false, false, false, false, false]
];

const path = aStar(start, goal, grid);
if (path) {
    console.log("Path found!");
    path.forEach(node => console.log(`Node: (${node.x}, ${node.y})`));
} else {
    console.log("No path found.");
}
