function biDirectionalSearch(graph, startNode, endNode) {
    // Initialize the forward and backward queues and visited sets
    let forwardQueue = [startNode];
    let backwardQueue = [endNode];
    
    let forwardVisited = new Set();
    let backwardVisited = new Set();
    
    forwardVisited.add(startNode);
    backwardVisited.add(endNode);
    
    while (forwardQueue.length && backwardQueue.length) {
        // Perform forward search
        let currentNode = forwardQueue.shift();
        
        // Check if the current node is present in both directions
        if (backwardVisited.has(currentNode)) {
            return currentNode; // If found, return the intersection node
        }
        
        graph[currentNode].forEach(neighbour => {
            if (!forwardVisited.has(neighbour)) {
                forwardVisited.add(neighbour);
                forwardQueue.push(neighbour);
            }
        });
        
        // Perform backward search
        currentNode = backwardQueue.shift();
        
        // Check if the current node is present in both directions
        if (forwardVisited.has(currentNode)) {
            return currentNode; // If found, return the intersection node
        }
        
        graph[currentNode].forEach(neighbour => {
            if (!backwardVisited.has(neighbour)) {
                backwardVisited.add(neighbour);
                backwardQueue.push(neighbour);
            }
        });
    }
    
    return null; // If no intersection node found
}

// Example graph representation
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

const intersectionNode = biDirectionalSearch(graph, startNode, endNode);
console.log('Intersection node:', intersectionNode);
