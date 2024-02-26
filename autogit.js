function biDirectionalSearch(startNode, goalNode) {
    let forwardVisited = new Set();
    let backwardVisited = new Set();
    
    let forwardQueue = [startNode];
    let backwardQueue = [goalNode];
    
    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Forward search
        let currentNodeForward = forwardQueue.shift();
        forwardVisited.add(currentNodeForward);
        
        // Check if intersection
        if (backwardVisited.has(currentNodeForward)) {
            // Path found
            return true;
        }
        
        // Explore neighbors of currentNodeForward
        for (let neighbor of currentNodeForward.neighbors) {
            if (!forwardVisited.has(neighbor)) {
                forwardQueue.push(neighbor);
            }
        }
        
        // Backward search
        let currentNodeBackward = backwardQueue.shift();
        backwardVisited.add(currentNodeBackward);
        
        // Check if intersection
        if (forwardVisited.has(currentNodeBackward)) {
            // Path found
            return true;
        }
        
        // Explore neighbors of currentNodeBackward
        for (let neighbor of currentNodeBackward.neighbors) {
            if (!backwardVisited.has(neighbor)) {
                backwardQueue.push(neighbor);
            }
        }
    }
    
    // Path not found
    return false;
}
