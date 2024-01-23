function bfs(graph, startNode) {
  const queue = [startNode];
  const visited = [startNode];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node); // Process the node

    const neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      const neighborNode = neighbors[i];
      if (!visited.includes(neighborNode)) {
        queue.push(neighborNode);
        visited.push(neighborNode);
      }
    }
  }
}
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};
bfs(graph, 'A');
