class Node {
    constructor(
        public x: number,
        public y: number,
        public g: number = 0,  // Cost from start to node
        public h: number = 0,  // Heuristic from node to goal
        public f: number = 0,  // Total cost
        public parent: Node | null = null // Parent node
    ) {}
}
function heuristic(a: Node, b: Node): number {
    // Using Manhattan distance as heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function astar(start: Node, goal: Node, grid: number[][]): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: Node[] = [];
    
    while (openSet.length > 0) {
        // Sort open set to get the node with the lowest 'f' value
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!; // Get the node with the lowest f value

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

        closedSet.push(current);

        // Get neighbors (assuming a grid)
        for (const neighbor of getNeighbors(current, grid)) {
            if (closedSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                continue; // Ignore already evaluated neighbor
            }

            const tentative_g = current.g + 1; // Assuming cost between nodes is 1

            if (!openSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                // New node
                openSet.push(neighbor);
            } else if (tentative_g >= neighbor.g) {
                continue; // Not a better path
            }

            // Update neighbor values
            neighbor.parent = current;
            neighbor.g = tentative_g;
            neighbor.h = heuristic(neighbor, goal);
            neighbor.f = neighbor.g + neighbor.h;
        }
    }

    return null; // No path found
}

function getNeighbors(node: Node, grid: number[][]): Node[] {
    const neighbors: Node[] = [];
    const directions = [
        {x: 0, y: 1},   // down
        {x: 1, y: 0},   // right
        {x: 0, y: -1},  // up
        {x: -1, y: 0},  // left
    ];

    for (const direction of directions) {
        const newX = node.x + direction.x;
        const newY = node.y + direction.y;

        // Check grid boundaries and obstacles
        if (newX >= 0 && newY >= 0 && newY < grid.length && newX < grid[0].length && grid[newY][newX] === 0) {
            neighbors.push(new Node(newX, newY));
        }
    }

    return neighbors;
}
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

const start = new Node(0, 0);
const goal = new Node(4, 4);

const path = astar(start, goal, grid);

if (path) {
    console.log("Path found:");
    for (const node of path) {
        console.log(`(${node.x}, ${node.y})`);
    }
} else {
    console.log("No path found.");
}
