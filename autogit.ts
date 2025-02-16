type Graph = {
    [key: string]: string[];
};
function dfsRecursive(graph: Graph, node: string, visited: Set<string> = new Set()): void {
    if (visited.has(node)) {
        return;
    }
    
    console.log(node); // Process the node
    visited.add(node); // Mark the node as visited

    for (const neighbor of graph[node] || []) {
        dfsRecursive(graph, neighbor, visited);
    }
}

// Example Usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

dfsRecursive(graph, 'A');
function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited = new Set<string>();

    while (stack.length) {
        const node = stack.pop()!;
        if (!visited.has(node)) {
            console.log(node); // Process the node
            visited.add(node);

            // Push neighbors onto the stack
            for (const neighbor of graph[node] || []) {
                stack.push(neighbor);
            }
        }
    }
}

// Example Usage
dfsIterative(graph, 'A');
