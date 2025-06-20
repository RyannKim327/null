type Graph = Map<number, number[]>;

function dfsRecursive(graph: Graph, startNode: number): void {
    const visited = new Set<number>();

    function dfs(node: number): void {
        // Mark the current node as visited
        visited.add(node);
        console.log(`Visited node: ${node}`);

        // Traverse all adjacent nodes
        const neighbors = graph.get(node) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                dfs(neighbor); // Recursively visit the neighbor
            }
        }
    }

    // Start DFS from the given start node
    dfs(startNode);
}

// Example usage
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [2]],
    [2, [0, 3]],
    [3, [3]]
]);

console.log("DFS Recursive:");
dfsRecursive(graph, 2);
type Graph = Map<number, number[]>;

function dfsIterative(graph: Graph, startNode: number): void {
    const visited = new Set<number>();
    const stack: number[] = [startNode]; // Initialize stack with the start node

    while (stack.length > 0) {
        const node = stack.pop()!; // Pop the top node from the stack
        if (!visited.has(node)) {
            visited.add(node);
            console.log(`Visited node: ${node}`);

            // Push all unvisited neighbors onto the stack
            const neighbors = graph.get(node) || [];
            for (const neighbor of neighbors.reverse()) {
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
    [1, [2]],
    [2, [0, 3]],
    [3, [3]]
]);

console.log("DFS Iterative:");
dfsIterative(graph, 2);
{
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}
DFS Recursive:
Visited node: 2
Visited node: 0
Visited node: 1
Visited node: 3

DFS Iterative:
Visited node: 2
Visited node: 0
Visited node: 1
Visited node: 3
