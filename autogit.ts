interface Node {
    x: number;
    y: number;
    f: number; // Total cost (g + h)
    g: number; // Cost from start to this node
    h: number; // Heuristic cost from this node to goal
    parent?: Node; // Parent node in the path
}

class AStarSearch {
    private openSet: Node[] = [];
    private closedSet: Set<string> = new Set();

    constructor(private grid: number[][], private start: Node, private goal: Node) {}

    private heuristic(a: Node, b: Node): number {
        // Manhattan distance
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }

    private getNeighbors(node: Node): Node[] {
        const neighbors: Node[] = [];

        const directions = [
            { x: 0, y: -1 }, // Up
            { x: 0, y: 1 },  // Down
            { x: -1, y: 0 }, // Left
            { x: 1, y: 0 },  // Right
        ];

        for (const { x: dx, y: dy } of directions) {
            const newX = node.x + dx;
            const newY = node.y + dy;
            if (newX >= 0 && newY >= 0 && newX < this.grid.length && newY < this.grid[0].length) {
                if (this.grid[newX][newY] === 0) { // Check if the cell is walkable
                    neighbors.push({ x: newX, y: newY, f: 0, g: 0, h: 0 });
                }
            }
        }

        return neighbors;
    }

    public search(): Node[] | null {
        this.start.g = 0;
        this.start.h = this.heuristic(this.start, this.goal);
        this.start.f = this.start.g + this.start.h;
        this.openSet.push(this.start);

        while (this.openSet.length > 0) {
            // Sort openSet by f value and get the node with the lowest f
            this.openSet.sort((a, b) => a.f - b.f);
            const current = this.openSet.shift() as Node;

            // Goal reached
            if (current.x === this.goal.x && current.y === this.goal.y) {
                return this.constructPath(current);
            }

            // Move current to closed set
            this.closedSet.add(`${current.x},${current.y}`);

            // Get neighbors
            const neighbors = this.getNeighbors(current);

            for (const neighbor of neighbors) {
                const neighborKey = `${neighbor.x},${neighbor.y}`;

                // Ignore the neighbor which is already evaluated.
                if (this.closedSet.has(neighborKey)) {
                    continue;
                }

                // g score is the shortest distance from start to the neighbor
                const gScore = current.g + 1; // Assumed cost to move to a neighbor is 1

                // Discover a new node
                let isBestPath = false;
                if (!this.openSet.some(n => n.x === neighbor.x && n.y === neighbor.y)) {
                    // New node, add it to open set
                    isBestPath = true;
                    neighbor.h = this.heuristic(neighbor, this.goal);
                    this.openSet.push({ ...neighbor, g: gScore, f: gScore + neighbor.h, parent: current });
                } else if (gScore < neighbor.g) {
                    // This path is the best until now, record it
                    isBestPath = true;
                    neighbor.g = gScore;
                    neighbor.f = gScore + neighbor.h;
                    neighbor.parent = current;
                }

                // Update the neighbor if a better path is found
                if (isBestPath) {
                    neighbor.parent = current;
                }
            }
        }

        // No path found
        return null;
    }

    private constructPath(node: Node): Node[] {
        const path: Node[] = [];
        let current: Node | undefined = node;
        while (current) {
            path.push(current);
            current = current.parent;
        }
        return path.reverse(); // Reverse to get the correct order from start to goal
    }
}

// Example Usage
const grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
];

const start: Node = { x: 0, y: 0, f: 0, g: 0, h: 0 };
const goal: Node = { x: 4, y: 3, f: 0, g: 0, h: 0 };

const astar = new AStarSearch(grid, start, goal);
const path = astar.search();

if (path) {
    console.log('Path found: ', path);
} else {
    console.log('No path found');
}
