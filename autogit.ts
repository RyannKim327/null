type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, node: string, visited: Set<string> = new Set()): void {
    if (visited.has(node)) {
        return;
    }

    visited.add(node);
    console.log(node); // Process the node (could be any operation)
    
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

dfsRecursive(graph, 'A'); // Output: A B D E C F
type Graph = { [key: string]: string[] };

function dfsIterative(graph: Graph, startNode: string): void {
    const stack: string[] = [startNode];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop();
        
        if (!node || visited.has(node)) {
            continue;
        }

        visited.add(node);
        console.log(node); // Process the node (could be any operation)

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

dfsIterative(graph, 'A'); // Output: A C F B E D (the output order might vary since it's stack-based)
