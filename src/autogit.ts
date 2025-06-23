function topologicalSortKahn(graph: Map<number, number[]>): number[] {
    const indegree: Map<number, number> = new Map();
    const result: number[] = [];
    const queue: number[] = [];

    // Initialize indegree map
    for (const [node] of graph) {
        indegree.set(node, 0);
    }

    // Calculate indegree for each node
    for (const [node, neighbors] of graph) {
        for (const neighbor of neighbors) {
            indegree.set(neighbor, (indegree.get(neighbor) || 0) + 1);
        }
    }

    // Add all nodes with indegree 0 to the queue
    for (const [node, degree] of indegree) {
        if (degree === 0) {
            queue.push(node);
        }
    }

    // Process the queue
    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        // Update neighbors
        for (const neighbor of graph.get(current) || []) {
            const newDegree = (indegree.get(neighbor) || 0) - 1;
            indegree.set(neighbor, newDegree);

            if (newDegree === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check if there is a cycle
    if (result.length !== graph.size) {
        throw new Error("The graph contains a cycle, topological sort is not possible.");
    }

    return result;
}
function topologicalSortDFS(graph: Map<number, number[]>): number[] {
    const visited: Set<number> = new Set();
    const stack: number[] = [];

    function dfs(node: number) {
        visited.add(node);

        // Visit all neighbors
        for (const neighbor of graph.get(node) || []) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        // Push the current node to the stack after visiting all neighbors
        stack.push(node);
    }

    // Perform DFS for all nodes
    for (const [node] of graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    // The stack contains the nodes in reverse topological order
    return stack.reverse();
}
// Define a DAG using an adjacency list
const graph = new Map<number, number[]>([
    [0, [1, 2]],
    [1, [3]],
    [2, [3]],
    [3, []],
]);

// Using Kahn's Algorithm
try {
    const sortedOrderKahn = topologicalSortKahn(graph);
    console.log("Topological Sort (Kahn's Algorithm):", sortedOrderKahn);
} catch (error) {
    console.error(error.message);
}

// Using DFS
const sortedOrderDFS = topologicalSortDFS(graph);
console.log("Topological Sort (DFS):", sortedOrderDFS);
