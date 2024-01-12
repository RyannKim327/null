const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};
const sortedOrder = [];
const visited = new Set();
function dfs(node) {
  visited.add(node);

  const neighbors = graph[node];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(neighbor);
    }
  }
  
  sortedOrder.unshift(node); // Add the node to the beginning of the sorted order
}
function topologicalSort() {
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }
}
topologicalSort();
console.log(sortedOrder);
const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};

const sortedOrder = [];
const visited = new Set();

function dfs(node) {
  visited.add(node);

  const neighbors = graph[node];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(neighbor);
    }
  }
  
  sortedOrder.unshift(node); // Add the node to the beginning of the sorted order
}

function topologicalSort() {
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }
}

topologicalSort();
console.log(sortedOrder);
