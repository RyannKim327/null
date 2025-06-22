function topologicalSortKahn(graph: Map<number, number[]>): number[] {
    // Step 1: Calculate the indegree of each node
    const indegree: Map<number, number> = new Map();
    graph.forEach((_, node) => indegree.set(node, 0)); // Initialize all indegrees to 0
    graph.forEach((neighbors, node) => {
        neighbors.forEach(neighbor => {
            indegree.set(neighbor, (indegree.get(neighbor) || 0) + 1);
        });
    });

    // Step 2: Collect all nodes with indegree 0
    const queue: number[] = [];
    indegree.forEach((deg, node) => {
        if (deg === 0) queue.push(node);
    });

    // Step 3: Process the nodes in the queue
    const result: number[] = [];
    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);

        // Reduce the indegree of neighbors
        graph.get(node)?.forEach(neighbor => {
            const newIndegree = (indegree.get(neighbor) || 0) - 1;
            indegree.set(neighbor, newIndegree);

            // If the neighbor's indegree becomes 0, add it to the queue
            if (newIndegree === 0) queue.push(neighbor);
        });
    }

    // Step 4: Check for cycles
    if (result.length !== graph.size) {
        throw new Error("The graph contains a cycle, so topological sorting is not possible.");
    }

    return result;
}

// Example Usage:
const graph = new Map<number, number[]>([
    [0, [1, 2]],
    [1, [3]],
    [2, [3]],
    [3, []]
]);

console.log(topologicalSortKahn(graph)); // Output: [0, 1, 2, 3] or another valid order
function topologicalSortDFS(graph: Map<number, number[]>): number[] {
    const visited: Set<number> = new Set();
    const stack: number[] = [];
    const result: number[] = [];

    // Helper function for DFS
    function dfs(node: number) {
        if (visited.has(node)) return;
        visited.add(node);

        // Visit all neighbors
        graph.get(node)?.forEach(neighbor => dfs(neighbor));

        // Push the current node to the stack after visiting all neighbors
        stack.push(node);
    }

    // Perform DFS for all nodes to handle disconnected graphs
    graph.forEach((_, node) => {
        if (!visited.has(node)) dfs(node);
    });

    // Reverse the stack to get the topological order
    while (stack.length > 0) {
        result.push(stack.pop()!);
    }

    return result;
}

// Example Usage:
const graph = new Map<number, number[]>([
    [0, [1, 2]],
    [1, [3]],
    [2, [3]],
    [3, []]
]);

console.log(topologicalSortDFS(graph)); // Output: [0, 2, 1, 3] or another valid order
