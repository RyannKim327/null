function topologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
        visited.add(node);

        for (let neighbor of graph[node] || []) {
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
const graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["D", "E"],
    "D": ["F"],
    "E": ["F"],
    "F": []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: ["A", "C", "E", "B", "D", "F"]
