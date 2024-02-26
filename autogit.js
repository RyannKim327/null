function topologicalSort(graph) {
    const visited = new Set();
    const result = [];

    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);

        graph[node].forEach(neighbor => {
            dfs(neighbor);
        });

        result.unshift(node);
    }

    Object.keys(graph).forEach(node => {
        dfs(node);
    });

    return result;
}

// Example graph represented as an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['E'],
    'E': []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: ['A', 'C', 'D', 'B', 'E']
