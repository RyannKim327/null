function biDirectionalSearch(startNode, goalNode) {
    let startQueue = [startNode];
    let goalQueue = [goalNode];
    
    let startVisited = new Set();
    let goalVisited = new Set();
    
    startVisited.add(startNode);
    goalVisited.add(goalNode);
    
    while (startQueue.length > 0 && goalQueue.length > 0) {
        let currentStartNode = startQueue.shift();
        let currentGoalNode = goalQueue.shift();
        
        if (goalVisited.has(currentStartNode) || startVisited.has(currentGoalNode)) {
            console.log("Path found!");
            return;
        }
        
        // Expand neighbors of currentStartNode
        for (let neighbor of currentStartNode.neighbors) {
            if (!startVisited.has(neighbor)) {
                startVisited.add(neighbor);
                startQueue.push(neighbor);
            }
        }
        
        // Expand neighbors of currentGoalNode
        for (let neighbor of currentGoalNode.neighbors) {
            if (!goalVisited.has(neighbor)) {
                goalVisited.add(neighbor);
                goalQueue.push(neighbor);
            }
        }
    }
    
    console.log("Path not found");
}

