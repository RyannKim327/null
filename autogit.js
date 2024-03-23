function bidirectionalSearch(graph, startNode, endNode) {
    let forwardQueue = [startNode];
    let backwardQueue = [endNode];
    let visitedForward = new Set();
    let visitedBackward = new Set();

    visitedForward.add(startNode);
    visitedBackward.add(endNode);

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        let forwardNode = forwardQueue.shift();
        let backwardNode = backwardQueue.shift();

        if (visitedBackward.has(forwardNode)) {
            return true; // Path found
        }

        if (visitedForward.has(backwardNode)) {
            return true; // Path found
        }

        for (let neighbor of graph[forwardNode]) {
            if (!visitedForward.has(neighbor)) {
                forwardQueue.push(neighbor);
                visitedForward.add(neighbor);
            }
        }

        for (let neighbor of graph[backwardNode]) {
            if (!visitedBackward.has(neighbor)) {
                backwardQueue.push(neighbor);
                visitedBackward.add(neighbor);
            }
        }
    }

    return false; // No path found
}

// Usage
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

if (bidirectionalSearch(graph, startNode, endNode)) {
    console.log("Path found");
} else {
    console.log("Path not found");
}
