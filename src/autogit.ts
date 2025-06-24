class Node {
    x: number;
    y: number;
    gCost: number = 0; // Cost from start to this node
    hCost: number = 0; // Heuristic cost from this node to goal
    fCost: number = 0; // Total cost (gCost + hCost)
    parent: Node | null = null;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    calculateFCost(): void {
        this.fCost = this.gCost + this.hCost;
    }
}
function heuristic(nodeA: Node, nodeB: Node): number {
    // Use Manhattan distance as the heuristic
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);
}
function containsNode(list: Node[], node: Node): boolean {
    return list.some((n) => n.x === node.x && n.y === node.y);
}
function reconstructPath(endNode: Node): Node[] {
    const path: Node[] = [];
    let current = endNode;
    while (current !== null) {
        path.push(current);
        current = current.parent!;
    }
    return path.reverse();
}
function aStar(start: Node, goal: Node, grid: Node[][]): Node[] | null {
    const openList: Node[] = [start];
    const closedList: Node[] = [];

    while (openList.length > 0) {
        // Find the node with the lowest fCost in the open list
        let current = openList.reduce((min, node) => (node.fCost < min.fCost ? node : min), openList[0]);

        // If we've reached the goal, reconstruct the path
        if (current.x === goal.x && current.y === goal.y) {
            return reconstructPath(current);
        }

        // Move the current node from the open list to the closed list
        openList.splice(openList.indexOf(current), 1);
        closedList.push(current);

        // Get neighbors of the current node
        const neighbors = getNeighbors(current, grid);

        for (const neighbor of neighbors) {
            // Skip if the neighbor is already in the closed list
            if (containsNode(closedList, neighbor)) continue;

            const tentativeGCost = current.gCost + 1; // Assuming uniform cost

            // If the neighbor is not in the open list or has a better gCost, update it
            if (!containsNode(openList, neighbor) || tentativeGCost < neighbor.gCost) {
                neighbor.gCost = tentativeGCost;
                neighbor.hCost = heuristic(neighbor, goal);
                neighbor.calculateFCost();
                neighbor.parent = current;

                if (!containsNode(openList, neighbor)) {
                    openList.push(neighbor);
                }
            }
        }
    }

    // If no path is found, return null
    return null;
}
// Example grid where 0 = walkable, 1 = obstacle
const grid: number[][] = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
];
function getNeighbors(node: Node, grid: number[][]): Node[] {
    const directions = [
        { dx: -1, dy: 0 }, // Left
        { dx: 1, dy: 0 },  // Right
        { dx: 0, dy: -1 }, // Up
        { dx: 0, dy: 1 },  // Down
    ];

    const neighbors: Node[] = [];
    for (const dir of directions) {
        const newX = node.x + dir.dx;
        const newY = node.y + dir.dy;

        // Check boundaries and obstacles
        if (
            newX >= 0 &&
            newX < grid.length &&
            newY >= 0 &&
            newY < grid[0].length &&
            grid[newX][newY] === 0
        ) {
            neighbors.push(new Node(newX, newY));
        }
    }
    return neighbors;
}
// Initialize start and goal nodes
const start = new Node(0, 0);
const goal = new Node(2, 3);

// Run A* algorithm
const path = aStar(start, goal, grid);

if (path) {
    console.log("Path found:", path.map((node) => `(${node.x}, ${node.y})`));
} else {
    console.log("No path found.");
}
