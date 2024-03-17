function topologicalSort(graph) {
    const visited = {};
    const stack = [];
    
    function dfs(node) {
        visited[node] = true;
        
        if (graph[node] !== undefined) {
            graph[node].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        }
        
        stack.push(node);
    }
    
    for (let node in graph) {
        if (!visited[node]) {
            dfs(node);
        }
    }
    
    return stack.reverse();
}

// Example usage
const graph = {
    'A': ['C', 'B'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
};

const result = topologicalSort(graph);
console.log(result);
