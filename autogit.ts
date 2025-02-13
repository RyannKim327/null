type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, node: string, visited: Set<string> = new Set()): void {
    // Mark the current node as visited
    visited.add(node);
    console.log(node);  // Process the node (e.g., print it)

    // Recur for all the vertices adjacent to this vertex
    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Example usage
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['D'],
    'F': []
};

console.log("Depth-First Search (Recursive):");
dfsRecursive(graph, 'A');
function dfsIterative(graph: Graph, startNode: string): void {
    const visited = new Set<string>();
    const stack: string[] = [startNode];

    while (stack.length > 0) {
        const node = stack.pop()!;
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node);  // Process the node (e.g., print it)

            // Push all adjacent unvisited nodes onto the stack
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example usage
console.log("Depth-First Search (Iterative):");
dfsIterative(graph, 'A');
