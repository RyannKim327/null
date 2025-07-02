type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    // Mark the current node as visited
    visited.add(start);
    console.log(start); // Process the current node (e.g., print it)

    // Recur for all the vertices adjacent to this vertex
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Example usage:
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

dfsRecursive(graph, 'A');
type Graph = { [key: string]: string[] };

function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop()!;
        
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node); // Process the current node (e.g., print it)

            // Add all unvisited neighbors to the stack
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example usage:
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

dfsIterative(graph, 'A');
