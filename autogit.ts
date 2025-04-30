// Define a type for the graph using an adjacency list
type Graph = {
    [key: string]: string[];
};
function depthFirstSearchRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) {
        return; // Node already visited
    }

    console.log(start); // Process the node
    visited.add(start); // Mark the node as visited

    for (const neighbor of graph[start] || []) {
        depthFirstSearchRecursive(graph, neighbor, visited);
    }
}

// Example usage:
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

depthFirstSearchRecursive(graph, 'A');
function depthFirstSearchIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited = new Set<string>();

    while (stack.length > 0) {
        const node = stack.pop()!;
        if (!visited.has(node)) {
            console.log(node); // Process the node
            visited.add(node); // Mark the node as visited

            // Add neighbors to the stack (in reverse order for correct processing)
            for (const neighbor of graph[node] || []).reverse() {
                stack.push(neighbor);
            }
        }
    }
}

// Example usage:
depthFirstSearchIterative(graph, 'A');
A
B
D
E
C
F
