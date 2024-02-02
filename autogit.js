const graph = {
  'A': ['B', 'C'],
  'B': ['C', 'D'],
  'C': ['E'],
  'D': ['F'],
  'E': [],
  'F': []
};
const visited = {};
const result = [];
function topologicalSort() {
  for (let node in graph) {
    if (!visited[node]) {
      dfs(node);
    }
  }
}

function dfs(node) {
  visited[node] = true;

  graph[node].forEach(neighbor => {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  });

  result.unshift(node);
}
topologicalSort();
console.log(result); // ['A', 'B', 'C', 'E', 'D', 'F']
const graph = {
  'A': ['B', 'C'],
  'B': ['C', 'D'],
  'C': ['E'],
  'D': ['F'],
  'E': [],
  'F': []
};

const visited = {};
const result = [];

function topologicalSort() {
  for (let node in graph) {
    if (!visited[node]) {
      dfs(node);
    }
  }
}

function dfs(node) {
  visited[node] = true;

  graph[node].forEach(neighbor => {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  });

  result.unshift(node);
}

topologicalSort();
console.log(result); // ['A', 'B', 'C', 'E', 'D', 'F']
