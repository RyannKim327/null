// Define a type for the adjacency list representation of a graph
type Graph = { [key: string]: string[] };

// Example of a graph using an adjacency list
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

// Recursive DFS implementation
function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    // Mark the current node as visited
    visited.add(start);
    console.log(start); // Process the node

    // Go through each neighbor
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Iterative DFS implementation
function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited = new Set<string>();

    while (stack.length > 0) {
        const node = stack.pop()!;
        if (!visited.has(node)) {
            visited.add(node);
            console.log(node); // Process the node
            // Push neighbors onto the stack
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Test the recursive DFS
console.log("Recursive DFS:");
dfsRecursive(graph, 'A');

// Test the iterative DFS
console.log("Iterative DFS:");
dfsIterative(graph, 'A');
