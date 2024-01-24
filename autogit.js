function topologicalSort(graph) {
    const visited = new Set(); // Keeps track of visited nodes
    const stack = []; // Stores the sorted nodes in reverse order

    // Helper function to perform DFS
    const dfs = (node) => {
        visited.add(node);

        // Visit all adjacent nodes
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        stack.unshift(node); // Add the node to the front of the stack
    };

    // Perform DFS on each unvisited node
    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return stack;
}
const graph = {
    'A': ['B', 'C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': [],
    'E': ['F'],
    'F': []
};
const sortedNodes = topologicalSort(graph);
