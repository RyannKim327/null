function topologicalSortKahn(graph: { [key: string]: string[] }): string[] {
    const inDegree: { [key: string]: number } = {};
    const queue: string[] = [];
    const result: string[] = [];

    // Initialize in-degree of each node
    for (const node in graph) {
        inDegree[node] = 0;
    }

    // Calculate in-degrees
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Enqueue nodes with in-degree of 0
    for (const node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }

    // Process nodes
    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        for (const neighbor of graph[current]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check for cycles
    if (result.length !== Object.keys(graph).length) {
        throw new Error("Graph has at least one cycle");
    }

    return result;
}

// Example usage
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: []
};

console.log(topologicalSortKahn(graph)); // Output: [ 'A', 'B', 'C', 'D' ] or similar
function topologicalSortDFS(graph: { [key: string]: string[] }): string[] {
    const visited: { [key: string]: boolean } = {};
    const result: string[] = [];
    let hasCycle = false;

    function dfs(node: string) {
        if (hasCycle) return; // Stop if a cycle is detected
        if (visited[node] === undefined) {
            visited[node] = true; // Mark the node as visited
            for (const neighbor of graph[node]) {
                if (visited[neighbor] === undefined) {
                    dfs(neighbor);
                } else if (visited[neighbor] === true) {
                    hasCycle = true; // Cycle detected
                }
            }
            visited[node] = false; // Mark the node as processed
            result.push(node); // Add to result stack
        }
    }

    for (const node in graph) {
        if (visited[node] === undefined) {
            dfs(node);
        }
    }

    if (hasCycle) {
        throw new Error("Graph has at least one cycle");
    }

    return result.reverse(); // Reverse to get the correct order
}

// Example usage
const graphDFS = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
    D: []
};

console.log(topologicalSortDFS(graphDFS)); // Output: [ 'A', 'C', 'B', 'D' ] or similar
