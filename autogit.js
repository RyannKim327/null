function biDirectionalSearch(startNode, goalNode) {
    let startQueue = [startNode];
    let goalQueue = [goalNode];
    let startVisited = new Set();
    let goalVisited = new Set();

    startVisited.add(startNode);
    goalVisited.add(goalNode);

    while (startQueue.length > 0 && goalQueue.length > 0) {
        // Explore from the start node
        let currentStart = startQueue.shift();
        for (let neighbor of currentStart.neighbors) {
            if (!startVisited.has(neighbor)) {
                startVisited.add(neighbor);
                startQueue.push(neighbor);

                // Check if the neighbor is already visited by the goal search
                if (goalVisited.has(neighbor)) {
                    return neighbor; // Found a common node
                }
            }
        }

        // Explore from the goal node
        let currentGoal = goalQueue.shift();
        for (let neighbor of currentGoal.neighbors) {
            if (!goalVisited.has(neighbor)) {
                goalVisited.add(neighbor);
                goalQueue.push(neighbor);

                // Check if the neighbor is already visited by the start search
                if (startVisited.has(neighbor)) {
                    return neighbor; // Found a common node
                }
            }
        }
    }

    return null; // No common node found
}
