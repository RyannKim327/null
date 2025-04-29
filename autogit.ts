interface Node {
    x: number;
    y: number;
    g: number; // Cost from start node
    h: number; // Heuristic cost to goal node
    f: number; // Total cost (g + h)
    parent?: Node; // To reconstruct the path
}

class AStar {
    private openList: Node[] = [];
    private closedList: Node[] = [];
    private grid: number[][];

    constructor(grid: number[][]) {
        this.grid = grid; // The grid representation of the environment
    }

    private heuristic(a: Node, b: Node): number {
        // Using Manhattan distance as heuristic
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }

    private getNeighbors(node: Node): Node[] {
        const neighbors: Node[] = [];
        const directions = [
            { x: 0, y: -1 }, // Up
            { x: 1, y: 0 }, // Right
            { x: 0, y: 1 }, // Down
            { x: -1, y: 0 } // Left
        ];

        for (const dir of directions) {
            const newX = node.x + dir.x;
            const newY = node.y + dir.y;

            // Check for bounds and obstacles (assuming 1 is an obstacle and 0 is walkable)
            if (
                newX >= 0 &&
                newY >= 0 &&
                newX < this.grid.length &&
                newY < this.grid[0].length &&
                this.grid[newX][newY] === 0
            ) {
                neighbors.push({ x: newX, y: newY, g: 0, h: 0, f: 0 });
            }
        }
        return neighbors;
    }

    public findPath(start: Node, goal: Node): Node[] | null {
        this.openList.push(start);

        while (this.openList.length > 0) {
            // Sort the open list by f (total cost) value and get the node with the smallest f
            this.openList.sort((a, b) => a.f - b.f);
            const currentNode = this.openList.shift()!; // Get node with the lowest f

            // Check if we have reached the goal
            if (currentNode.x === goal.x && currentNode.y === goal.y) {
                return this.reconstructPath(currentNode);
            }

            // Move current node to the closed list
            this.closedList.push(currentNode);

            // Get neighbors
            const neighbors = this.getNeighbors(currentNode);

            for (const neighbor of neighbors) {
                // Check if the neighbor is in the closed list
                if (this.closedList.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                    continue; // Ignore this neighbor
                }

                // Calculate costs
                neighbor.g = currentNode.g + 1; // Assume cost between nodes is 1
                neighbor.h = this.heuristic(neighbor, goal);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.parent = currentNode;

                // Check if neighbor is in the open list and if it has a higher f value (we already found a better path)
                const existingNode = this.openList.find(node => node.x === neighbor.x && node.y === neighbor.y);
                if (existingNode && existingNode.f <= neighbor.f) {
                    continue; // Skip this neighbor
                }

                // Add the neighbor to the open list if not already present
                if (!existingNode) {
                    this.openList.push(neighbor);
                }
            }
        }

        return null; // No path found
    }

    private reconstructPath(node: Node): Node[] {
        const path: Node[] = [];
        let current: Node | undefined = node;
        while (current) {
            path.push(current);
            current = current.parent;
        }
        return path.reverse(); // Return the path from start to goal
    }
}

// Example Usage:
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0]
];

const aStar = new AStar(grid);
const start = { x: 0, y: 0, g: 0, h: 0, f: 0 };
const goal = { x: 4, y: 4, g: 0, h: 0, f: 0 };

const path = aStar.findPath(start, goal);
if (path) {
    console.log("Path found:", path);
} else {
    console.log("No path found.");
}
