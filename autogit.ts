interface Node {
    position: { x: number; y: number };
    g: number; // cost from start to current node
    h: number; // heuristic cost to goal
    f: number; // total cost (g + h)
    parent?: Node; // for path reconstruction
}
function heuristic(a: { x: number; y: number }, b: { x: number; y: number }): number {
    // Manhattan distance as heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function getNeighbors(node: Node, grid: number[][]): Node[] {
    const directions = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
    ];
    const neighbors: Node[] = [];

    for (const dir of directions) {
        const newX = node.position.x + dir.x;
        const newY = node.position.y + dir.y;
        // Check boundaries and traversability
        if (
            newX >= 0 && newX < grid[0].length &&
            newY >= 0 && newY < grid.length &&
            grid[newY][newX] === 0 // assuming 0 is traversable
        ) {
            neighbors.push({
                position: { x: newX, y: newY },
                g: 0,
                h: 0,
                f: 0,
            });
        }
    }
    return neighbors;
}
function aStar(grid: number[][], start: { x: number; y: number }, goal: { x: number; y: number }): { path: { x: number; y: number }[] | null } {
    const openSet: Node[] = [];
    const closedSet: Set<string> = new Set();

    const startNode: Node = {
        position: start,
        g: 0,
        h: heuristic(start, goal),
        f: 0,
    };
    startNode.f = startNode.g + startNode.h;

    openSet.push(startNode);

    while (openSet.length > 0) {
        // Sort by lowest f cost
        openSet.sort((a, b) => a.f - b.f);
        const current = openSet.shift()!;

        if (current.position.x === goal.x && current.position.y === goal.y) {
            // Reconstruct path
            const path = [];
            let temp: Node | undefined = current;
            while (temp) {
                path.push(temp.position);
                temp = temp.parent;
            }
            return { path: path.reverse() };
        }

        closedSet.add(`${current.position.x},${current.position.y}`);

        const neighbors = getNeighbors(current, grid);
        for (const neighbor of neighbors) {
            const neighborKey = `${neighbor.position.x},${neighbor.position.y}`;
            if (closedSet.has(neighborKey)) continue;

            const tentativeG = current.g + 1; // assuming uniform cost

            // Check if neighbor is in openSet
            const existingNode = openSet.find(n => n.position.x === neighbor.position.x && n.position.y === neighbor.position.y);
            if (!existingNode || tentativeG < existingNode.g) {
                neighbor.g = tentativeG;
                neighbor.h = heuristic(neighbor.position, goal);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = current;

                if (!existingNode) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    // No path found
    return { path: null };
}
const grid = [
    [0, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
];

const start = { x: 0, y: 0 };
const goal = { x: 3, y: 3 };

const result = aStar(grid, start, goal);
console.log(result.path);
