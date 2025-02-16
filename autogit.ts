type Node = {
    x: number;
    y: number;
    g: number; // Cost from start node to this node
    h: number; // Heuristic cost estimate to goal
    f: number; // Total cost (g + h)
    parent?: Node; // To track the path
};

function heuristic(a: Node, b: Node): number {
    // Using Manhattan distance as heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function aStar(start: Node, goal: Node, grid: number[][]): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: Set<string> = new Set();

    while (openSet.length > 0) {
        // Sort to find the node with the lowest f value
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift() as Node;

        // Check if we reached the goal
        if (current.x === goal.x && current.y === goal.y) {
            const path: Node[] = [];
            let temp: Node | undefined = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse();
        }

        closedSet.add(`${current.x},${current.y}`);

        // Get neighbors
        const neighbors = getNeighbors(current, grid);
        for (const neighbor of neighbors) {
            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) {
                continue; // Ignore the neighbor which is already evaluated
            }

            const tentative_g = current.g + 1; // Assuming moving to neighbor costs 1

            if (!openSet.includes(neighbor)) {
                openSet.push(neighbor); // Discover a new node
            } else if (tentative_g >= neighbor.g) {
                continue; // This is not a better path
            }

            // This path is the best until now
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
        { x: 0, y: 1 },  // right
        { x: 0, y: -1 }, // left
        { x: 1, y: 0 },  // down
        { x: -1, y: 0 }  // up
    ];

    for (const dir of directions) {
        const newX = node.x + dir.x;
        const newY = node.y + dir.y;

        if (
            newX >= 0 &&
            newY >= 0 &&
            newX < grid.length &&
            newY < grid[0].length &&
            grid[newX][newY] === 0 // Assuming 0 is walkable
        ) {
            neighbors.push({ x: newX, y: newY, g: 0, h: 0, f: 0 });
        }
    }

    return neighbors;
}

// Example usage:
const grid = [
   [0, 0, 0, 0],
   [0, 1, 1, 0],
   [0, 0, 0, 0],
   [0, 1, 0, 0]
];

const start: Node = { x: 0, y: 0, g: 0, h: 0, f: 0 };
const goal: Node = { x: 3, y: 3, g: 0, h: 0, f: 0 };

const path = aStar(start, goal, grid);
console.log(path); // Output the path from start to goal
