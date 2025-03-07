type Graph = {
    [key: string]: { neighbor: string; weight: number }[];
};

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const priorityQueue: { node: string; distance: number }[] = [];
    const visited: Set<string> = new Set();

    // Initialize distances and priority queue
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    priorityQueue.push({ node: start, distance: 0 });

    while (priorityQueue.length > 0) {
        // Sort the queue by distance
        priorityQueue.sort((a, b) => a.distance - b.distance);
        const { node } = priorityQueue.shift()!;

        if (visited.has(node)) continue;
        visited.add(node);

        // Update distances to neighbors
        for (const { neighbor, weight } of graph[node]) {
            const newDistance = distances[node] + weight;
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                priorityQueue.push({ node: neighbor, distance: newDistance });
            }
        }
    }

    return distances;
}

// Example usage
const graph: Graph = {
    A: [{ neighbor: 'B', weight: 1 }, { neighbor: 'C', weight: 4 }],
    B: [{ neighbor: 'A', weight: 1 }, { neighbor: 'C', weight: 2 }, { neighbor: 'D', weight: 5 }],
    C: [{ neighbor: 'A', weight: 4 }, { neighbor: 'B', weight: 2 }, { neighbor: 'D', weight: 1 }],
    D: [{ neighbor: 'B', weight: 5 }, { neighbor: 'C', weight: 1 }],
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths);
