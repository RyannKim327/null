function biDirectionalSearch(graph, startNode, endNode) {
    let forwardQueue = [startNode];
    let backwardQueue = [endNode];
    let visitedForward = new Set();
    let visitedBackward = new Set();
    
    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        let forwardNode = forwardQueue.shift();
        let backwardNode = backwardQueue.shift();
        
        if (visitedForward.has(forwardNode) || visitedBackward.has(backwardNode)) {
            continue;
        }
        
        visitedForward.add(forwardNode);
        visitedBackward.add(backwardNode);
        
        if (forwardNode === backwardNode) {
            return getPath(graph, startNode, endNode, forwardNode);
        }
        
        let forwardNeighbors = getNeighbors(graph, forwardNode);
        let backwardNeighbors = getNeighbors(graph, backwardNode);
        
        forwardQueue.push(...forwardNeighbors.filter(node => !visitedForward.has(node)));
        backwardQueue.push(...backwardNeighbors.filter(node => !visitedBackward.has(node)));
    }
    
    return "No path found";
}

function getNeighbors(graph, node) {
    return graph[node];
}

function getPath(graph, startNode, endNode, commonNode) {
    let path = [];
    let currentNode = commonNode;
    
    while (currentNode !== startNode) {
        path.unshift(currentNode);
        currentNode = graph[currentNode].parent;
    }
    
    currentNode = commonNode;
    
    while (currentNode !== endNode) {
        path.push(currentNode);
        currentNode = graph[currentNode].parent;
    }
    
    path.push(endNode);
    
    return path;
}

// Example graph
let graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['C'],
    F: ['D', 'G'],
    G: ['F']
};

let startNode = 'A';
let endNode = 'G';

let path = biDirectionalSearch(graph, startNode, endNode);

console.log(path);
