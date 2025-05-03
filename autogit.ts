type Graph = {
    [key: string]: { neighbor: string; weight: number; }[]
};
function dijkstra(graph: Graph, start: string): { [key: string]: number } {
    // Distances object to store the minimum distance to each node
    const distances: { [key: string]: number } = {};
    // Priority queue for managing the nodes to explore
    const priorityQueue: [string, number][] = [];
    
    // Initialize distances and priority queue
    for (let node in graph) {
        distances[node] = Infinity; // Set initial distances to Infinity
    }
    distances[start] = 0; // Distance to the start node is 0
    priorityQueue.push([start, 0]); // Push the start node into the queue

    while (priorityQueue.length > 0) {
        // Sort the queue by distance and get the node with the smallest distance
        priorityQueue.sort((a, b) => a[1] - b[1]);
        const [currentNode, currentDistance] = priorityQueue.shift()!;

        if (currentDistance > distances[currentNode]) continue;

        // Explore neighbors
        for (let neighbor of graph[currentNode]) {
            const newDistance = currentDistance + neighbor.weight;
            
            // If new distance is shorter, update the distances and queue
            if (newDistance < distances[neighbor.neighbor]) {
                distances[neighbor.neighbor] = newDistance;
                priorityQueue.push([neighbor.neighbor, newDistance]);
            }
        }
    }

    return distances;
}
const graph: Graph = {
    A: [{ neighbor: 'B', weight: 1 }, { neighbor: 'C', weight: 4 }],
    B: [{ neighbor: 'A', weight: 1 }, { neighbor: 'C', weight: 2 }, { neighbor: 'D', weight: 5 }],
    C: [{ neighbor: 'A', weight: 4 }, { neighbor: 'B', weight: 2 }, { neighbor: 'D', weight: 1 }],
    D: [{ neighbor: 'B', weight: 5 }, { neighbor: 'C', weight: 1 }],
};

const result = dijkstra(graph, 'A');
console.log(result);
