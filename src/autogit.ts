type Graph = Map<number, Array<[number, number]>>;
function dijkstra(graph: Graph, startNode: number): Map<number, number> {
    // Priority queue (min-heap) to store [distance, node]
    const priorityQueue: Array<[number, number]> = [[0, startNode]];
    
    // Map to store the shortest distance to each node
    const distances = new Map<number, number>();
    distances.set(startNode, 0);

    // Set to track visited nodes
    const visited = new Set<number>();

    while (priorityQueue.length > 0) {
        // Sort the priority queue by distance (ascending)
        priorityQueue.sort((a, b) => a[0] - b[0]);

        // Extract the node with the smallest distance
        const [currentDistance, currentNode] = priorityQueue.shift()!;

        // If the node has already been visited, skip it
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

        // Explore neighbors of the current node
        const neighbors = graph.get(currentNode) || [];
        for (const [neighbor, weight] of neighbors) {
            if (visited.has(neighbor)) continue;

            // Calculate the new distance to the neighbor
            const newDistance = currentDistance + weight;

            // Update the distance if it's shorter than the previously known distance
            if (!distances.has(neighbor) || newDistance < distances.get(neighbor)!) {
                distances.set(neighbor, newDistance);
                priorityQueue.push([newDistance, neighbor]);
            }
        }
    }

    return distances;
}
// Create a graph
const graph: Graph = new Map();
graph.set(0, [[1, 4], [2, 1]]);
graph.set(1, [[3, 1]]);
graph.set(2, [[1, 2], [3, 5]]);
graph.set(3, []);

// Run Dijkstra's algorithm
const startNode = 0;
const shortestDistances = dijkstra(graph, startNode);

// Print the results
console.log("Shortest distances from node", startNode, ":");
for (const [node, distance] of shortestDistances.entries()) {
    console.log(`Node ${node}: ${distance}`);
}
Shortest distances from node 0 :
Node 0: 0
Node 1: 3
Node 2: 1
Node 3: 4
