type Graph = { [key: string]: string[] };

function depthFirstSearch(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) {
        return; // If the node has already been visited, return
    }

    console.log(start); // Process the current node
    visited.add(start); // Mark the node as visited

    for (const neighbor of graph[start]) {
        depthFirstSearch(graph, neighbor, visited); // Recursively visit each neighbor
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

depthFirstSearch(graph, 'A');
type Graph = { [key: string]: string[] };

function depthFirstSearchIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop()!; // Get the last node from the stack

        if (!visited.has(node)) {
            console.log(node); // Process the current node
            visited.add(node); // Mark the node as visited

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

depthFirstSearchIterative(graph, 'A');
