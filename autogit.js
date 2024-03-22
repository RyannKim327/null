function biDirectionalSearch(graph, startNode, endNode) {
    let queueForward = [startNode];
    let queueBackward = [endNode];
    let visitedForward = new Set();
    let visitedBackward = new Set();

    visitedForward.add(startNode);
    visitedBackward.add(endNode);

    while (queueForward.length > 0 && queueBackward.length > 0) {
        let currentNodeForward = queueForward.shift();
        let currentNodeBackward = queueBackward.shift();

        if (visitedBackward.has(currentNodeForward) ||
            visitedForward.has(currentNodeBackward)) {
            return true; // Path found
        }

        let neighborsForward = graph[currentNodeForward];
        for (let neighbor of neighborsForward) {
            if (!visitedForward.has(neighbor)) {
                visitedForward.add(neighbor);
                queueForward.push(neighbor);
            }
        }

        let neighborsBackward = graph[currentNodeBackward];
        for (let neighbor of neighborsBackward) {
            if (!visitedBackward.has(neighbor)) {
                visitedBackward.add(neighbor);
                queueBackward.push(neighbor);
            }
        }
    }

    return false; // No path found
}

// Example graph representation using an adjacency list
const graph = {
    A: ['B'],
    B: ['A', 'C', 'D'],
    C: ['B', 'E'],
    D: ['B'],
    E: ['C', 'F'],
    F: ['E']
};

const startNode = 'A';
const endNode = 'F';

if (biDirectionalSearch(graph, startNode, endNode)) {
    console.log(`Path found between ${startNode} and ${endNode}`);
} else {
    console.log(`No path found between ${startNode} and ${endNode}`);
}
