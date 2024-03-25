function astarSearch(start, goal, graph) {
    let openSet = [start];
    let cameFrom = {};
    
    let gScore = {};
    let fScore = {};

    // Initialize scores for the start node
    gScore[start] = 0;
    fScore[start] = heuristic(start, goal);

    while (openSet.length > 0) {
        let current = getLowestFScoreNode(openSet, fScore);
        
        if (current === goal) {
            return reconstructPath(cameFrom, current);
        }

        openSet = openSet.filter(node => node !== current);
        
        let neighbors = graph[current];
        for (let neighbor of neighbors) {
            let tentativeGScore = gScore[current] + 1; // Assuming all edges have the same weight

            if (!gScore[neighbor] || tentativeGScore < gScore[neighbor]) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);

                if (!openSet.includes(neighbor)) {
                    openSet.push(neighbor);
                }
            }
        }
    }

    return null; // No path found
}

function heuristic(node, goal) {
    // Simple Manhattan distance heuristic
    return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}

function getLowestFScoreNode(openSet, fScore) {
    return openSet.reduce((minNode, node) => fScore[node] < fScore[minNode] ? node : minNode, openSet[0]);
}

function reconstructPath(cameFrom, current) {
    let totalPath = [current];
    while (cameFrom[current]) {
        current = cameFrom[current];
        totalPath.unshift(current);
    }
    return totalPath;
}
