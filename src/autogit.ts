type Graph = { [key: string]: string[] };

const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};
function dfsRecursive(graph: Graph, node: string, visited: Set<string> = new Set()): void {
    if (visited.has(node)) {
        return; // If the node has already been visited, return
    }

    visited.add(node); // Mark the node as visited
    console.log(node); // Process the node (e.g., print it)

    for (const neighbor of graph[node]) {
        dfsRecursive(graph, neighbor, visited); // Recur for each neighbor
    }
}

// Usage
const visitedNodes = new Set<string>();
dfsRecursive(graph, 'A', visitedNodes);
function dfsIterative(graph: Graph, startNode: string): void {
    const stack: string[] = [startNode];
    const visited = new Set<string>();

    while (stack.length > 0) {
        const node = stack.pop()!; // Get the last node from the stack

        if (!visited.has(node)) {
            visited.add(node); // Mark the node as visited
            console.log(node); // Process the node (e.g., print it)

            // Add all unvisited neighbors to the stack
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Usage
dfsIterative(graph, 'A');
