type Graph = Map<number, number[]>;
function bfs(graph: Graph, startNode: number): void {
    // A set to track visited nodes to avoid revisiting them
    const visited = new Set<number>();
    // A queue to manage the BFS traversal
    const queue: number[] = [];

    // Mark the start node as visited and enqueue it
    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        // Dequeue the front node
        const currentNode = queue.shift()!;
        console.log(`Visited node: ${currentNode}`);

        // Get all neighbors of the current node
        const neighbors = graph.get(currentNode) || [];

        // Visit each neighbor if it hasn't been visited yet
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}
// Create a graph as an adjacency list
const graph: Graph = new Map([
    [1, [2, 3]],
    [2, [4, 5]],
    [3, [6]],
    [4, []],
    [5, []],
    [6, []],
]);

// Run BFS starting from node 1
console.log("BFS Traversal:");
bfs(graph, 1);
BFS Traversal:
Visited node: 1
Visited node: 2
Visited node: 3
Visited node: 4
Visited node: 5
Visited node: 6
function bfsWithResult(graph: Graph, startNode: number): number[] {
    const visited = new Set<number>();
    const queue: number[] = [];
    const result: number[] = [];

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        result.push(currentNode);

        const neighbors = graph.get(currentNode) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

// Example usage
const visitedNodes = bfsWithResult(graph, 1);
console.log("Visited Nodes:", visitedNodes);
