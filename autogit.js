function bidirectionalSearch(graph, startNode, endNode) {
    const queueStart = [startNode];
    const visitedStart = new Set([startNode]);

    const queueEnd = [endNode];
    const visitedEnd = new Set([endNode]);

    while (queueStart.length > 0 && queueEnd.length > 0) {
        const currentNodeStart = queueStart.shift();
        const neighborsStart = graph[currentNodeStart] || [];

        for (const neighbor of neighborsStart) {
            if (!visitedStart.has(neighbor)) {
                if (visitedEnd.has(neighbor)) {
                    return true; // Path found
                }
                visitedStart.add(neighbor);
                queueStart.push(neighbor);
            }
        }

        const currentNodeEnd = queueEnd.shift();
        const neighborsEnd = graph[currentNodeEnd] || [];

        for (const neighbor of neighborsEnd) {
            if (!visitedEnd.has(neighbor)) {
                if (visitedStart.has(neighbor)) {
                    return true; // Path found
                }
                visitedEnd.add(neighbor);
                queueEnd.push(neighbor);
            }
        }
    }

    return false; // No path found
}

// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['C', 'G'],
    F: ['D'],
    G: ['E']
};

const startNode = 'A';
const endNode = 'G';

if (bidirectionalSearch(graph, startNode, endNode)) {
    console.log(`Path exists between ${startNode} and ${endNode}`);
} else {
    console.log(`No path exists between ${startNode} and ${endNode}`);
}
