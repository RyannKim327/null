type Graph = Map<number, number[]>;
function bfs(graph: Graph, startNode: number): number[] {
    const visited: Set<number> = new Set(); // To track visited nodes
    const queue: number[] = [];            // Queue for BFS traversal
    const traversalOrder: number[] = [];   // To store the order of traversal

    // Initialize the BFS
    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift()!; // Dequeue the front node
        traversalOrder.push(currentNode);  // Record the current node

        // Explore all neighbors of the current node
        for (const neighbor of graph.get(currentNode) || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return traversalOrder;
}
// Define the graph as an adjacency list
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [0, 3, 4]],
    [2, [0, 5]],
    [3, [1]],
    [4, [1, 5]],
    [5, [2, 4]]
]);

// Perform BFS starting from node 0
const result = bfs(graph, 0);
console.log("BFS Traversal Order:", result);
BFS Traversal Order: [0, 1, 2, 3, 4, 5]
