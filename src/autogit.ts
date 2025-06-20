type Graph = Map<number, number[]>;

function dfsRecursive(graph: Graph, startNode: number, visited: Set<number> = new Set()): void {
    // Mark the current node as visited
    console.log(`Visiting node: ${startNode}`);
    visited.add(startNode);

    // Get the neighbors of the current node
    const neighbors = graph.get(startNode) || [];

    // Recursively visit each unvisited neighbor
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Example usage
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [0, 3, 4]],
    [2, [0]],
    [3, [1]],
    [4, [1, 5]],
    [5, [4]]
]);

console.log("Recursive DFS:");
dfsRecursive(graph, 0);
type Graph = Map<number, number[]>;

function dfsIterative(graph: Graph, startNode: number): void {
    // Initialize a stack and a set to track visited nodes
    const stack: number[] = [startNode];
    const visited: Set<number> = new Set();

    while (stack.length > 0) {
        // Pop the top node from the stack
        const currentNode = stack.pop()!;
        if (!visited.has(currentNode)) {
            // Mark the node as visited
            console.log(`Visiting node: ${currentNode}`);
            visited.add(currentNode);

            // Push unvisited neighbors onto the stack
            const neighbors = graph.get(currentNode) || [];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example usage
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [0, 3, 4]],
    [2, [0]],
    [3, [1]],
    [4, [1, 5]],
    [5, [4]]
]);

console.log("Iterative DFS:");
dfsIterative(graph, 0);
0 -> [1, 2]
1 -> [0, 3, 4]
2 -> [0]
3 -> [1]
4 -> [1, 5]
5 -> [4]
Visiting node: 0
Visiting node: 1
Visiting node: 3
Visiting node: 4
Visiting node: 5
Visiting node: 2
