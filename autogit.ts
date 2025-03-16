type Graph = { [key: string]: string[] };

function breadthLimitedSearch(graph: Graph, startNode: string, goalNode: string, depthLimit: number): string | null {
    // Queue for BFS
    const queue: { node: string; depth: number }[] = [{ node: startNode, depth: 0 }];
    const visited = new Set<string>();

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        // Check if we reached the goal node
        if (node === goalNode) {
            return node;
        }

        // If we haven't reached the depth limit, continue searching
        if (depth < depthLimit) {
            visited.add(node);

            // Explore neighbors
            for (const neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push({ node: neighbor, depth: depth + 1 });
                }
            }
        }
    }

    // Return null if the goal node is not found within the depth limit
    return null;
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};

const startNode = 'A';
const goalNode = 'F';
const depthLimit = 2;

const result = breadthLimitedSearch(graph, startNode, goalNode, depthLimit);
console.log(result); // Output: null (since F is beyond the depth limit)
