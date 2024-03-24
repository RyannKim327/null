function biDirectionalSearch(graph, startNode, goalNode) {
    let forwardQueue = [startNode];
    let backwardQueue = [goalNode];
    let forwardVisited = new Set();
    let backwardVisited = new Set();

    forwardVisited.add(startNode);
    backwardVisited.add(goalNode);

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        let currentNodeForward = forwardQueue.shift();
        let currentNodeBackward = backwardQueue.shift();

        if (currentNodeForward === currentNodeBackward) {
            return true; // Paths meet in the middle
        }

        let neighborsForward = graph[currentNodeForward] || [];
        let neighborsBackward = graph[currentNodeBackward] || [];

        for (let neighbor of neighborsForward) {
            if (!forwardVisited.has(neighbor)) {
                forwardVisited.add(neighbor);
                forwardQueue.push(neighbor);
            }
        }

        for (let neighbor of neighborsBackward) {
            if (!backwardVisited.has(neighbor)) {
                backwardVisited.add(neighbor);
                backwardQueue.push(neighbor);
            }
        }
    }

    return false; // No path found
}

// Example graph representation
const graph = {
    A: ['B'],
    B: ['C', 'D'],
    C: ['E'],
    D: ['E'],
    E: []
};

const startNode = 'A';
const goalNode = 'E';

console.log(biDirectionalSearch(graph, startNode, goalNode)); // Output: true
