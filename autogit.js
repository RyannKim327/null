function bidirectionalSearch(graph, start, goal) {
    let forwardQueue = [start];
    let backwardQueue = [goal];
    let forwardVisited = new Set();
    let backwardVisited = new Set();

    while (forwardQueue.length && backwardQueue.length) {
        let forwardNode = forwardQueue.shift();
        let backwardNode = backwardQueue.shift();

        if (forwardNode === backwardNode || backwardVisited.has(forwardNode)) {
            return true; // Intersection found
        }

        forwardVisited.add(forwardNode);
        backwardVisited.add(backwardNode);

        let forwardNeighbors = graph[forwardNode] || [];
        let backwardNeighbors = graph[backwardNode] || [];

        for (let neighbor of forwardNeighbors) {
            if (!forwardVisited.has(neighbor)) {
                forwardQueue.push(neighbor);
            }
        }

        for (let neighbor of backwardNeighbors) {
            if (!backwardVisited.has(neighbor)) {
                backwardQueue.push(neighbor);
            }
        }
    }

    return false; // No path found
}

// Example graph
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['C'],
    F: ['D']
};

// Example start and goal states
const start = 'A';
const goal = 'F';

if (bidirectionalSearch(graph, start, goal)) {
    console.log('Path found!');
} else {
    console.log('No path found.');
}
