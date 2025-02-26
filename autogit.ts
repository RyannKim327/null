type Graph = { [key: string]: string[] };

function breadthLimitedSearch(graph: Graph, startNode: string, depthLimit: number): string[] {
    const queue: { node: string; depth: number }[] = [{ node: startNode, depth: 0 }];
    const visited: Set<string> = new Set();
    const result: string[] = [];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        // Check if the node has been visited
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);

            // If the current depth is less than the depth limit, enqueue the neighbors
            if (depth < depthLimit) {
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
const depthLimit = 2;
const result = breadthLimitedSearch(graph, startNode, depthLimit);
console.log(result); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
