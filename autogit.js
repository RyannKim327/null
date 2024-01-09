function bfs(graph, start, target) {
  // Step 3
  const queue = [];
  const visited = new Set();

  // Step 4
  queue.push(start);
  visited.add(start);

  // Step 5
  while (queue.length > 0) {
    // Step 6
    const node = queue.shift();
    if (node === target) {
      return true;
    }

    // Step 7
    const neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  // Step 9
  return false;
}

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: []
};

console.log(bfs(graph, 'A', 'E')); // Output: true
console.log(bfs(graph, 'A', 'F')); // Output: false
