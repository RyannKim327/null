class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.parent = null;
    }

    equals(node) {
        return this.x === node.x && this.y === node.y;
    }
}

function astar(start, end, grid) {
    let openSet = [];
    let closedSet = [];
    openSet.push(start);

    while (openSet.length > 0) {
        let currentNode = openSet[0];
        let currentIndex = 0;

        // Find node with lowest F cost
        openSet.forEach((node, index) => {
            if (node.f < currentNode.f) {
                currentNode = node;
                currentIndex = index;
            }
        });

        // Move current node to the closed set
        openSet.splice(currentIndex, 1);
        closedSet.push(currentNode);

        // Reached the end node
        if (currentNode.equals(end)) {
            let path = [];
            let current = currentNode;
            while (current !== null) {
                path.push({ x: current.x, y: current.y });
                current = current.parent;
            }
            return path.reverse();
        }

        let neighbors = getNeighbors(currentNode, grid);
        neighbors.forEach(neighbor => {
            if (!closedSet.some(node => node.equals(neighbor))) {
                let gScore = currentNode.g + 1;
                let isOpen = openSet.some(node => node.equals(neighbor));

                if (!isOpen || gScore < neighbor.g) {
                    neighbor.g = gScore;
                    neighbor.h = heuristic(neighbor, end);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = currentNode;

                    if (!isOpen) {
                        openSet.push(neighbor);
                    }
                }
            }
        });
    }

    return [];
}

function getNeighbors(node, grid) {
    let neighbors = [];
    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ];

    directions.forEach(direction => {
        let newX = node.x + direction[0];
        let newY = node.y + direction[1];

        if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] !== 1) {
            neighbors.push(new Node(newX, newY));
        }
    });

    return neighbors;
}

function heuristic(node, end) {
    return Math.abs(node.x - end.x) + Math.abs(node.y - end.y);
}
