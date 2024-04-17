// Bi-directional Search Algorithm
function biDirectionalSearch(graph, start, end) {
    // Initialize two queues for forward and backward search
    let forwardQueue = [start];
    let forwardVisited = new Set();
    forwardVisited.add(start);

    let backwardQueue = [end];
    let backwardVisited = new Set();
    backwardVisited.add(end);

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Forward search
        let currentNode = forwardQueue.shift();

        if (graph[currentNode]) {
            for (let neighbor of graph[currentNode]) {
                if (!forwardVisited.has(neighbor)) {
                    forwardQueue.push(neighbor);
                    forwardVisited.add(neighbor);
                }

                // Check if node is visited by backward search
                if (backwardVisited.has(neighbor)) {
                    return "Path found"; // intersection point found
                }
            }
        }

        // Backward search
        currentNode = backwardQueue.shift();

        if (graph[currentNode]) {
            for (let neighbor of graph[currentNode]) {
                if (!backwardVisited.has(neighbor)) {
                    backwardQueue.push(neighbor);
                    backwardVisited.add(neighbor);
                }

                // Check if node is visited by forward search
                if (forwardVisited.has(neighbor)) {
                    return "Path found"; // intersection point found
                }
            }
        }
    }

    return "Path not found";
}

// Example graph representation (Adjacency List)
const graph = {
    A: ['B', 'C'],
    B: ['C', 'D'],
    C: ['D'],
    D: ['E'],
    E: ['F'],
    F: ['G'],
    G: []
};

const startNode = 'A';
const endNode = 'G';

console.log(biDirectionalSearch(graph, startNode, endNode)); // Output: Path found
