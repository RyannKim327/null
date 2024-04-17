class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];
        this.parent = null;
    }

    cost(node) {
        // For simplicity, we assume that the cost to move from one node to another is 1
        return 1;
    }
}

function heuristic(node, goal) {
    // Manhattan distance heuristic
    return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}

function aStar(grid, start, goal) {
    let openSet = [start];
    let closedSet = [];

    while (openSet.length > 0) {
        let current = openSet[0];
        for (let i = 1; i < openSet.length; i++) {
            if (openSet[i].f < current.f || (openSet[i].f === current.f && openSet[i].h < current.h)) {
                current = openSet[i];
            }
        }

        // Goal reached
        if (current === goal) {
            let path = [];
            let temp = current;
            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }
            return path.reverse();
        }

        // Remove current node from open set and add it to the closed set
        openSet = openSet.filter(node => node !== current);
        closedSet.push(current);

        for (let neighbor of current.neighbors) {
            if (!closedSet.includes(neighbor)) {
                let tempG = current.g + current.cost(neighbor);
                if (!openSet.includes(neighbor) || tempG < neighbor.g) {
                    neighbor.g = tempG;
                    neighbor.h = heuristic(neighbor, goal);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.parent = current;

                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }
    }

    return null;  // No path found
}
