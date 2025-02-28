type Graph = {
    [key: string]: string[]; // Adjacency list
};

function bfs(graph: Graph, startNode: string): string[] {
    const visited: Set<string> = new Set();
    const queue: string[] = [];
    const result: string[] = [];

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node);
            const neighbors = graph[node];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    return result;
}

// Example Usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};

const result = bfs(graph, 'A');
console.log(result); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
