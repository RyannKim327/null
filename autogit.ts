class Node {
    constructor(
        public position: [number, number],
        public g: number, // Cost from start to current node
        public h: number, // Heuristic cost to goal
        public parent: Node | null = null
    ) {}

    get f(): number {
        return this.g + this.h;
    }
}

function heuristic(a: [number, number], b: [number, number]): number {
    // Use Manhattan distance as heuristic
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function AStar(start: [number, number], goal: [number, number], grid: number[][]) {
    const openList: Node[] = [];
    const closedList: Set<string> = new Set();

    openList.push(new Node(start, 0, heuristic(start, goal)));

    while (openList.length > 0) {
        // Sort by lowest f value and select the node
        openList.sort((a, b) => a.f - b.f);
        const currentNode = openList.shift()!;

        // Check if we reached the goal
        if (currentNode.position[0] === goal[0] && currentNode.position[1] === goal[1]) {
            const path: [number, number][] = [];
            let curr: Node | null = currentNode;
            while (curr) {
                path.unshift(curr.position);
                curr = curr.parent;
            }
            return path; // Return the path from start to goal
        }

        closedList.add(currentNode.position.toString());

        // Get neighbors
        const neighbors = getNeighbors(currentNode.position, grid);

        for (const neighbor of neighbors) {
            if (closedList.has(neighbor.toString())) {
                continue; // Already evaluated
            }

            const gCost = currentNode.g + 1; // Assuming cost of 1 for moving to neighbor
            const hCost = heuristic(neighbor, goal);
            const neighborNode = new Node(neighbor, gCost, hCost, currentNode);

            // Check if this path to the neighbor is better
            const existingNode = openList.find(n => n.position.toString() === neighborNode.position.toString());
            if (!existingNode || gCost < existingNode.g) {
                openList.push(neighborNode);
            }
        }
    }

    return []; // No path found
}

function getNeighbors(position: [number, number], grid: number[][]): [number, number][] {
    const neighbors: [number, number][] = [];
    const directions = [
        [0, 1],  // Right
        [1, 0],  // Down
        [0, -1], // Left
        [-1, 0], // Up
    ];

    for (const [dx, dy] of directions) {
        const newX = position[0] + dx;
        const newY = position[1] + dy;
        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] === 0) {
            neighbors.push([newX, newY]);
        }
    }

    return neighbors;
}

// Example usage
const grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
];

const path = AStar([0, 0], [4, 3], grid);
console.log('Path from start to goal:', path);
