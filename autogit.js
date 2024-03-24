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

function astar(start, end, grid) {
    let openList = [];
    let closedList = [];

    openList.push(start);

    while (openList.length > 0) {
        let currentNode = openList[0];
        let currentIndex = 0;

        for (let i = 1; i < openList.length; i++) {
            if (openList[i].f < currentNode.f || (openList[i].f === currentNode.f && openList[i].h < currentNode.h)) {
                currentNode = openList[i];
                currentIndex = i;
            }
        }

        openList.splice(currentIndex, 1);
        closedList.push(currentNode);

        if (currentNode.isEqual(end)) {
            let path = [];
            let current = currentNode;
            while (current !== null) {
                path.push({ x: current.x, y: current.y });
                current = current.parent;
            }
            return path.reverse();
        }

        let children = [];
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for (let i = 0; i < directions.length; i++) {
            let newPosition = { x: currentNode.x + directions[i][0], y: currentNode.y + directions[i][1] };

            if (newPosition.x < 0 || newPosition.x >= grid.length || newPosition.y < 0 || newPosition.y >= grid[0].length) {
                continue;
            }

            if (grid[newPosition.x][newPosition.y] === 1) {
                continue;
            }

            let newNode = new Node(newPosition.x, newPosition.y, currentNode);

            if (closedList.some(node => node.isEqual(newNode))) {
                continue;
            }

            newNode.g = currentNode.g + 1;
            newNode.h = Math.abs(newNode.x - end.x) + Math.abs(newNode.y - end.y);
            newNode.f = newNode.g + newNode.h;

            if (openList.some(node => node.isEqual(newNode) && newNode.g >= node.g)) {
                continue;
            }

            openList.push(newNode);
        }
    }

    return [];
}

// Example usage
let grid = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0]
];

let start = new Node(0, 0);
let end = new Node(3, 3);

let path = astar(start, end, grid);
console.log(path);
