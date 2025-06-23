type Graph = Map<number, number[]>;

function bfs(graph: Graph, startNode: number): void {
    // Queue to manage nodes to visit
    const queue: number[] = [startNode];
    // Set to track visited nodes
    const visited: Set<number> = new Set([startNode]);

    console.log("Breadth-First Search Traversal:");
    while (queue.length > 0) {
        // Dequeue the front node
        const currentNode = queue.shift()!;
        console.log(currentNode);

        // Get neighbors of the current node
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

// Example usage
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [2]],
    [2, [0, 3]],
    [3, [3]]
]);

console.log("Graph Representation:", graph);
bfs(graph, 2); // Start BFS from node 2
Graph Representation: Map(4) { 0 => [ 1, 2 ], 1 => [ 2 ], 2 => [ 0, 3 ], 3 => [ 3 ] }
Breadth-First Search Traversal:
2
0
3
1
