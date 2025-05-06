function topologicalSortDFS(graph: Record<string, string[]>): string[] {
    const visited: Set<string> = new Set();
    const stack: string[] = [];
    const result: string[] = [];

    function dfs(node: string): void {
        if (visited.has(node)) return;

        visited.add(node);

        // Visit all the neighbors
        if (graph[node]) {
            for (const neighbor of graph[node]) {
                dfs(neighbor);
            }
        }

        // Push the node onto the stack
        stack.push(node);
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    // The stack is in reverse order of the topological sort
    while (stack.length) {
        result.push(stack.pop()!);
    }

    return result;
}

// Example usage:
const graph: Record<string, string[]> = {
    A: ['C'],
    B: ['C', 'D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: []
};

const sortedOrder = topologicalSortDFS(graph);
console.log(sortedOrder);
function topologicalSortKahn(graph: Record<string, string[]>): string[] {
    const inDegree: Record<string, number> = {};
    const queue: string[] = [];
    const result: string[] = [];

    // Initialize inDegree for all nodes
    for (const node in graph) {
        inDegree[node] = 0;
    }

    // Calculate inDegree for each node
    for (const neighbors of Object.values(graph)) {
        for (const neighbor of neighbors) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Collect nodes with inDegree 0
    for (const node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }

    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        // Decrease inDegree for each neighbor
        for (const neighbor of graph[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check if topological sort is possible (if we have processed all nodes)
    if (result.length !== Object.keys(graph).length) {
        throw new Error("Graph has at least one cycle, topological sort not possible.");
    }

    return result;
}

// Example usage:
const graphKahn: Record<string, string[]> = {
    A: ['C'],
    B: ['C', 'D'],
    C: ['E'],
    D: ['F'],
    E: [],
    F: []
};

const sortedOrderKahn = topologicalSortKahn(graphKahn);
console.log(sortedOrderKahn);
