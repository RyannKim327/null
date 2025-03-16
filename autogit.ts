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

    // Add methods to get neighbors, check if a node is walkable, etc.
    getNeighbors(node: Node): Node[] {
        const neighbors: Node[] = [];
        const directions = [
            { x: 0, y: -1 }, // Up
            { x: 1, y: 0 },  // Right
            { x: 0, y: 1 },  // Down
            { x: -1, y: 0 }  // Left
        ];

        for (const dir of directions) {
            const newX = node.x + dir.x;
            const newY = node.y + dir.y;

            if (newX >= 0 && newX < this.width && newY >= 0 && newY < this.height) {
                neighbors.push(this.nodes[newY][newX]);
            }
        }

        return neighbors;
    }
}
function heuristic(a: Node, b: Node): number {
    // Using Manhattan distance as the heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStar(grid: Grid, start: Node, goal: Node): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: Set<Node> = new Set();

    start.g = 0;
    start.h = heuristic(start, goal);
    start.f = start.h;

    while (openSet.length > 0) {
        // Sort openSet by f value and get the node with the lowest f
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;

        // If we reached the goal, reconstruct the path
        if (current === goal) {
            const path: Node[] = [];
            let temp: Node | null = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return reversed path
        }

        closedSet.add(current);

        for (const neighbor of grid.getNeighbors(current)) {
            if (closedSet.has(neighbor)) {
                continue; // Ignore the neighbor which is already evaluated
            }

            const tentativeG = current.g + 1; // Assuming cost between nodes is 1

            if (!openSet.includes(neighbor)) {
                openSet.push(neighbor); // Discover a new node
            } else if (tentativeG >= neighbor.g) {
                continue; // This is not a better path
            }

            // This path is the best until now. Record it!
            neighbor.parent = current;
            neighbor.g = tentativeG;
            neighbor.h = heuristic(neighbor, goal);
            neighbor.f = neighbor.g + neighbor.h;
        }
    }

    return null; // No path found
}
const grid = new Grid(10, 10);
const start = grid.nodes[0][0]; // Starting point
const goal = grid.nodes[9][9];   // Goal point

const path = aStar(grid, start, goal);

if (path) {
    console.log("Path found:", path);
} else {

