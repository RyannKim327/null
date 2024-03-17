function biDirectionalSearch(startNode, targetNode) {
    let queueFromStart = [startNode];
    let queueFromTarget = [targetNode];
    let visitedFromStart = new Set();
    let visitedFromTarget = new Set();
    
    visitedFromStart.add(startNode);
    visitedFromTarget.add(targetNode);
    
    while (queueFromStart.length && queueFromTarget.length) {
        let nodeFromStart = queueFromStart.shift();
        let nodeFromTarget = queueFromTarget.shift();
        
        if (visitedFromStart.has(nodeFromTarget) || visitedFromTarget.has(nodeFromStart)) {
            return true; // Found a common node, path exists
        }
        
        for (let neighbor of nodeFromStart.neighbors) {
            if (!visitedFromStart.has(neighbor)) {
                visitedFromStart.add(neighbor);
                queueFromStart.push(neighbor);
            }
        }
        
        for (let neighbor of nodeFromTarget.neighbors) {
            if (!visitedFromTarget.has(neighbor)) {
                visitedFromTarget.add(neighbor);
                queueFromTarget.push(neighbor);
            }
        }
    }
    
    return false; // Path does not exist
}
