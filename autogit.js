class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.g = 0;
        this.h = 0;
        this.f = 0;
        this.neighbors = [];
        this.parent = null;
    }

    calculateCost(goal) {
        this.h = Math.abs(this.x - goal.x) + Math.abs(this.y - goal.y);
        this.f = this.g + this.h;
    }
}

function aStarSearch(start, goal, grid) {
    let openSet = [start];
    let closedSet = [];

    while (openSet.length > 0) {
        let currentNode = openSet[0];
        for (let i = 1; i < openSet.length; i++) {
            if (openSet[i].f < currentNode.f) {
                currentNode = openSet[i];
            }
        }

        if (currentNode === goal) {
            let path = [];
            let temp = currentNode;
            while (temp.parent) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse();
        }

        openSet = openSet.filter(node => node !== currentNode);
        closedSet.push(currentNode);

        currentNode.neighbors.forEach(neighbor => {
            if (!closedSet.includes(neighbor)) {
                let tentativeG = currentNode.g + 1;
                if (openSet.includes(neighbor)) {
                    if (tentativeG < neighbor.g) {
                        neighbor.g = tentativeG;
                        neighbor.parent = currentNode;
                    }
                } else {
                    neighbor.g = tentativeG;
                    neighbor.calculateCost(goal);
                    neighbor.parent = currentNode;
                    openSet.push(neighbor);
                }
            }
        });
    }

    return null;
}

// Example usage
let startNode = new Node(0, 0);
let goalNode = new Node(5, 5);
let grid = [
    [new Node(0, 0), new Node(0, 1), ...],
    [new Node(1, 0), new Node(1, 1), ...],
    ...
];

startNode.calculateCost(goalNode);
let path = aStarSearch(startNode, goalNode, grid);
console.log(path);
