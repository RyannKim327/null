class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.parent = null;
    }

    // Calculate the heuristic value (h) using the Manhattan distance
    calculateHeuristic(goal) {
        return Math.abs(this.x - goal.x) + Math.abs(this.y - goal.y);
    }
}

function AStarSearch(start, goal, graph) {
    let openList = [start];
    let closedList = [];

    while (openList.length > 0) {
        let currentNode = openList[0];

        // Find the node with the lowest f value in the open list
        for (let i = 1; i < openList.length; i++) {
            if (openList[i].f < currentNode.f) {
                currentNode = openList[i];
            }
        }

        // Move the current node from the open list to the closed list
        openList = openList.filter(node => node !== currentNode);
        closedList.push(currentNode);

        // Check if we have reached the goal node
        if (currentNode === goal) {
            let path = [];
            let current = currentNode;
            while (current !== null) {
                path.unshift([current.x, current.y]);
                current = current.parent;
            }
            return path;
        }

        // Generate the neighboring nodes
        let neighbors = [];
        let movements = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Left, Right, Up, Down
        movements.forEach(move => {
            let neighborX = currentNode.x + move[0];
            let neighborY = currentNode.y + move[1];

            if (neighborX >= 0 && neighborX < graph.length && neighborY >= 0 && neighborY < graph[0].length && !graph[neighborX][neighborY]) {
                let neighbor = new Node(neighborX, neighborY);
                neighbor.g = currentNode.g + 1;
                neighbor.h = neighbor.calculateHeuristic(goal);
                neighbor.f = neighbor.g + neighbor.h;

                // Check if the neighbor is in the closed list
                if (closedList.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                    return;
                }

                // Check if the neighbor is in the open list
                if (!openList.some(node => node.x === neighbor.x && node.y === neighbor.y)) {
                    openList.push(neighbor);
                    neighbor.parent = currentNode;
                }
            }
        });
    }

    return null; // No path found
}

// Example usage
let graph = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0]
];

let start = new Node(0, 0);
let goal = new Node(4, 4);

let path = AStarSearch(start, goal, graph);

if (path) {
    console.log("Path found:", path);
} else {
    console.log("No path found.");
}
