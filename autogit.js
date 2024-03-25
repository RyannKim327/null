function topologicalSort(graph) {
    const visited = {};
    const stack = [];
    
    function dfs(node) {
        visited[node] = true;
        
        for (let neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
        
        stack.unshift(node);
    }
    
    for (let node in graph) {
        if (!visited[node]) {
            dfs(node);
        }
    }
    
    return stack;
}

// Example graph represented as an adjacency list
const graph = {
    1: [2, 3],
    2: [4],
    3: [4, 5],
    4: [],
    5: []
};

console.log(topologicalSort(graph)); // Output: [1, 3, 5, 2, 4]
