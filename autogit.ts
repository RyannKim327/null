type Graph = {
    [key: string]: { neighbor: string; weight: number }[];
};

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
    // Create a map to track the shortest distance to each node
    const distances: { [key: string]: number } = {};
    const visited: Set<string> = new Set();
    const priorityQueue: { node: string; distance: number }[] = [];

    // Initialize distances
    for (const node in graph) {
        distances[node] = Infinity; // Set initial distance to "infinity"
    }
    distances[start] = 0; // Distance to the start node is 0

    // Add the start node to the priority queue
    priorityQueue.push({ node: start, distance: 0 });

    while (priorityQueue.length > 0) {
        // Sort the priority queue by the distance (smallest distance first)
        priorityQueue.sort((a, b) => a.distance - b.distance);
        const { node: currentNode } = priorityQueue.shift()!; // Get the node with the smallest distance

        if (visited.has(currentNode)) {
            continue; // If we've visited this node, skip it
        }
        visited.add(currentNode);

        // Explore neighbors
        for (const { neighbor, weight } of graph[currentNode]) {
            const newDistance = distances[currentNode] + weight;

            // Only consider this new path if it's better
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
    A: [{ neighbor: "B", weight: 1 }, { neighbor: "C", weight: 4 }],
    B: [{ neighbor: "A", weight: 1 }, { neighbor: "C", weight: 2 }, { neighbor: "D", weight: 5 }],
    C: [{ neighbor: "A", weight: 4 }, { neighbor: "B", weight: 2 }, { neighbor: "D", weight: 1 }],
    D: [{ neighbor: "B", weight: 5 }, { neighbor: "C", weight: 1 }],
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
