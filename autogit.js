function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        graph[node].forEach(neighbor => visit(neighbor));
        stack.push(node);
    }

    for (const node in graph) {
        visit(node);
    }

    return stack.reverse();
}

// Example usage
const graph = {
    'A': ['B', 'C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
};

const result = topologicalSort(graph);
console.log(result); // Output: ["A", "B", "D", "F", "C", "E"]
