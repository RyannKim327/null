function topologicalSort(graph) {
    const visited = {};
    const stack = [];
  
    function visit(node) {
        if (visited[node]) return;
        visited[node] = true;
  
        for (let neighbor of graph[node]) {
            visit(neighbor);
        }
  
        stack.push(node);
    }
  
    for (let node in graph) {
        visit(node);
    }
  
    return stack.reverse();
}

// Example usage:
const graph = {
    'A': ['C'],
    'B': ['C', 'D'],
    'C': ['E'],
    'D': ['F'],
    'E': [],
    'F': []
};

const result = topologicalSort(graph);
console.log(result);
