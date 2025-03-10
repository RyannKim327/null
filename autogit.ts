type Graph = { [key: string]: string[] };

function breadthLimitedSearch(graph: Graph, startNode: string, limit: number): string[] {
    const queue: { node: string; depth: number }[] = [{ node: startNode, depth: 0 }];
    const visited: Set<string> = new Set();
    const result: string[] = [];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        // Check if the node has been visited
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            // If the current depth is less than the limit, enqueue the neighbors
            if (depth < limit) {
                const neighbors = graph[node] || [];
                for (const neighbor of neighbors) {
                    queue.push({ node: neighbor, depth: depth + 1 });
                }
            }
        }
    }

    return result;
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

const startNode = 'A';
const limit = 2;
const result = breadthLimitedSearch(graph, startNode, limit);
console.log(result); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
