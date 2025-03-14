type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) {
        return; // If already visited, return
    }

    visited.add(start); // Mark the node as visited
    console.log(start); // Process the node (e.g., print it)

    for (const neighbor of graph[start]) {
        dfsRecursive(graph, neighbor, visited); // Recur for each neighbor
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

dfsRecursive(graph, 'A');
type Graph = { [key: string]: string[] };

function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop()!; // Get the last element from the stack

        if (!visited.has(node)) {
            visited.add(node); // Mark the node as visited
            console.log(node); // Process the node (e.g., print it)

            // Add neighbors to the stack
            for (const neighbor of graph[node]) {
                stack.push(neighbor);
            }
        }
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

dfsIterative(graph, 'A');
