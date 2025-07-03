interface Node {
    x: number;
    y: number;
    g: number; // Cost from start to this node
    h: number; // Heuristic cost estimate to target
    f: number; // Total cost (g + h)
    parent?: Node; // To reconstruct the path
}

class PriorityQueue {
    private elements: Node[] = [];

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    enqueue(node: Node): void {
        this.elements.push(node);
        this.elements.sort((a, b) => a.f - b.f);  // Sort by f value
    }

    dequeue(): Node | undefined {
        return this.elements.shift(); // Remove the node with the lowest f value
    }
}
function heuristic(a: Node, b: Node): number {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}
function aStarSearch(start: Node, goal: Node, grid: boolean[][]): Node[] | null {
    const openSet = new PriorityQueue();
    const closedSet = new Set<string>();
    const directions = [
        { dx: 0, dy: 1 }, // Right
        { dx: 1, dy: 0 }, // Down
        { dx: 0, dy: -1 }, // Left
        { dx: -1, dy: 0 } // Up
    ];

    openSet.enqueue(start);

    while (!openSet.isEmpty()) {
        const current = openSet.dequeue();

        if (!current) {
            return null; // No path found
        }

        if (current.x === goal.x && current.y === goal.y) {
            // Path found, reconstruct the path
            const path: Node[] = [];
            let temp: Node | undefined = current;

            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }

            return path.reverse(); // Return reversed path
        }

        const key = `${current.x},${current.y}`;
        if (closedSet.has(key)) {
            continue; // Already visited
        }

        closedSet.add(key);

        for (const { dx, dy } of directions) {
            const neighborX = current.x + dx;
            const neighborY = current.y + dy;

            if (neighborX < 0 || neighborX >= grid.length || neighborY < 0 || neighborY >= grid[0].length) {
                continue; // Out of bounds
            }

            if (!grid[neighborX][neighborY]) {
                continue; // Not traversable
            }

            const neighbor: Node = {
                x: neighborX,
                y: neighborY,
                g: current.g + 1, // Assuming cost is 1 for each move
                h: heuristic({ x: neighborX, y: neighborY } as Node, goal),
                f: 0
            };

            neighbor.f = neighbor.g + neighbor.h;

            if (closedSet.has(`${neighbor.x},${neighbor.y}`)) {
                continue; // Already evaluated
            }

            // Check if this neighbor is already in the open set
            const existingNodeIndex = openSet.elements.findIndex(n => n.x === neighbor.x && n.y === neighbor.y);

            if (existingNodeIndex === -1) {
                // Not in open set, we add it
                neighbor.parent = current;
                openSet.enqueue(neighbor);
            } else {
                const existingNode = openSet.elements[existingNodeIndex];
                // If the new g cost is lower, update the existing node
                if (neighbor.g < existingNode.g) {
                    existingNode.g = neighbor.g;
                    existingNode.f = existingNode.g + existingNode.h;
                    existingNode.parent = current;
                }
            }
        }
    }

    return null; // No path found
}
const grid = [
    [true, true, true, true, true],
    [true, false, false, false, true],
    [true, true, true, false, true],
    [true, false, true, true, true],
    [true, true, true, true, true],
];

const start: Node = { x: 0, y: 0, g: 0, h: 0, f: 0 };
const goal: Node = { x: 4, y: 4, g: 0, h: 0, f: 0 };

const path = aStarSearch(start, goal, grid);
if (path) {
    console.log('Path found:', path.map(node => `(${node.x}, ${node.y})`));
} else {
    console.log('No path found');
}
