type Position = {
    x: number;
    y: number;
};

class Node {
    position: Position;
    g: number; // Cost from start to this node
    h: number; // Heuristic cost from this node to end
    f: number; // Total cost
    parent: Node | null;

    constructor(position: Position, parent: Node | null, g = 0, h = 0) {
        this.position = position;
        this.parent = parent;
        this.g = g; 
        this.h = h;
        this.f = g + h; 
    }
}

function heuristic(a: Position, b: Position): number {
    // Use Manhattan distance as the heuristic
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function getNeighbors(position: Position): Position[] {
    // Returns adjacent cells (4-way movement)
    return [
        { x: position.x + 1, y: position.y },
        { x: position.x - 1, y: position.y },
        { x: position.x, y: position.y + 1 },
        { x: position.x, y: position.y - 1 },
    ];
}

function aStar(start: Position, goal: Position, grid: boolean[][]): Position[] | null {
    const openList: Node[] = [];
    const closedList: Node[] = [];
    
    const startNode = new Node(start, null, 0, heuristic(start, goal));
    openList.push(startNode);

    while (openList.length > 0) {
        // Sort by f value and get the node with the lowest f value
        openList.sort((a, b) => a.f - b.f);
        const currentNode = openList.shift()!; // Get the node

        // Check if we reached the goal
        if (currentNode.position.x === goal.x && currentNode.position.y === goal.y) {
            const path: Position[] = [];
            let temp: Node | null = currentNode;
            while (temp) {
                path.push(temp.position);
                temp = temp.parent;
            }
            return path.reverse(); // Return reversed path
        }

        closedList.push(currentNode);
        
        for (const neighborPos of getNeighbors(currentNode.position)) {
            // Ensure the neighbor is within bounds and walkable
            if (neighborPos.x < 0 || neighborPos.x >= grid.length || 
                neighborPos.y < 0 || neighborPos.y >= grid[0].length || 
                !grid[neighborPos.x][neighborPos.y]) {
                continue;
            }

            const neighborNode = new Node(neighborPos, currentNode, 
                currentNode.g + 1, heuristic(neighborPos, goal));

            // Check if neighbor is in closed list
            if (closedList.some(node => node.position.x === neighborPos.x && node.position.y === neighborPos.y)) {
                continue;
            }

            // If neighbor is not in open list, add it
            if (!openList.some(node => node.position.x === neighborPos.x && node.position.y === neighborPos.y)) {
                openList.push(neighborNode);
            }
        }
    }

    return null; // No path found
}
const grid = [
    [true, true, true, true],
    [true, false, true, true],
    [true, true, true, true],
];

const start: Position = { x: 0, y: 0 };
const goal: Position = { x: 2, y: 2 };

const path = aStar(start, goal, grid);
console.log(path); // Output the path from start to goal
