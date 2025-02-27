type Graph = {
    [key: string]: { neighbor: string; weight: number }[];
};

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const priorityQueue: [string, number][] = [];
    const visited: Set<string> = new Set();

    // Initialize distances
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    priorityQueue.push([start, 0]);

    while (priorityQueue.length > 0) {
        // Sort the queue by distance and get the node with the smallest distance
        priorityQueue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDistance] = priorityQueue.shift()!;

        if (visited.has(currentNode)) {
            continue;
        }
        visited.add(currentNode);

        // Explore neighbors
        for (const { neighbor, weight } of graph[currentNode]) {
            const newDistance = currentDistance + weight;

            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                priorityQueue.push([neighbor, newDistance]);
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
