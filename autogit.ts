type Graph = { [key: string]: string[] };

function topologicalSortKahn(graph: Graph): string[] {
    const indegree: { [key: string]: number } = {};
    const result: string[] = [];
    const queue: string[] = [];

    // Calculate indegrees of all vertices
    for (const node in graph) {
        indegree[node] = 0; // Initialize indegree
    }
    for (const node in graph) {
        for (const neighbor of graph[node]) {
            indegree[neighbor] = (indegree[neighbor] || 0) + 1;
        }
    }

    // Enqueue nodes with indegree of 0
    for (const node in indegree) {
        if (indegree[node] === 0) {
            queue.push(node);
        }
    }

    // Process nodes
    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        for (const neighbor of graph[current]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    if (result.length !== Object.keys(graph).length) {
        throw new Error("Graph has at least one cycle; topological sort not possible.");
    }

    return result;
}

// Example usage
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': []
};

console.log(topologicalSortKahn(graph)); // Output: One of the valid topological orderings
type GraphDFS = { [key: string]: string[] };

function topologicalSortDFS(graph: GraphDFS): string[] {
    const visited: { [key: string]: boolean } = {};
    const result: string[] = [];
    const tempMarked: { [key: string]: boolean } = {}; // Temp marking for cycle detection

    const dfs = (node: string) => {
        if (tempMarked[node]) {
            throw new Error("Graph has at least one cycle; topological sort not possible.");
        }
        if (visited[node]) {
            return;
        }

        tempMarked[node] = true; // Temp mark
        for (const neighbor of graph[node] || []) {
            dfs(neighbor);
        }
        tempMarked[node] = false; // Remove temp mark

        visited[node] = true; // Mark as visited
        result.push(node); // Add to result
    };

    for (const node in graph) {
        if (!visited[node]) {
            dfs(node);
        }
    }

    return result.reverse(); // Reverse the result to get the correct ordering
}

// Example usage
const graphDFS: GraphDFS = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': []
};

console.log(topologicalSortDFS(graphDFS)); // Output: One of the valid topological orderings
