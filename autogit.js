function beamSearch(graph, startNode, beamWidth) {
    let queue = [{ node: startNode, path: [startNode], cost: 0 }];
    
    while(queue.length > 0 && queue[0].path.length <= graph.length) {
        let nextQueue = [];
        
        for(let item of queue) {
            let currentNode = item.node;
            let currentPath = item.path;
            
            if (currentPath.length === graph.length) {
                return currentPath;
            }
            
            for(let neighbor of graph[currentNode]) {
                let newPath = currentPath.concat(neighbor);
                let newCost = item.cost + graph[currentNode][neighbor];
                
                nextQueue.push({ 
                    node: neighbor, 
                    path: newPath, 
                    cost: newCost 
                });
            }
        }
        
        queue = nextQueue
            .sort((a, b) => a.cost - b.cost)
            .slice(0, beamWidth);
    }
    
    return null; // Could not find a solution
}
