class Node {
    constructor(
        public position: [number, number],
        public g: number = 0, // Cost from start to node
        public h: number = 0, // Heuristic cost from node to goal
        public f: number = 0, // Total cost
        public parent: Node | null = null
    ) {}

    calculateF() {
        this.f = this.g + this.h;
    }
}
function heuristic(a: [number, number], b: [number, number]): number {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]); // Manhattan distance
}

function aStarSearch(grid: number[][], start: [number, number], goal: [number, number]): Node[] | null {
    const openSet: Node[] = [];
    const closedSet: Set<string> = new Set();

    const startNode = new Node(start);
    const goalNode = new Node(goal);
    
    openSet.push(startNode);

    while (openSet.length > 0) {
        // Sort by lowest f value and pop the best option
        openSet.sort((a, b) => a.f - b.f);
        const currentNode = openSet.shift()!;
        
        if (currentNode.position[0] === goalNode.position[0] && currentNode.position[1] === goalNode.position[1]) {
            const path: Node[] = [];
            let temp: Node | null = currentNode;

            while (temp) {
                path.unshift(temp);
                temp = temp.parent;
            }
            return path; // Return the path found
        }

        closedSet.add(currentNode.position.toString());

        // Get neighbors (4-directional movement)
        const neighbors = [
            [currentNode.position[0] + 1, currentNode.position[1]], // Down
            [currentNode.position[0] - 1, currentNode.position[1]], // Up
            [currentNode.position[0], currentNode.position[1] + 1], // Right
            [currentNode.position[0], currentNode.position[1] - 1]  // Left
        ];

        for (const neighborPos of neighbors) {
            const [x, y] = neighborPos;
            if (
                x < 0 ||
                y < 0 ||
                x >= grid.length ||
                y >= grid[0].length ||
                grid[x][y] === 1 || // If there's an obstacle
                closedSet.has(neighborPos.toString())
            ) {
                continue; // Skip invalid or closed nodes
            }

            const neighborNode = new Node(neighborPos);
            neighborNode.g = currentNode.g + 1; // Cost from start
            neighborNode.h = heuristic(neighborPos, goalNode.position); // Heuristic cost
            neighborNode.calculateF();

            // Check if this path to the neighbor is better
            const existingNode = openSet.find(n => n.position.toString() === neighborPos.toString());

            if (!existingNode || neighborNode.g < existingNode.g) {
                neighborNode.parent = currentNode;
                if (!existingNode) {
                    openSet.push(neighborNode);
                }
            }
        }
    }

    return null; // Return null if no path was found
}
const grid = [
    [0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

const start: [number, number] = [0, 0];
const goal: [number, number] = [4, 4];

const path = aStarSearch(grid, start, goal);

if (path) {
    console.log("Path found:");
    path.forEach(node => console.log(`(${node.position[0]}, ${node.position[1]})`));
} else {
    console.log("No path found");
}
