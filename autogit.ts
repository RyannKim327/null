type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, node: string, visited: Set<string> = new Set()): void {
    if (visited.has(node)) {
        return; // Node has already been visited
    }

    visited.add(node);
    console.log(node); // Process the node (e.g., print it)

    for (const neighbor of graph[node]) {
        dfsRecursive(graph, neighbor, visited);
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

function dfsIterative(graph: Graph, startNode: string): void {
    const stack: string[] = [startNode];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop()!;
        
        if (visited.has(node)) {
            continue; // Node has already been visited
        }

        visited.add(node);
        console.log(node); // Process the node (e.g., print it)

        // Push neighbors onto the stack
        for (const neighbor of graph[node]) {
            stack.push(neighbor);
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
