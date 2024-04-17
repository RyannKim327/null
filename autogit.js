// Define a graph using an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

function breadthFirstSearch(graph, startNode) {
  const visited = {};
  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (!visited[currentNode]) {
      visited[currentNode] = true;
      console.log(currentNode);

      const neighbors = graph[currentNode];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }
}

// Example usage
breadthFirstSearch(graph, 'A');
