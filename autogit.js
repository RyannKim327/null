function biDirectionalSearch(graph, startNode, endNode) {
    // Initialize the start and end queues
    let startQueue = [startNode];
    let endQueue = [endNode];
    
    // Initialize visited sets for start and end
    let startVisited = new Set();
    let endVisited = new Set();
    
    // Loop until one of the queues is empty
    while (startQueue.length > 0 && endQueue.length > 0) {
        let currentStartNode = startQueue.shift();
        let currentEndNode = endQueue.shift();
        
        // Check if currentStartNode is in endVisited
        if (endVisited.has(currentStartNode)) {
            return true; // Path found
        }
        
        // Check if currentEndNode is in startVisited
        if (startVisited.has(currentEndNode)) {
            return true; // Path found
        }
        
        // Add currentStartNode neighbors to startQueue
        for (let neighbor of graph[currentStartNode]) {
            if (!startVisited.has(neighbor)) {
                startVisited.add(neighbor);
                startQueue.push(neighbor);
            }
        }
        
        // Add currentEndNode neighbors to endQueue
        for (let neighbor of graph[currentEndNode]) {
            if (!endVisited.has(neighbor)) {
                endVisited.add(neighbor);
                endQueue.push(neighbor);
            }
        }
    }
    
    return false; // Path not found
}

// Example graph representation
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['D', 'F'],
    F: ['E']
};

// Test bi-directional search
const startNode = 'A';
const endNode = 'F';
console.log(biDirectionalSearch(graph, startNode, endNode)); // Output: true
