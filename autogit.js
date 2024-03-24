class Node {
    constructor(x, y, parent) {
        this.x = x;
        this.y = y;
        this.parent = parent;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }

    isEqual(otherNode) {
        return this.x === otherNode.x && this.y === otherNode.y;
    }
}

function euclideanDistance(nodeA, nodeB) {
    return Math.sqrt(Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2));
}

function astarSearch(start, end, grid) {
    let openList = [];
    let closedList = [];

    openList.push(start);

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

        if (currentNode.isEqual(end)) {
            let path = [];
            let current = currentNode;
            while (current) {
                path.push({ x: current.x, y: current.y });
                current = current.parent;
            }
            return path.reverse();
        }

        let children = [];
        let neighbours = [
            { x: -1, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: -1 },
            { x: 0, y: 1 }
        ];

        for (let neighbour of neighbours) {
            let nodePosition = { x: currentNode.x + neighbour.x, y: currentNode.y + neighbour.y };

            if (nodePosition.x < 0 || nodePosition.x >= grid.length || nodePosition.y < 0 || nodePosition.y >= grid[0].length) {
                continue;
            }

            if (grid[nodePosition.x][nodePosition.y] !== 0) {
                continue;
            }

            let newNode = new Node(nodePosition.x, nodePosition.y, currentNode);

            if (!closedList.find(node => node.isEqual(newNode))) {
                newNode.g = currentNode.g + 1;
                newNode.h = euclideanDistance(newNode, end);
                newNode.f = newNode.g + newNode.h;

                if (!openList.find(node => node.isEqual(newNode) && newNode.g >= node.g)) {
                    openList.push(newNode);
                }
            }
        }
    }

    return [];
}

// Example usage
const grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const startNode = new Node(0, 0, null);
const endNode = new Node(3, 3, null);

const path = astarSearch(startNode, endNode, grid);
console.log(path);
