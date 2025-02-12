class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to current node
    public h: number; // Heuristic cost to the goal
    public f: number; // Total cost
    public parent: Node | null;

    constructor(x: number, y: number, parent: Node | null, g: number = 0, h: number = 0) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }
}

function heuristic(nodeA: Node, nodeB: Node): number {
    // Using Manhattan distance as heuristic
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);
}

function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
    const openSet: Node[] = [];
    const closedSet: Set<string> = new Set();

    openSet.push(start);

    while (openSet.length > 0) {
        // Sort openSet by f value and pop the lowest
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;
        
        // Goal check
        if (current.x === goal.x && current.y === goal.y) {
            const path: Node[] = [];
            let temp: Node | null = current;

            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }

            return path.reverse(); // Return reversed path
        }

        closedSet.add(`${current.x},${current.y}`);

        // Get neighbors
        const neighbors = getNeighbors(current, grid);
        
        for (const neighbor of neighbors) {
            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) {
                continue; // Ignore already evaluated neighbor
            }

            const tentative_g = current.g + 1; // Distance from start to neighbor

            if (!openSet.some(n => n.x === neighbor.x && n.y === neighbor.y)) {
                openSet.push(neighbor); // Discover new node
            } else if (tentative_g >= neighbor.g) {
                continue; // Not a better path
            }

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
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // Right, Down, Left, Up

    for (const [dx, dy] of directions) {
        const newX = node.x + dx;
        const newY = node.y + dy;

        if (newX >= 0 && newY >= 0 && newX < grid.length && newY < grid[0].length && grid[newX][newY] === 0) {
            neighbors.push(new Node(newX, newY, null));
        }
    }

    return neighbors;
}

// Example usage:
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
];
const start = new Node(0, 0, null);
const goal = new Node(4, 4, null);
const path = aStar(start, goal, grid);

if (path) {
    console.log("Path found:", path.map(node => `(${node.x}, ${node.y})`));
} else {
    console.log("No path found");
}
