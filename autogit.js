function biDirectionalSearch(graph, startNode, endNode) {
    // Initialize frontiers and explored sets for both directions
    let startFrontier = [startNode];
    let endFrontier = [endNode];
    let startExplored = new Set();
    let endExplored = new Set();

    while (startFrontier.length > 0 && endFrontier.length > 0) {
        // Search from the start node
        let startNext = [];
        for (let node of startFrontier) {
            startExplored.add(node);
            if (endExplored.has(node)) {
                return 'Path found'; // Path found
            }
            for (let neighbor of graph[node]) {
                if (!startExplored.has(neighbor)) {
                    startNext.push(neighbor);
                }
            }
        }
        startFrontier = startNext;

        // Search from the end node
        let endNext = [];
        for (let node of endFrontier) {
            endExplored.add(node);
            if (startExplored.has(node)) {
                return 'Path found'; // Path found
            }
            for (let neighbor of graph[node]) {
                if (!endExplored.has(neighbor)) {
                    endNext.push(neighbor);
                }
            }
        }
        endFrontier = endNext;
    }

    return 'No path found';
}

// Example graph representation as adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F', 'G'],
    D: ['B'],
    E: ['B'],
    F: ['C'],
    G: ['C'],
};

const startNode = 'A';
const endNode = 'G';

console.log(biDirectionalSearch(graph, startNode, endNode));
