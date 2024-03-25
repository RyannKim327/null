function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
        visited.add(node);
        if (graph[node]) {
            graph[node].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            });
        }
        stack.push(node);
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return stack.reverse();
}

// Example Usage
const graph = {
    'A': ['C', 'D'],
    'B': ['D'],
    'C': ['E'],
    'D': ['E', 'F'],
    'E': ['G'],
    'F': ['G'],
    'G': []
};

const result = topologicalSort(graph);
console.log(result); // Output: ['A', 'B', 'D', 'F', 'C', 'E', 'G']
