function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        stack.push(node);
    }

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return stack.reverse();
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['C', 'D'],
    'C': ['D'],
    'D': []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes);
