class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.g = 0; // Cost from start node to this node
        this.h = 0; // Heuristic cost from this node to the goal node
        this.f = 0; // Estimated total cost (f = g + h)
        this.parent = null;
    }
}

function astar(grid, start, end) {
    let openList = [];
    let closedList = [];

    openList.push(start);

    while (openList.length > 0) {
        let currentNode = openList[0];
        let currentIndex = 0;

        // Find node with lowest f value
        openList.forEach((node, index) => {
            if (node.f < currentNode.f) {
                currentNode = node;
                currentIndex = index;
            }
        });

        // Move current node to the closed list
        openList.splice(currentIndex, 1);
        closedList.push(currentNode);

        // Found the goal
        if (currentNode === end) {
            let path = [];
            let current = currentNode;
            while (current !== start) {
                path.push(current);
                current = current.parent;
            }
            return path.reverse();
        }

        // Generate children
        let children = [];
        let neighbors = [
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 1 }
        ];
        neighbors.forEach(neighbor => {
            let nodePos = { x: currentNode.x + neighbor.x, y: currentNode.y + neighbor.y };

            // Check if node is within the grid
            if (nodePos.x > grid[0].length - 1 || nodePos.x < 0 ||
                nodePos.y > grid.length - 1 || nodePos.y < 0) {
                return;
            }

            // Check if node is blocked or in closed list
            if (grid[nodePos.y][nodePos.x] !== 0 || closedList.find(node => node.x === nodePos.x && node.y === nodePos.y)) {
                return;
            }

            let child = new Node(nodePos.x, nodePos.y);
            child.parent = currentNode;
            children.push(child);
        });

        children.forEach(child => {
            let cost = currentNode.g + 1;
            child.g = cost;
            child.h = Math.abs(child.x - end.x) + Math.abs(child.y - end.y);
            child.f = child.g + child.h;

            // Child is already in the open list
            if (openList.find(node => node.x === child.x && node.y === child.y && node.g < cost)) {
                return;
            }

            openList.push(child);
        });
    }

    return null; // No path found
}

// Example usage
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0]
];

const startNode = new Node(0, 0);
const endNode = new Node(4, 4);

const path = astar(grid, startNode, endNode);

console.log(path);
