class Node {
    constructor(
        public position: [number, number],
        public g: number = 0, // Cost from start node
        public h: number = 0, // Cost to goal node (heuristic)
        public f: number = 0, // Total cost
        public parent: Node | null = null // Parent node for path reconstruction
    ) {}
}
function heuristic(a: [number, number], b: [number, number]): number {
    // Manhattan distance
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}
function aStarSearch(start: [number, number], goal: [number, number], grid: number[][]): Node[] | null {
    const openList: Node[] = [];
    const closedList: Node[] = [];
    const startNode = new Node(start);
    const goalNode = new Node(goal);
    
    openList.push(startNode);

    while (openList.length > 0) {
        // Sort open list to find the node with the lowest f value
        openList.sort((a, b) => a.f - b.f);
        const currentNode = openList.shift()!;

        // Goal check
        if (currentNode.position[0] === goal[0] && currentNode.position[1] === goal[1]) {
            const path: Node[] = [];
            let temp: Node | null = currentNode;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return reversed path
        }

        // Add current node to closed list
        closedList.push(currentNode);

        // Get neighbors
        const neighbors = getNeighbors(currentNode.position, grid);

        for (const pos of neighbors) {
            if (closedList.some(node => node.position[0] === pos[0] && node.position[1] === pos[1])) {
                continue; // Ignore the neighbor which is already evaluated
            }

            const gCost = currentNode.g + 1; // Assume cost between nodes is 1
            const hCost = heuristic(pos, goalNode.position);
            const neighborNode = new Node(pos, gCost, hCost, gCost + hCost, currentNode);

            if (openList.some(node => node.position[0] === pos[0] && node.position[1] === pos[1] && node.g <= gCost)) {
                continue; // This is not a better path
            }

            // Add neighbor to open list
            openList.push(neighborNode);
        }
    }

    return null; // No path found
}
function getNeighbors(position: [number, number], grid: number[][]): [number, number][] {
    const neighbors: [number, number][] = [];
    const [x, y] = position;

    // Define possible moves (4 directions)
    const directions = [
        [0, 1],  // Down
        [1, 0],  // Right
        [0, -1], // Up
        [-1, 0]  // Left
    ];

    for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        
        // Check bounds and grid value (0 is walkable, 1 is blocked)
        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] === 0) {
            neighbors.push([newX, newY]);
        }
    }

    return neighbors;
}
const grid = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];

const start: [number, number] = [0, 0];
const goal: [number, number] = [4, 3];

const path = aStarSearch(start, goal, grid);
console.log(path);
