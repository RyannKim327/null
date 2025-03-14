type Graph = { [key: string]: string[] };

function depthFirstSearch(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    // Mark the current node as visited
    visited.add(start);
    console.log(start); // Process the node (e.g., print it)

    // Recur for all the vertices adjacent to this vertex
    for (const neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            depthFirstSearch(graph, neighbor, visited);
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

depthFirstSearch(graph, 'A');
type Graph = { [key: string]: string[] };

function depthFirstSearchIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop();
        if (node && !visited.has(node)) {
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
