class Node {
    pos: [number, number];
    g: number; // Cost from start node
    h: number; // Heuristic cost to goal node
    f: number; // Total cost
    parent: Node | null;

    constructor(pos: [number, number], parent: Node | null = null) {
        this.pos = pos;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.parent = parent;
    }
}

function heuristic(a: [number, number], b: [number, number]): number {
    // Use Manhattan distance as heuristic
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function astar(start: [number, number], goal: [number, number], grid: number[][]): Node[] | null {
    const openSet: Node[] = [];
    const closedSet: Node[] = [];
    
    const startNode = new Node(start);
    const goalNode = new Node(goal);

    openSet.push(startNode);

    while (openSet.length > 0) {
        // Get the node with the lowest f value
        openSet.sort((a, b) => a.f - b.f);
        const currentNode = openSet.shift()!; // Take the first (the lowest f value)

        // Check if we've reached the goal
        if (currentNode.pos[0] === goalNode.pos[0] && currentNode.pos[1] === goalNode.pos[1]) {
            const path: Node[] = [];
            let temp: Node | null = currentNode;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return reversed path
        }

        closedSet.push(currentNode);

        // Get neighbors (4-directional movement)
        const neighbors = [
            [currentNode.pos[0] + 1, currentNode.pos[1]],
            [currentNode.pos[0] - 1, currentNode.pos[1]],
            [currentNode.pos[0], currentNode.pos[1] + 1],
            [currentNode.pos[0], currentNode.pos[1] - 1],
        ];

        for (const neighborPos of neighbors) {
            const [x, y] = neighborPos;

            // Check grid boundaries and obstacles
            if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 1) {
                continue; // Skip out of bounds or obstacles
            }

            const neighborNode = new Node(neighborPos, currentNode);
            if (closedSet.find(node => node.pos[0] === x && node.pos[1] === y)) {
                continue; // Ignore the neighbor which is already evaluated
            }

            // Calculate g, h, f values
            neighborNode.g = currentNode.g + 1; // Assuming cost to move to neighbor is 1
            neighborNode.h = heuristic(neighborNode.pos, goalNode.pos);
            neighborNode.f = neighborNode.g + neighborNode.h;

            // Check if it's already in the open set and compare f values
            const existingNode = openSet.find(node => node.pos[0] === x && node.pos[1] === y);
            if (existingNode && neighborNode.g >= existingNode.g) {
                continue; // Skip if this path is worse
            }

            openSet.push(neighborNode); // Add neighbor node to open set if it's not there
        }
    }

    return null; // Return null if there is no path
}

// Example usage
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

const start = [0, 0];
const goal = [4, 4];
const path = astar(start, goal, grid);

console.log(path?.map(node => node.pos)); // Outputs the path from start to goal
