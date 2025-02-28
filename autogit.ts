class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to node
    public h: number; // Heuristic cost to goal
    public f: number; // Total cost (g + h)
    public parent?: Node;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.g = Infinity; // Start with Infinity
        this.h = 0;
        this.f = Infinity;
    }
}
function heuristic(nodeA: Node, nodeB: Node): number {
    // Using Manhattan distance for the heuristic function
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);
}

function aStar(start: Node, goal: Node, grid: Node[][]): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: Set<Node> = new Set();

    start.g = 0;
    start.h = heuristic(start, goal);
    start.f = start.g + start.h;

    while (openSet.length > 0) {
        // Get the node with the lowest f value
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;

        // Check if we have reached the goal
        if (current.x === goal.x && current.y === goal.y) {
            const path: Node[] = [];
            let temp: Node | undefined = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return the path from start to goal
        }

        closedSet.add(current);

        // Check neighbors
        const neighbors = getNeighbors(current, grid);
        for (const neighbor of neighbors) {
            if (closedSet.has(neighbor)) {
                continue; // Ignore the neighbor which is already evaluated
            }

            const tentativeG = current.g + 1; // Assume cost between nodes is 1

            if (!openSet.includes(neighbor)) {
                openSet.push(neighbor); // Discover a new node
            } else if (tentativeG >= neighbor.g) {
                continue; // This is not a better path
            }

            // This path is the best until now, record it
            neighbor.parent = current;
            neighbor.g = tentativeG;
            neighbor.h = heuristic(neighbor, goal);
            neighbor.f = neighbor.g + neighbor.h;
        }
    }

    return null; // Return null if no path is found
}
function getNeighbors(node: Node, grid: Node[][]): Node[] {
    const neighbors: Node[] = [];
    const directions = [
        { x: 0, y: 1 },   // Down
        { x: 1, y: 0 },   // Right
        { x: 0, y: -1 },  // Up
        { x: -1, y: 0 }   // Left
    ];

    for (const dir of directions) {
        const newX = node.x + dir.x;
        const newY = node.y + dir.y;

        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
            neighbors.push(grid[newX][newY]);
        }
    }

    return neighbors;
}
function createGrid(rows: number, cols: number): Node[][] {
    const grid: Node[][] = [];
    for (let i = 0; i < rows; i++) {
        const row: Node[] = [];
        for (let j = 0; j < cols; j++) {
            row.push(new Node(i, j));
        }
        grid.push(row);
    }
    return grid;
}
const grid = createGrid(5, 5); // 5x5 grid
const start = grid[0][0];       // Starting node
const goal = grid[4][4];        // Goal node

const path = aStar(start, goal, grid);

if (path) {
    console.log("Path found:");
    console.log(path.map(node => `[${node.x}, ${node.y}]`));
} else {
    console.log("No path found");
}
