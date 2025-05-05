type Node = {
    x: number;
    y: number;
    g: number; // Cost from start to current node
    h: number; // Heuristic cost from current node to goal
    f: number; // Total cost
    parent?: Node; // To reconstruct the path
};

function h(nodeA: Node, nodeB: Node): number {
    // Heuristic: Manhattan distance
    return Math.abs(nodeA.x - nodeB.x) + Math.abs(nodeA.y - nodeB.y);
}

function getNeighbors(node: Node, grid: number[][]): Node[] {
    const neighbors: Node[] = [];
    const directions = [
        { x: 0, y: -1 }, // Up
        { x: 0, y: 1 },  // Down
        { x: -1, y: 0 }, // Left
        { x: 1, y: 0 },  // Right
    ];

    for (const dir of directions) {
        const newX = node.x + dir.x;
        const newY = node.y + dir.y;

        // Check bounds and obstacles
        if (newX >= 0 && newY >= 0 && newY < grid.length && newX < grid[0].length && grid[newY][newX] === 0) {
            neighbors.push({ x: newX, y: newY, g: 0, h: 0, f: 0 });
        }
    }

    return neighbors;
}

function astar(grid: number[][], start: Node, goal: Node): Node[] | null {
    const openSet: Node[] = [start];
    const closedSet: Node[] = [];

    while (openSet.length > 0) {
        // Get the node with the lowest f value
        openSet.sort((a, b) => a.f - b.f);
        const currentNode = openSet.shift()!;

        // Check if we reached the goal
        if (currentNode.x === goal.x && currentNode.y === goal.y) {
            const path: Node[] = [];
            let temp: Node | undefined = currentNode;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse(); // Return reversed path
        }

        closedSet.push(currentNode);

        // Get neighbors
        const neighbors = getNeighbors(currentNode, grid);
        for (const neighbor of neighbors) {
            const tentativeGScore = currentNode.g + 1; // Assuming a cost of 1 to move to a neighbor

            // Check if neighbor is in closed set
            if (closedSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                continue; // Ignore the neighbor which is already evaluated
            }

            if (!openSet.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                openSet.push(neighbor);
            } else if (tentativeGScore >= neighbor.g) {
                continue; // This is not a better path
            }

            // This path is the best until now. Record it!
            neighbor.parent = currentNode;
            neighbor.g = tentativeGScore;
            neighbor.h = h(neighbor, goal);
            neighbor.f = neighbor.g + neighbor.h;
        }
    }

    return null; // No path found
}

// Example usage
const grid = [
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
];

const startNode: Node = { x: 0, y: 0, g: 0, h: 0, f: 0 };
const goalNode: Node = { x: 3, y: 4, g: 0, h: 0, f: 0 };

const path = astar(grid, startNode, goalNode);
console.log(path); // Should print the path from start to goal
