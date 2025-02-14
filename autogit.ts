type Graph = {
    [key: string]: { node: string; weight: number }[];
};

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const queue: Set<string> = new Set();
    
    for (const node in graph) {
        distances[node] = Infinity; // Initialize distances
        queue.add(node);
    }
    distances[start] = 0; // Distance to the start node is 0

    while (queue.size > 0) {
        // Get the node with the smallest distance
        let closestNode: string | null = null;
        for (const node of queue) {
            if (closestNode === null || distances[node] < distances[closestNode]) {
                closestNode = node;
            }
        }

        // Stop if we reach a node with Infinity distance
        if (distances[closestNode!] === Infinity) {
            break;
        }

        queue.delete(closestNode!); // Remove the closest node from the queue
        const neighbors = graph[closestNode!];

        for (const { node, weight } of neighbors) {
            const distance = distances[closestNode!] + weight;

            // Update the distance if it's smaller
            if (distance < distances[node]) {
                distances[node] = distance;
            }
        }
    }

    return distances;
}

// Example usage:
const graph: Graph = {
    A: [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
    B: [{ node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
    C: [{ node: 'D', weight: 1 }],
    D: []
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths); // Output: { A: 0, B: 1, C: 3, D: 4 }
