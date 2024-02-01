function biDirectionalSearch(graph, startNode, goalNode) {
    // Step 1: Define the graph

    // Step 2: Forward search
    const forwardVisited = new Set();
    const forwardQueue = [[startNode, null]];

    while (forwardQueue.length > 0) {
        const [currentNode, parent] = forwardQueue.shift();
        forwardVisited.add(currentNode);

        if (currentNode === goalNode) {
            return constructPath(parent, currentNode);
        }

        for (const neighbor of graph[currentNode]) {
            if (!forwardVisited.has(neighbor)) {
                forwardQueue.push([neighbor, currentNode]);
            }
        }
    }

    // Step 3: Backward search
    const backwardVisited = new Set();
    const backwardQueue = [[goalNode, null]];

    while (backwardQueue.length > 0) {
        const [currentNode, parent] = backwardQueue.shift();
        backwardVisited.add(currentNode);

        if (currentNode === startNode) {
            return constructPath(parent, currentNode).reverse();
        }

        for (const neighbor of graph[currentNode]) {
            if (!backwardVisited.has(neighbor)) {
                backwardQueue.push([neighbor, currentNode]);
            }
        }
    }

    return null; // No path found

    // Step 5: Build the final path
    function constructPath(parent, currentNode) {
        const path = [currentNode];
        while (parent !== null) {
            path.push(parent);
            parent = backwardVisited.has(parent) ? graph[parent][0] : graph[parent];
        }
        return path;
    }
}
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C'],
    C: ['B', 'E'],
    D: ['A', 'E'],
    E: ['C', 'D', 'F'],
    F: ['E']
};

const startNode = 'A';
const goalNode = 'F';

const path = biDirectionalSearch(graph, startNode, goalNode);
console.log('Shortest path:', path);
