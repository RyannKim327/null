// Define a graph using an adjacency list
type Graph = Map<number, number[]>;

/**
 * Breadth-First Search (BFS) function
 * @param graph - The graph represented as an adjacency list
 * @param startNode - The node to start the BFS from
 */
function bfs(graph: Graph, startNode: number): void {
    // Queue to manage the nodes to visit
    const queue: number[] = [];
    
    // Set to track visited nodes
    const visited: Set<number> = new Set();

    // Initialize the BFS by adding the start node to the queue and marking it as visited
    queue.push(startNode);
    visited.add(startNode);

    console.log("BFS Traversal:");

    // Process the queue until it's empty
    while (queue.length > 0) {
        // Dequeue the front node
        const currentNode = queue.shift()!;
        console.log(currentNode); // Process the current node (e.g., print it)

        // Get all neighbors of the current node
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
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [2]],
    [2, [0, 3]],
    [3, [3]] // Node 3 has a self-loop
]);

console.log("Graph:");
console.log(graph);

bfs(graph, 2); // Start BFS from node 2
Graph:
Map(4) {
  0 => [ 1, 2 ],
  1 => [ 2 ],
  2 => [ 0, 3 ],
  3 => [ 3 ]
}
BFS Traversal:
2
0
3
1
