function breadthFirstSearch(graph, startNode) {
  const queue = [startNode];
  const visited = {};

  visited[startNode] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();

    console.log(currentNode); // Process the node (e.g., print it)

    const neighbors = graph[currentNode];

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
}

// Example graph
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

breadthFirstSearch(graph, 'A'); // Start the search from node 'A'
