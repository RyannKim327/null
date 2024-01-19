function breadthFirstSearch(graph, startNode) {
  const queue = [];
  const visited = [];

  queue.push(startNode);
  visited[startNode] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    visited.push(node);

    const neighbors = graph[node];
    for (let neighbor of neighbors) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return visited;
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B', 'E', 'F'],
  E: ['C', 'D', 'F'],
  F: ['D', 'E']
};

console.log(breadthFirstSearch(graph, 'A'));
