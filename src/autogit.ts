// Define the type for the adjacency list
type AdjacencyList = Map<number, number[]>;

/**
 * Breadth-First Search (BFS) function
 * @param graph - The graph represented as an adjacency list
 * @param startNode - The node to start the BFS traversal from
 */
function breadthFirstSearch(graph: AdjacencyList, startNode: number): void {
    // Queue for BFS traversal
    const queue: number[] = [];
    // Set to track visited nodes
    const visited: Set<number> = new Set();

    // Initialize the queue with the start node and mark it as visited
    queue.push(startNode);
    visited.add(startNode);

    console.log("BFS Traversal:");
    while (queue.length > 0) {
        // Dequeue the front node
        const currentNode = queue.shift()!;
        console.log(currentNode); // Process the current node

        // Get the neighbors of the current node
        const neighbors = graph.get(currentNode) || [];

        // Enqueue unvisited neighbors
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
    [1, [0, 3, 4]],
    [2, [0, 5]],
    [3, [1]],
    [4, [1]],
    [5, [2]]
]);

console.log("Graph:", graph);
breadthFirstSearch(graph, 0);
Graph: Map(6) {
  0 => [ 1, 2 ],
  1 => [ 0, 3, 4 ],
  2 => [ 0, 5 ],
  3 => [ 1 ],
  4 => [ 1 ],
  5 => [ 2 ]
}
BFS Traversal:
0
1
2
3
4
5
