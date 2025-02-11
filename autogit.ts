A -- B
|    |
C -- D
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
};
type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, start: string, visited: Set<string> = new Set()): void {
    if (visited.has(start)) {
        return; // Already visited
    }

    console.log(start); // Process the node
    visited.add(start);

    for (let neighbor of graph[start]) {
        dfsRecursive(graph, neighbor, visited);
    }
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
};

dfsRecursive(graph, 'A');
type Graph = { [key: string]: string[] };

function dfsIterative(graph: Graph, start: string): void {
    const stack: string[] = [start];
    const visited: Set<string> = new Set();

    while (stack.length > 0) {
        const node = stack.pop()!;
        if (!visited.has(node)) {
            console.log(node); // Process the node
            visited.add(node);

            // Add neighbors to the stack (reverse to maintain order)
            for (let neighbor of graph[node].reverse()) {
                stack.push(neighbor);
            }
        }
    }
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
};

dfsIterative(graph, 'A');
