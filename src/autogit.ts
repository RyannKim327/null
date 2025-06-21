// Define the type for the adjacency list
type AdjacencyList = Map<number, number[]>;

/**
 * Breadth-First Search (BFS) function.
 * @param graph - The graph represented as an adjacency list.
 * @param startNode - The starting node for the BFS traversal.
 */
function bfs(graph: AdjacencyList, startNode: number): void {
    // Queue to manage the BFS traversal
    const queue: number[] = [];
    // Set to track visited nodes
    const visited: Set<number> = new Set();

    // Initialize the BFS by adding the start node to the queue and marking it as visited
    queue.push(startNode);
    visited.add(startNode);

    console.log("BFS Traversal:");

    // Perform BFS
    while (queue.length > 0) {
        // Dequeue the front node from the queue
        const currentNode = queue.shift()!;
        console.log(currentNode); // Process the current node (e.g., print it)

        // Get the neighbors of the current node
        const neighbors = graph.get(currentNode) || [];

        // Add unvisited neighbors to the queue and mark them as visited
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }
}

// Example usage
const graph: AdjacencyList = new Map([
    [0, [1, 2]],
    [1, [2]],
    [2, [0, 3]],
    [3, [3]]
]);

console.log("Graph Representation:");
console.log(graph);

bfs(graph, 2); // Start BFS traversal from node 2
