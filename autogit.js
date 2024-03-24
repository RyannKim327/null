function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    function visit(node) {
        if (visited.has(node)) return;

        visited.add(node);

        graph[node].forEach(neighbor => {
            visit(neighbor);
        });

        stack.push(node);
    }

    for (let node in graph) {
        visit(node);
    }

    return stack.reverse();
}

// Example usage
const graph = {
    0: [1, 2],
    1: [3],
    2: [3],
    3: [4, 5],
    4: [],
    5: []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes);
