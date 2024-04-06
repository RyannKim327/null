function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];
    const sortedNodes = [];

    function visit(node) {
        if (visited.has(node)) return;
        visited.add(node);
        
        for (let neighbor of graph[node]) {
            visit(neighbor);
        }
        
        stack.push(node);
    }

    for (let node in graph) {
        visit(node);
    }

    while (stack.length > 0) {
        sortedNodes.unshift(stack.pop());
    }

    return sortedNodes;
}

// Example graph
const graph = {
    'A': ['B', 'C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
};

const result = topologicalSort(graph);
console.log(result);
