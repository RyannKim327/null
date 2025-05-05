function topologicalSortKahn(graph: { [key: string]: string[] }): string[] | null {
    const inDegree: { [key: string]: number } = {};
    const queue: string[] = [];
    const result: string[] = [];

    // Initialize in-degrees
    for (const node in graph) {
        inDegree[node] = 0; // Initialize all nodes with zero in-degree
    }

    // Calculate in-degrees
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }

    // Enqueue nodes with zero in-degree
    for (const node in inDegree) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }

    // Process the queue
    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        // Decrease in-degree of neighboring nodes
        for (const neighbor of graph[current]) {
            inDegree[neighbor]--;
            // If in-degree becomes zero, enqueue it
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check if there was a cycle
    if (result.length !== Object.keys(graph).length) {
        return null; // Cycle detected, topological sort is not possible
    }

    return result;
}

// Example Usage:
const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D', 'E'],
    D: ['F'],
    E: ['F'],
    F: []
};

const sorted = topologicalSortKahn(graph);
console.log(sorted); // Output can be ['A', 'B', 'C', 'D', 'E', 'F'] or similar
function topologicalSortDFS(graph: { [key: string]: string[] }): string[] | null {
    const visited: Set<string> = new Set();
    const tempMark: Set<string> = new Set();
    const result: string[] = [];

    function dfs(node: string): boolean {
        if (tempMark.has(node)) return false; // Found a cycle
        if (visited.has(node)) return true; // Already processed

        // Mark as temporary
        tempMark.add(node);

        for (const neighbor of graph[node]) {
            if (!dfs(neighbor)) {
                return false; // Cycle detected in neighbor
            }
        }

        // Mark as permanent and record the result
        tempMark.delete(node);
        visited.add(node);
        result.push(node);
        return true;
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            if (!dfs(node)) {
                return null; // Cycle detected
            }
        }
    }

    return result.reverse(); // Reverse to get correct topological order
}

// Example Usage:
const graphDFS = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D', 'E'],
    D: ['F'],
    E: ['F'],
    F: []
};

const sortedDFS = topologicalSortDFS(graphDFS);
console.log(sortedDFS); // Output can be ['A', 'B', 'C', 'D', 'E', 'F'] or similar
