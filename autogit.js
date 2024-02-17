function bfs(graph, start) {
  let visited = {};
  let queue = [start];
  let result = [];

  while (queue.length > 0) {
    let node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      result.push(node);

      let neighbors = graph[node];
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Example usage
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F', 'G'],
  'D': ['B'],
  'E': ['B'],
  'F': ['C'],
  'G': ['C']
};

const startNode = 'A';
console.log(bfs(graph, startNode)); // Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
