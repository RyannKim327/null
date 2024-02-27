// Define a simple graph using an adjacency list
const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
};

// Depth-first search function
function dfs(graph, start, visited = {}) {
    if (!start || !graph[start]) {
        return;
    }

    console.log(start);
    visited[start] = true;

    graph[start].forEach((neighbor) => {
        if (!visited[neighbor]) {
            dfs(graph, neighbor, visited);
        }
    });
}

// Call dfs with starting node 'A'
dfs(graph, 'A');
