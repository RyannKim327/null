function topologicalSort(graph) {
    const visited = {};
    const stack = [];

    // Helper function to perform DFS
    function dfs(node) {
        visited[node] = true;
        if (graph[node]) {
            for (const neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }
        }
        stack.push(node);
    }

    // Perform DFS on each unvisited node
    for (const node in graph) {
        if (!visited[node]) {
            dfs(node);
        }
    }

    // Return the nodes in topologically sorted order
    return stack.reverse();
}

// Example graph representation using adjacency list
const graph = {
    0: [1, 2],
    1: [2],
    2: [],
    3: [2, 4],
    4: []
};

const result = topologicalSort(graph);
console.log(result);
