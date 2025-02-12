class Node {
    constructor(
        public position: [number, number],
        public gCost: number, // Cost from start to the current node
        public hCost: number, // Heuristic cost to the goal
        public parent: Node | null = null
    ) {}

    get fCost(): number {
        return this.gCost + this.hCost; // Total cost
    }
}
function heuristic(a: [number, number], b: [number, number]): number {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
function aStar(start: [number, number], goal: [number, number], grid: number[][]): [number, number][] | null {
    const openSet: Node[] = [];
    const closedSet: Set<string> = new Set();
    
    const startNode = new Node(start, 0, heuristic(start, goal));
    openSet.push(startNode);

    while (openSet.length > 0) {
        // Sort nodes by fCost and fetch the lowest one
        openSet.sort((a, b) => a.fCost - b.fCost);
        const currentNode = openSet.shift() as Node;

        // Check if we reached the goal
        if (currentNode.position[0] === goal[0] && currentNode.position[1] === goal[1]) {
            const path: [number, number][] = [];
            let temp: Node | null = currentNode;
            while (temp) {
                path.push(temp.position);
                temp = temp.parent;
            }
            return path.reverse(); // Return the path from start to goal
        }

        closedSet.add(currentNode.position.toString());

        // Generate neighbors (assuming 4-directional movement)
        const neighbors = [
            [currentNode.position[0] + 1, currentNode.position[1]],
            [currentNode.position[0] - 1, currentNode.position[1]],
            [currentNode.position[0], currentNode.position[1] + 1],
            [currentNode.position[0], currentNode.position[1] - 1]
        ];

        for (const neighborPos of neighbors) {
            const [x, y] = neighborPos;

            // Check grid bounds and obstacles
            if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === 1) {
                continue; // Skip out-of-bounds or blocked nodes
            }

            const neighborKey = neighborPos.toString();
            if (closedSet.has(neighborKey)) {
                continue; // Skip if already evaluated
            }

            const gCost = currentNode.gCost + 1; // Cost to move to neighbor
            let neighborNode = openSet.find(node => node.position.toString() === neighborKey);

            if (!neighborNode) {
                // Create a new neighbor node
                neighborNode = new Node(neighborPos, gCost, heuristic(neighborPos, goal), currentNode);
                openSet.push(neighborNode);
            } else if (gCost < neighborNode.gCost) {
                // Update the neighbor node with a better path
                neighborNode.gCost = gCost;
                neighborNode.parent = currentNode;
            }
        }
    }
    
    return null; // No path found
}
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

const start: [number, number] = [0, 0];
const goal: [number, number] = [4, 4];

const path = aStar(start, goal, grid);
console.log(path);
