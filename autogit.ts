class Node {
    public x: number;
    public y: number;
    public g: number; // Cost from start to this node
    public h: number; // Heuristic cost to goal
    public f: number; // Total cost (g + h)
    public parent: Node | null = null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }
}
function aStar(start: Node, goal: Node, grid: number[][]): Node[] {
    const openSet: Node[] = [start];
    const closedSet: Set<string> = new Set();

    const heuristic = (nodeA: Node, nodeB: Node): number => {
        return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y); // Manhattan distance
    };

    while (openSet.length > 0) {
        // Find the node with the lowest f cost
        let current: Node = openSet[0];
        for (const node of openSet) {
            if (node.f < current.f) {
                current = node;
            }
        }

        // If we reached the goal, reconstruct the path
        if (current.x === goal.x && current.y === goal.y) {
            const path: Node[] = [];
            let temp: Node | null = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return the path from start to goal
        }

        // Move current node to closed set
        closedSet.add(`${current.x},${current.y}`);
        openSet.splice(openSet.indexOf(current), 1);

        // Check all neighbors
        const neighbors = [
            new Node(current.x - 1, current.y), // Left
            new Node(current.x + 1, current.y), // Right
            new Node(current.x, current.y - 1), // Up
            new Node(current.x, current.y + 1)  // Down
        ];

        for (const neighbor of neighbors) {
            // Check if neighbor is out of bounds or blocked
            if (neighbor.x < 0 || neighbor.x >= grid.length || neighbor.y < 0 || neighbor.y >= grid[0].length || grid[neighbor.x][neighbor.y] === 1) {
                continue;
            }

            // If it's in the closed set, skip it
            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) {
                continue;
            }

            // Calculate g, h, and f for the neighbor
            const tentativeG = current.g + 1; // Assuming cost between nodes is 1
            if (!openSet.includes(neighbor)) {
                openSet.push(neighbor); // Discover a new node
            } else if (tentativeG >= neighbor.g) {
                continue; // Not a better path
            }

            // This path is the best until now, record it!
            neighbor.parent = current;
            neighbor.g = tentativeG;
            neighbor.h = heuristic(neighbor, goal);
            neighbor.f = neighbor.g + neighbor.h;
        }
    }

    return []; // No path found
}
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
];

const start = new Node(0, 0);
const goal = new Node(4, 4);
const path = aStar(start, goal, grid);

console.log(path.map(node => `(${node.x}, ${node.y})`)); // Outputs the path
