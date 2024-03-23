function topologicalSort(graph) {
    const visited = {};
    const sorted = [];
  
    function visit(node) {
        if (visited[node])
            return;
  
        visited[node] = true;
  
        graph[node].forEach(neighbor => {
            if (!visited[neighbor])
                visit(neighbor);
        });
  
        sorted.push(node);
    }
  
    Object.keys(graph).forEach(visit);
  
    return sorted.reverse();
}
  
const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': [],
    'D': ['E'],
    'E': []
};
  
const sortedNodes = topologicalSort(graph);
console.log(sortedNodes);
