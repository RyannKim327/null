class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to this node
    public h: number; // Heuristic cost to goal
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

class Grid {
    public nodes: Node[][];
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.nodes = Array.from({ length: height }, (_, y) => 
            Array.from({ length: width }, (_, x) => new Node(x, y))
        );
    }

    // Add methods to set obstacles, get neighbors, etc.
}
function heuristic(a: Node, b: Node): number {
    // Using Manhattan distance as the heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStarSearch(grid: Grid, start: Node, goal: Node): Node[] | null {
    const openSet: Node[] = [];
    const closedSet: Set<Node> = new Set();

    openSet.push(start);

    while (openSet.length > 0) {
        // Sort openSet by f value and get the node with the lowest f
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;

        // If we reached the goal, reconstruct the path
        if (current.x === goal.x && current.y === goal.y) {
            const path: Node[] = [];
            let temp: Node | null = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return reversed path
        }

        closedSet.add(current);

        // Get neighbors (4-directional movement)
        const neighbors = getNeighbors(grid, current);
        for (const neighbor of neighbors) {
            if (closedSet.has(neighbor)) continue; // Ignore already evaluated nodes

            const tentativeG = current.g + 1; // Assuming cost between nodes is 1

            if (!openSet.includes(neighbor)) {
                openSet.push(neighbor); // Discover a new node
            } else if (tentativeG >= neighbor.g) {
                continue; // Not a better path
            }

            // This path is the best until now, record it
            neighbor.parent = current;
            neighbor.g = tentativeG;
            neighbor.h = heuristic(neighbor, goal);
            neighbor.f = neighbor.g + neighbor.h;
        }
    }

    return null; // No path found
}

function getNeighbors(grid: Grid, node: Node): Node[] {
    const neighbors: Node[] = [];
    const directions = [
        { x: 0, y: 1 },  // Down
        { x: 1, y: 0 },  // Right
        { x: 0, y: -1 }, // Up
        { x: -1, y: 0 }  // Left
    ];

    for (const dir of directions) {
        const newX = node.x + dir.x;
        const newY = node.y + dir.y;

        if (newX >= 0 && newX < grid.width && newY >= 0 && newY < grid.height) {
            neighbors.push(grid.nodes[newY][newX]);
        }
    }

    return neighbors;
}
const grid = new Grid(10, 10); // Create a 10x10 grid
const start = grid.nodes[0][0]; // Starting node
const goal = grid.nodes[9][9]; // Goal node

const path = aStarSearch(grid, start, goal);

if (path) {
    console.log
