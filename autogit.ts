type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) {
        return; // If already visited, return
    }

    console.log(start); // Process the node
    visited.add(start); // Mark the node as visited

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
    E: ['F'],
    F: []
};

dfsRecursive(graph, 'A');
type Graph = { [key: string]: string[] };

function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop()!;
        
        if (visited.has(node)) {
            continue; // If already visited, skip
        }

        console.log(node); // Process the node
        visited.add(node); // Mark the node as visited

        // Push all unvisited neighbors onto the stack
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
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
    E: ['F'],
    F: []
};

dfsIterative(graph, 'A');
