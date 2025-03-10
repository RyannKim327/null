type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) {
        return;
    }

    // Mark the current node as visited
    visited.add(start);
    console.log(start); // Process the node (e.g., print it)

    // Recur for all the vertices adjacent to this vertex
    for (const neighbor of graph[start]) {
        dfsRecursive(graph, neighbor, visited);
    }
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
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
            console.log(node); // Process the node (e.g., print it)

            // Push all unvisited neighbors onto the stack
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

dfsIterative(graph, 'A');
