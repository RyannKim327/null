class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift().element;
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

function heuristic(node, goal) {
    // Euclidean distance heuristic
    return Math.sqrt(Math.pow(goal.x - node.x, 2) + Math.pow(goal.y - node.y, 2));
}

function aStarSearch(start, goal) {
    let openSet = new PriorityQueue();
    openSet.enqueue(start, 0);

    let cameFrom = {};
    let gScore = {};
    let fScore = {};

    gScore[start] = 0;
    fScore[start] = heuristic(start, goal);

    while(!openSet.isEmpty()) {
        let current = openSet.dequeue();

        if (current === goal) {
            let path = [];
            while (current) {
                path.unshift(current);
                current = cameFrom[current];
            }
            return path;
        }

        // Implement neighbors for current node

        for (let neighbor of current.neighbors) {
            let tentativeGScore = gScore[current] + neighbor.cost;
            if (tentativeGScore < gScore[neighbor] || !gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);
                openSet.enqueue(neighbor, fScore[neighbor]);
            }
        }
    }

    // No path found
    return null;
}
