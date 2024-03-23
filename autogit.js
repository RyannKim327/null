function biDirectionalSearch(graph, startNode, endNode) {
    let forwardQueue = [startNode];
    let backwardQueue = [endNode];

    let forwardVisited = new Set();
    forwardVisited.add(startNode);

    let backwardVisited = new Set();
    backwardVisited.add(endNode);

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Search from start node
        let currentNodeForward = forwardQueue.shift();
        for (let neighbor of graph[currentNodeForward]) {
            if (!forwardVisited.has(neighbor)) {
                forwardVisited.add(neighbor);
                forwardQueue.push(neighbor);
            }

            if (backwardVisited.has(neighbor)) {
                return true; // Path found
            }
        }

        // Search from end node
        let currentNodeBackward = backwardQueue.shift();
        for (let neighbor of graph[currentNodeBackward]) {
            if (!backwardVisited.has(neighbor)) {
                backwardVisited.add(neighbor);
                backwardQueue.push(neighbor);
            }

            if (forwardVisited.has(neighbor)) {
                return true; // Path found
            }
        }
    }

    return false; // Path not found
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'E'],
    'D': ['B', 'F'],
    'E': ['C', 'G'],
    'F': ['D'],
    'G': ['E']
};

const startNode = 'A';
const endNode = 'G';

if (biDirectionalSearch(graph, startNode, endNode)) {
    console.log(`Path exists between ${startNode} and ${endNode}`);
} else {
    console.log(`No path exists between ${startNode} and ${endNode}`);
}
