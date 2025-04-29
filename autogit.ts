function topologicalSortKahn(graph: Map<number, number[]>): number[] {
    const inDegree: Map<number, number> = new Map();
    const result: number[] = [];
    const queue: number[] = [];

    // Calculate in-degree of each node
    for (const [key, neighbors] of graph.entries()) {
        if (!inDegree.has(key)) {
            inDegree.set(key, 0);
        }

        for (const neighbor of neighbors) {
            inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
        }
    }

    // Initialize queue with nodes having in-degree of 0
    for (const [node, degree] of inDegree.entries()) {
        if (degree === 0) {
            queue.push(node);
        }
    }

    // Process nodes in the queue
    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);

        for (const neighbor of graph.get(node) || []) {
            inDegree.set(neighbor, inDegree.get(neighbor)! - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check for cycle (if the result contains all nodes)
    if (result.length !== graph.size) {
        throw new Error("Graph has a cycle, topological sort not possible.");
    }

    return result;
}

// Example usage:
const graph = new Map<number, number[]>([
    [5, [2, 0]],
    [4, [0, 1]],
    [3, [1]],
    [2, [3]],
    [0, []],
    [1, []]
]);

console.log(topologicalSortKahn(graph)); // Output could be: [5, 4, 2, 0, 3, 1]
function topologicalSortDFS(graph: Map<number, number[]>): number[] {
    const visited: Set<number> = new Set();
    const stack: number[] = [];
    const result: number[] = [];

    function dfs(node: number): void {
        if (visited.has(node)) {
            return;
        }
        
        visited.add(node);
        for (const neighbor of graph.get(node) || []) {
            dfs(neighbor);
        }

        stack.push(node);
    }

    for (const node of graph.keys()) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    // Since the nodes are in reverse order in the stack, we reverse it to get the correct topological order
    while (stack.length) {
        result.push(stack.pop()!);
    }
    
    return result;
}

// Example usage:
const graphDFS = new Map<number, number[]>([
    [5, [2, 0]],
    [4, [0, 1]],
    [3, [1]],
    [2, [3]],
    [0, []],
    [1, []]
]);

console.log(topologicalSortDFS(graphDFS)); // Output could be: [5, 4, 2, 3, 0, 1]
