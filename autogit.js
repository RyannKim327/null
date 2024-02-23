function astarSearch(start, goal, graph) {
    let openSet = new Set();
    openSet.add(start);

    let cameFrom = {};
    let gScore = {};
    let fScore = {};

    gScore[start] = 0;
    fScore[start] = heuristic(start, goal);

    while (openSet.size > 0) {
        let current = getLowest(openSet, fScore);
        
        if (current === goal) {
            return reconstructPath(cameFrom, current);
        }

        openSet.delete(current);

        for (let neighbor in graph[current]) {
            let tentative_gScore = gScore[current] + graph[current][neighbor];
            if (!gScore[neighbor] || tentative_gScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentative_gScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);

                if (!openSet.has(neighbor)) {
                    openSet.add(neighbor);
                }
            }
        }
    }

    return null;
}

function heuristic(node, goal) {
    // Calculate heuristic value (e.g., distance) from node to goal
    return 0;
}

function getLowest(openSet, fScore) {
    let lowest = null;
    let lowestScore = Infinity;
    for (let node of openSet) {
        if (fScore[node] < lowestScore) {
            lowest = node;
            lowestScore = fScore[node];
        }
    }
    return lowest;
}

function reconstructPath(cameFrom, current) {
    let totalPath = [current];
    while (cameFrom[current]) {
        current = cameFrom[current];
        totalPath.unshift(current);
    }
    return totalPath;
}

// Usage
let graph = {
    'A': {'B': 5, 'C': 3},
    'B': {'A': 5, 'D': 7},
    'C': {'A': 3, 'D': 4},
    'D': {'B': 7, 'C': 4}
};

let startNode = 'A';
let goalNode = 'D';

let path = astarSearch(startNode, goalNode, graph);
console.log(path);
