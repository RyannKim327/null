function topologicalSort(graph) {
  const visited = {};
  const stack = [];
  
  function visit(node) {
    if (visited[node]) return;
    visited[node] = true;
    
    graph[node].forEach(neighbor => {
      visit(neighbor);
    });
    
    stack.push(node);
  }
  
  Object.keys(graph).forEach(node => visit(node));
  
  return stack.reverse();
}

// Example usage
const graph = {
  'A': ['C', 'B'],
  'B': ['D'],
  'C': ['E'],
  'D': [],
  'E': ['F'],
  'F': []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes);
