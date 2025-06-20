type Graph = Map<number, { node: number; weight: number }[]>;

function dijkstra(graph: Graph, startNode: number): Map<number, number> {
    // Priority queue to process nodes with the smallest distance first
    const pq = new MinPriorityQueue<{ distance: number; node: number }>();
    pq.enqueue({ distance: 0, node: startNode }, 0);

    // Map to store the shortest distance to each node
    const distances = new Map<number, number>();
    distances.set(startNode, 0);

    // Process nodes until the priority queue is empty
    while (!pq.isEmpty()) {
        const { element } = pq.dequeue();
        const { distance: currentDistance, node: currentNode } = element;

        // If we already found a shorter path to this node, skip it
        if (currentDistance > (distances.get(currentNode) || Infinity)) continue;

        // Explore neighbors of the current node
        const neighbors = graph.get(currentNode) || [];
        for (const { node: neighbor, weight } of neighbors) {
            const newDistance = currentDistance + weight;

            // If we found a shorter path to the neighbor, update the distance
            if (newDistance < (distances.get(neighbor) || Infinity)) {
                distances.set(neighbor, newDistance);
                pq.enqueue({ distance: newDistance, node: neighbor }, newDistance);
            }
        }
    }

    return distances;
}

// Helper class for MinPriorityQueue (using a library or implementing your own)
class MinPriorityQueue<T> {
    private heap: { priority: number; value: T }[] = [];

    enqueue(value: T, priority: number): void {
        this.heap.push({ priority, value });
        this.heap.sort((a, b) => a.priority - b.priority);
    }

    dequeue(): { priority: number; value: T } {
        return this.heap.shift()!;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}
// Define the graph
const graph: Graph = new Map([
    [0, [{ node: 1, weight: 4 }, { node: 2, weight: 1 }]],
    [1, [{ node: 3, weight: 1 }]],
    [2, [{ node: 1, weight: 2 }, { node: 3, weight: 5 }]],
    [3, []],
]);

// Find shortest paths from node 0
const shortestPaths = dijkstra(graph, 0);

// Print the results
console.log("Shortest distances from node 0:");
for (const [node, distance] of shortestPaths) {
    console.log(`Node ${node}: ${distance}`);
}
Shortest distances from node 0:
Node 0: 0
Node 1: 3
Node 2: 1
Node 3: 4
