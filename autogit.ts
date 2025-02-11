type Graph = {
    [key: string]: { node: string; weight: number }[];
};

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const priorityQueue: { node: string; distance: number }[] = [];
    const visited: Set<string> = new Set();

    // Initialize distances
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    priorityQueue.push({ node: start, distance: 0 });

    while (priorityQueue.length > 0) {
        // Sort the queue by distance
        priorityQueue.sort((a, b) => a.distance - b.distance);
        const { node: currentNode } = priorityQueue.shift()!;

        if (visited.has(currentNode)) {
            continue;
        }
        visited.add(currentNode);

        // Explore neighbors
        for (const neighbor of graph[currentNode]) {
            const newDistance = distances[currentNode] + neighbor.weight;

            if (newDistance < distances[neighbor.node]) {
                distances[neighbor.node] = newDistance;
                priorityQueue.push({ node: neighbor.node, distance: newDistance });
            }
        }
    }

    return distances;
}

// Example usage
const graph: Graph = {
    A: [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
    B: [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
    C: [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }, { node: 'D', weight: 1 }],
    D: [{ node: 'B', weight: 5 }, { node: 'C', weight: 1 }],
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths);
