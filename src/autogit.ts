type Graph = Map<number, number[]>;

function dfsRecursive(graph: Graph, startNode: number, visited: Set<number> = new Set()): void {
    // Mark the current node as visited
    visited.add(startNode);
    console.log(`Visited node: ${startNode}`);

    // Recur for all adjacent nodes
    const neighbors = graph.get(startNode) || [];
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Example usage:
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [2]],
    [2, [0, 3]],
    [3, [3]]
]);

console.log("DFS Recursive:");
dfsRecursive(graph, 2); // Start DFS from node 2
function dfsIterative(graph: Graph, startNode: number): void {
    const stack: number[] = [startNode];
    const visited: Set<number> = new Set();

    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            console.log(`Visited node: ${currentNode}`);

            // Push all unvisited neighbors onto the stack
            const neighbors = graph.get(currentNode) || [];
            for (const neighbor of neighbors.reverse()) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example usage:
console.log("\nDFS Iterative:");
dfsIterative(graph, 2); // Start DFS from node 2
type Graph = Map<number, number[]>;

// Recursive DFS
function dfsRecursive(graph: Graph, startNode: number, visited: Set<number> = new Set()): void {
    visited.add(startNode);
    console.log(`Visited node: ${startNode}`);
    const neighbors = graph.get(startNode) || [];
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Iterative DFS
function dfsIterative(graph: Graph, startNode: number): void {
    const stack: number[] = [startNode];
    const visited: Set<number> = new Set();
    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        if (!visited.has(currentNode)) {
            visited.add(currentNode);
            console.log(`Visited node: ${currentNode}`);
            const neighbors = graph.get(currentNode) || [];
            for (const neighbor of neighbors.reverse()) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example graph
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [2]],
    [2, [0, 3]],
    [3, [3]]
]);

// Run DFS
console.log("DFS Recursive:");
dfsRecursive(graph, 2);

console.log("\nDFS Iterative:");
dfsIterative(graph, 2);
