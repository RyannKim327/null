type Edge = {
    node: string;
    weight: number;
};

type Graph = {
    [key: string]: Edge[];
};

function dijkstra(graph: Graph, startNode: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const visited: Set<string> = new Set();
    const priorityQueue: [string, number][] = [[startNode, 0]];

    // Initialize distances
    for (const node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    while (priorityQueue.length) {
        // Sort the queue based on the distance
        priorityQueue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDistance] = priorityQueue.shift()!;

        // If the node has been visited, skip it
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        // Explore neighbors
        for (const edge of graph[currentNode]) {
            const distance = currentDistance + edge.weight;

            // If the calculated distance is less, update it
            if (distance < distances[edge.node]) {
                distances[edge.node] = distance;
                priorityQueue.push([edge.node, distance]);
            }
        }
    }

    return distances;
}

// Example usage
const graph: Graph = {
    A: [{node: 'B', weight: 1}, {node: 'C', weight: 4}],
    B: [{node: 'C', weight: 2}, {node: 'D', weight: 5}],
    C: [{node: 'D', weight: 1}],
    D: [],
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths);
