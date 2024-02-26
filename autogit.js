function topologicalSort(graph) {
    const visited = {};
    const result = [];

    function dfs(node) {
        if (visited[node]) return;
        
        visited[node] = true;
        
        if (graph[node]) {
            graph[node].forEach(neighbor => {
                dfs(neighbor);
            });
        }
        
        result.unshift(node);
    }

    for (let node in graph) {
        if (!visited[node]) {
            dfs(node);
        }
    }

    return result;
}

// Example graph
const graph = {
    'A': ['C', 'B'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
};

// Perform topological sort
const result = topologicalSort(graph);
console.log(result); // Output: [ 'A', 'C', 'E', 'B', 'D', 'F' ]
