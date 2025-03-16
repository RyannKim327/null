type Graph = {
    [key: string]: { node: string; weight: number }[];
};

function dijkstra(graph: Graph, start: string): { distances: { [key: string]: number }, previous: { [key: string]: string | null } } {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const priorityQueue: { node: string; distance: number }[] = [];

    // Initialize distances and priority queue
    for (const node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    distances[start] = 0;
    priorityQueue.push({ node: start, distance: 0 });

    while (priorityQueue.length > 0) {
        // Sort the queue by distance
        priorityQueue.sort((a, b) => a.distance - b.distance);
        const { node: currentNode } = priorityQueue.shift()!;

        // Explore neighbors
        for (const neighbor of graph[currentNode]) {
            const distance = distances[currentNode] + neighbor.weight;

            // Only consider this new path if it's better
            if (distance < distances[neighbor.node]) {
                distances[neighbor.node] = distance;
                previous[neighbor.node] = currentNode;
                priorityQueue.push({ node: neighbor.node, distance });
            }
        }
    }

    return { distances, previous };
}

function getShortestPath(previous: { [key: string]: string | null }, target: string): string[] {
    const path: string[] = [];
    let currentNode: string | null = target;

    while (currentNode) {
        path.unshift(currentNode);
        currentNode = previous[currentNode];
    }

    return path;
}

// Example usage
const graph: Graph = {
    A: [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
    B: [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
    C: [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }, { node: 'D', weight: 1 }],
    D: [{ node: 'B', weight: 5 }, { node: 'C', weight: 1 }],
};

const { distances, previous } = dijkstra(graph, 'A');
console.log('Distances:', distances);
console.log('Shortest path from A to D:', getShortestPath(previous, 'D'));
