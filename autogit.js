// Function to perform bi-directional search
function biDirectionalSearch(graph, startNode, endNode) {
    // Initialize forward and backward search queues
    let forwardQueue = [startNode];
    let backwardQueue = [endNode];

    // Initialize forward and backward visited sets
    let forwardVisited = new Set();
    let backwardVisited = new Set();

    forwardVisited.add(startNode);
    backwardVisited.add(endNode);

    // Main loop to perform bi-directional search
    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Perform forward search step
        let currentNodeForward = forwardQueue.shift();
        for (let neighbor of graph[currentNodeForward]) {
            if (!forwardVisited.has(neighbor)) {
                forwardVisited.add(neighbor);
                forwardQueue.push(neighbor);
                if (backwardVisited.has(neighbor)) {
                    return "Path found"; // Intersection point found, path exists
                }
            }
        }

        // Perform backward search step
        let currentNodeBackward = backwardQueue.shift();
        for (let neighbor of graph[currentNodeBackward]) {
            if (!backwardVisited.has(neighbor)) {
                backwardVisited.add(neighbor);
                backwardQueue.push(neighbor);
                if (forwardVisited.has(neighbor)) {
                    return "Path found"; // Intersection point found, path exists
                }
            }
        }
    }

    return "Path not found";
}

// Example graph representation
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['C', 'G'],
    F: ['D', 'H'],
    G: ['E', 'I'],
    H: ['F'],
    I: ['G']
};

// Define start and end nodes
const startNode = 'A';
const endNode = 'I';

// Call bi-directional search function
console.log(biDirectionalSearch(graph, startNode, endNode));
