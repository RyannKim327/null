function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    const dfs = (node) => {
        visited.add(node);
        if (graph[node]) {
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }
        stack.push(node);
    };

    for (let node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return stack.reverse();
}

// Example graph
const graph = {
    1: [2, 3],
    2: [4],
    3: [4, 5],
    4: [6],
    5: [],
    6: []
};

const result = topologicalSort(graph);
console.log(result); // Output: [1, 3, 5, 2, 4, 6]
