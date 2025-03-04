type Graph = {
    [key: string]: { [key: string]: number }; // adjacency list
};

function dijkstra(graph: Graph, start: string): { [key: string]: number | undefined } {
    // Initialize distance object
    const distances: { [key: string]: number | undefined } = {};
    const priorityQueue: Array<[string, number]> = []; // min-heap in form of array
    const visited: Set<string> = new Set();

    // Initialize distances and priority queue
    for (const node in graph) {
        distances[node] = Infinity; // Initially, all distances are infinite
    }
    distances[start] = 0; // Distance to the start node is 0
    priorityQueue.push([start, 0]);

    while (priorityQueue.length > 0) {
        // Sort the queue based on the distance (smallest first)
        priorityQueue.sort((a, b) => a[1] - b[1]);
        
        // Get the node with the smallest distance
        const [currentNode] = priorityQueue.shift()!;
        
        if (visited.has(currentNode)) {
            continue; // Skip if we've already visited this node
        }
        visited.add(currentNode);

        // Explore neighbors
        for (const neighbor in graph[currentNode]) {
            const weight = graph[currentNode][neighbor];
            const newDistance = distances[currentNode]! + weight;

            if (newDistance < (distances[neighbor] || Infinity)) {
                distances[neighbor] = newDistance;
                priorityQueue.push([neighbor, newDistance]);
            }
        }
    }

    return distances;
}

// Example usage
const graph: Graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 },
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths); // Outputs distances from A to all other nodes
