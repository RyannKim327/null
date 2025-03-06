type Graph = {
    [key: string]: string[];
};

const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};
function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) return;

    visited.add(start);
    console.log(start); // Process the node

    for (const neighbor of graph[start]) {
        dfsRecursive(graph, neighbor, visited);
    }
}

// Usage
console.log("DFS Recursive:");
dfsRecursive(graph, 'A'); // Start from node 'A'
function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited = new Set<string>();

    while (stack.length > 0) {
        const node = stack.pop();
        if (!node || visited.has(node)) continue;

        visited.add(node);
        console.log(node); // Process the node

        // Push neighbors to stack (reverse order to maintain left-right traversal)
        for (const neighbor of graph[node].reverse()) {
            stack.push(neighbor);
        }
    }
}

// Usage
console.log("DFS Iterative:");
dfsIterative(graph, 'A'); // Start from node 'A'
