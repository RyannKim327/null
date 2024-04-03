function biDirectionalSearch(graph, startNode, endNode) {
    let visitedForward = new Set();
    let visitedBackward = new Set();
    
    let queueForward = [startNode];
    let queueBackward = [endNode];
    
    while (queueForward.length > 0 && queueBackward.length > 0) {
        let currentNodeForward = queueForward.shift();
        
        if (visitedBackward.has(currentNodeForward)) {
            // Found a common node
            return true;
        }
        
        visitedForward.add(currentNodeForward);
        
        for (let neighbor of graph[currentNodeForward]) {
            if (!visitedForward.has(neighbor)) {
                queueForward.push(neighbor);
            }
        }
        
        let currentNodeBackward = queueBackward.shift();
        
        if (visitedForward.has(currentNodeBackward)) {
            // Found a common node
            return true;
        }
        
        visitedBackward.add(currentNodeBackward);
        
        for (let neighbor of graph[currentNodeBackward]) {
            if (!visitedBackward.has(neighbor)) {
                queueBackward.push(neighbor);
            }
        }
    }
    
    // No common node found
    return false;
}

// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['C', 'G'],
    F: ['D'],
    G: ['E']
};

const startNode = 'A';
const endNode = 'G';
console.log(biDirectionalSearch(graph, startNode, endNode)); // Output: true
