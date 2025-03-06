type Graph = { [key: string]: string[] };

function depthFirstSearchRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) {
        return;
    }
    
    console.log(start);  // Process the node (e.g., print it)
    visited.add(start);

    const neighbors = graph[start] || [];
    for (const neighbor of neighbors) {
        depthFirstSearchRecursive(graph, neighbor, visited);
    }
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: [],
};

depthFirstSearchRecursive(graph, 'A');
type Graph = { [key: string]: string[] };

function depthFirstSearchIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop()!;
        
        if (visited.has(node)) {
            continue;
        }
        
        console.log(node);  // Process the node (e.g., print it)
        visited.add(node);

        const neighbors = graph[node] || [];
        // Push neighbors to the stack in reverse order to maintain the proper order of processing
        for (let i = neighbors.length - 1; i >= 0; i--) {
            stack.push(neighbors[i]);
        }
    }
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: [],
};

depthFirstSearchIterative(graph, 'A');
