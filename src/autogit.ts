// Define the type for the adjacency list
type Graph = Map<number, number[]>;

/**
 * Breadth-First Search Algorithm
 * @param graph - The graph represented as an adjacency list
 * @param startNode - The node to start the BFS from
 */
function breadthFirstSearch(graph: Graph, startNode: number): void {
    // Initialize a queue with the starting node
    const queue: number[] = [startNode];
    // Track visited nodes to avoid cycles
    const visited: Set<number> = new Set<number>();
    visited.add(startNode);

    console.log("BFS Traversal:");

    while (queue.length > 0) {
        // Dequeue the front node
        const currentNode = queue.shift()!;
        console.log(currentNode); // Process the current node (e.g., print it)

        // Get the neighbors of the current node
        const neighbors = graph.get(currentNode) || [];

        // Enqueue unvisited neighbors
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Example Usage
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [2]],
    [2, [0, 3]],
    [3, [3]] // Self-loop
]);

console.log("Graph:");
console.log(graph);

// Perform BFS starting from node 2
breadthFirstSearch(graph, 2);
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
