function biDirectionalSearch(graph, startNode, endNode) {
    // Initialize the frontiers for both searches
    let startFrontier = [startNode];
    let endFrontier = [endNode];

    // Initialize the explored sets for both searches
    let startExplored = new Set();
    let endExplored = new Set();

    // Iterate until the frontiers meet
    while (startFrontier.length > 0 && endFrontier.length > 0) {
        // Expand the start frontier
        let startNext = [];
        for (let node of startFrontier) {
            startExplored.add(node);
            for (let neighbor of graph[node]) {
                if (!startExplored.has(neighbor)) {
                    startNext.push(neighbor);
                }
                if (endExplored.has(neighbor)) {
                    // Nodes meet in the middle
                    return true;
                }
            }
        }
        startFrontier = startNext;

        // Expand the end frontier
        let endNext = [];
        for (let node of endFrontier) {
            endExplored.add(node);
            for (let neighbor of graph[node]) {
                if (!endExplored.has(neighbor)) {
                    endNext.push(neighbor);
                }
                if (startExplored.has(neighbor)) {
                    // Nodes meet in the middle
                    return true;
                }
            }
        }
        endFrontier = endNext;
    }
    
    // No path found
    return false;
}
