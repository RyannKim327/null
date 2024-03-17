function topologicalSort(graph) {
    const visited = new Set();
    const result = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);

        graph[node].forEach(neighbor => {
            visit(neighbor);
        });

        result.unshift(node);
    }

    for (const node in graph) {
        visit(node);
    }

    return result;
}

// Example graph
const graph = {
    'A': ['C', 'D'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['G'],
    'F': ['G'],
    'G': []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes);
