function bfs(graph, startNode) {
  const queue = [startNode];
  const visited = new Set();
  
  visited.add(startNode);
  
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current); // Process the current node
    
    const neighbors = graph[current];
    
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
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
  F: ['C', 'E']
};

bfs(graph, 'A'); // Call the BFS function with the graph and starting node
