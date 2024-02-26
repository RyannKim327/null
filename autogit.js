function topologicalSort(graph) {
    const visited = new Set();
    const sortedNodes = [];

    function dfs(node) {
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        sortedNodes.unshift(node);
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return sortedNodes;
}

// Example usage
const graph = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes);
