// A* search algorithm
function astar(start, goal, graph) {
    let openSet = [start];
    let cameFrom = {};
    let gScore = {};
    let fScore = {};

    gScore[start] = 0;
    fScore[start] = heuristic(start, goal);

    while (openSet.length > 0) {
        let current = openSet.reduce((a, b) => (fScore[a] < fScore[b] ? a : b));
        if (current === goal) {
            return reconstructPath(cameFrom, current);
        }

        openSet = openSet.filter(node => node !== current);
        
        for (let neighbor of graph[current]) {
            let tentative_gScore = gScore[current] + 1;

            if (!gScore[neighbor] || tentative_gScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentative_gScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    return null;  // Path not found
}

// Heuristic function (Euclidean distance)
function heuristic(node, goal) {
    return Math.sqrt((node.x - goal.x) ** 2 + (node.y - goal.y) ** 2);
}

// Reconstruct path
function reconstructPath(cameFrom, current) {
    let path = [current];
    while (cameFrom[current]) {
        current = cameFrom[current];
        path.unshift(current);
    }
    return path;
}
