class Node {
    constructor(x, y, parent = null) {
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }

    isEqual(node) {
        return this.x === node.x && this.y === node.y;
    }
}

function heuristic(node, goal) {
    return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}

function astarSearch(start, goal, grid) {
    let openList = [start];
    let closedList = [];

    while (openList.length > 0) {
        let currentNode = openList[0];
        let currentIndex = 0;

        for (let i = 1; i < openList.length; i++) {
            if (openList[i].f < currentNode.f) {
                currentNode = openList[i];
                currentIndex = i;
            }
        }

        openList.splice(currentIndex, 1);
        closedList.push(currentNode);

        if (currentNode.isEqual(goal)) {
            let path = [];
            let current = currentNode;
            while (current !== null) {
                path.push([current.x, current.y]);
                current = current.parent;
            }
            return path.reverse();
        }

        let children = [];
        for (let newPosition of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
            let nodePosition = { x: currentNode.x + newPosition[0], y: currentNode.y + newPosition[1] };

            if (nodePosition.x > (grid.length - 1) || nodePosition.x < 0 ||
                nodePosition.y > (grid[0].length - 1) || nodePosition.y < 0) {
                continue;
            }

            if (grid[nodePosition.x][nodePosition.y] !== 0) {
                continue;
            }

            let newNode = new Node(nodePosition.x, nodePosition.y, currentNode);
            children.push(newNode);
        }

        for (let child of children) {
            if (closedList.some(node => node.isEqual(child))) {
                continue;
            }

            child.g = currentNode.g + 1;
            child.h = heuristic(child, goal);
            child.f = child.g + child.h;

            if (openList.some(node => node.isEqual(child) && child.g >= node.g)) {
                continue;
            }

            openList.push(child);
        }
    }

    return null; // No path found
}

// Example usage
const grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const startNode = new Node(0, 0);
const goalNode = new Node(3, 3);

const path = astarSearch(startNode, goalNode, grid);

if (path) {
    console.log("Path found:", path);
} else {
    console.log("No path found!");
}
