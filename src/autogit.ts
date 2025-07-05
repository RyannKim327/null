interface Node {
    x: number;
    y: number;
    g: number; // Cost from start to this node
    h: number; // Heuristic cost to goal
    f: number; // Total cost (g + h)
    parent?: Node; // To reconstruct the path
}

class AStar {
    private start: Node;
    private goal: Node;
    private openList: Node[];
    private closedList: Set<string>;
    private grid: number[][];

    constructor(grid: number[][], start: Node, goal: Node) {
        this.grid = grid;
        this.start = start;
        this.goal = goal;
        this.openList = [];
        this.closedList = new Set();
    }

    private heuristic(node: Node): number {
        return Math.abs(node.x - this.goal.x) + Math.abs(node.y - this.goal.y); // Manhattan distance
    }

    private getNeighbors(node: Node): Node[] {
        const neighbors: Node[] = [];
        const directions = [
            { dx: 0, dy: 1 }, // right
            { dx: 1, dy: 0 }, // down
            { dx: 0, dy: -1 }, // left
            { dx: -1, dy: 0 } // up
        ];

        for (const dir of directions) {
            const newX = node.x + dir.dx;
            const newY = node.y + dir.dy;

            // Check if the new position is within bounds and not an obstacle
            if (newX >= 0 && newX < this.grid.length && newY >= 0 && newY < this.grid[0].length && this.grid[newX][newY] === 0) {
                neighbors.push({ x: newX, y: newY, g: 0, h: 0, f: 0 });
            }
        }

        return neighbors;
    }

    public findPath(): Node[] | null {
        this.start.g = 0;
        this.start.h = this.heuristic(this.start);
        this.start.f = this.start.g + this.start.h;

        this.openList.push(this.start);

        while (this.openList.length > 0) {
            // Sort open list by f value
            this.openList.sort((a, b) => a.f - b.f);
            const currentNode = this.openList.shift() as Node; // Get node with lowest f

            // Check if we reached the goal
            if (currentNode.x === this.goal.x && currentNode.y === this.goal.y) {
                return this.reconstructPath(currentNode);
            }

            // Move current node to closed list
            this.closedList.add(`${currentNode.x},${currentNode.y}`);

            // Get neighbors
            const neighbors = this.getNeighbors(currentNode);
            for (const neighbor of neighbors) {
                if (this.closedList.has(`${neighbor.x},${neighbor.y}`)) {
                    continue; // Ignore the neighbor which is already evaluated
                }

                const tentativeG = currentNode.g + 1; // Assuming cost to move to neighbor is 1

                const existingNode = this.openList.find(n => n.x === neighbor.x && n.y === neighbor.y);
                if (!existingNode) {
                    // This node is not in the open list, add it
                    neighbor.g = tentativeG;
                    neighbor.h = this.heuristic(neighbor);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = currentNode;
                    this.openList.push(neighbor);
                } else if (tentativeG < existingNode.g) {
                    // This is a better path
                    existingNode.g = tentativeG;
                    existingNode.f = existingNode.g + existingNode.h;
                    existingNode.parent = currentNode;
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

        return path.reverse(); // Reverse the path to get it from start to goal
    }
}

// Example usage:
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

const start: Node = { x: 0, y: 0, g: 0, h: 0, f: 0 };
const goal: Node = { x: 4, y: 4, g: 0, h: 0, f: 0 };

const astar = new AStar(grid, start, goal);
const path = astar.findPath();

if (path) {
    console.log("Path found:");
    path.forEach(node => console.log(`(${node.x}, ${node.y})`));
} else {
    console.log("No path found.");
}
