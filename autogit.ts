function topologicalSortKahn(graph: Map<number, number[]>): number[] {
    const inDegree: Map<number, number> = new Map();
    const result: number[] = [];
    const queue: number[] = [];

    // Initialize in-degrees
    for (const [node, neighbors] of graph.entries()) {
        if (!inDegree.has(node)) {
            inDegree.set(node, 0);
        }
        for (const neighbor of neighbors) {
            inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
        }
    }

    // Collect nodes with zero in-degree
    for (const [node, degree] of inDegree.entries()) {
        if (degree === 0) {
            queue.push(node);
        }
    }

    // Process nodes
    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        for (const neighbor of graph.get(current) || []) {
            inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check for cycles
    if (result.length !== graph.size) {
        throw new Error("Graph has at least one cycle, topological sort not possible.");
    }

    return result;
}

// Example usage
const graph = new Map<number, number[]>([
    [5, [2, 0]],
    [4, [0, 1]],
    [3, [1]],
    [2, [3]],
    [0, []],
    [1, []]
]);

console.log(topologicalSortKahn(graph)); // Output: A valid topological order
function topologicalSortDFS(graph: Map<number, number[]>): number[] {
    const visited: Set<number> = new Set();
    const result: number[] = [];
    const tempMark: Set<number> = new Set(); // To detect cycles

    const dfs = (node: number) => {
        if (tempMark.has(node)) {
            throw new Error("Graph has at least one cycle, topological sort not possible.");
        }
        if (visited.has(node)) {
            return;
        }

        tempMark.add(node);
        for (const neighbor of graph.get(node) || []) {
            dfs(neighbor);
        }
        tempMark.delete(node);
        visited.add(node);
        result.push(node);
    };

    for (const node of graph.keys()) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return result.reverse(); // Reverse to get the correct order
}

// Example usage
const graphDFS = new Map<number, number[]>([
    [5, [2, 0]],
    [4, [0, 1]],
    [3, [1]],
    [2, [3]],
    [0, []],
    [1, []]
]);

console.log(topologicalSortDFS(graphDFS)); // Output: A valid topological order
