type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    // If the node has already been visited, return
    if (visited.has(start)) {
        return;
    }

    // Mark the current node as visited
    visited.add(start);
    console.log(start); // Process the node (for example, print it)

    // Recur for all the vertices adjacent to this vertex
    for (const neighbor of graph[start] || []) {
        dfsRecursive(graph, neighbor, visited);
    }
}

// Example of usage
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
    const visited = new Set<string>();
    const stack: string[] = [start];

    while (stack.length > 0) {
        const node = stack.pop()!;
        
        // If the node has already been visited, skip it
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node); // Process the node (for example, print it)

            // Push all unvisited neighbors onto the stack
            for (const neighbor of graph[node] || []) {
                stack.push(neighbor);
            }
        }
    }
}

// Example of usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

dfsIterative(graph, 'A');
