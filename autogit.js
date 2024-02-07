// Example graph represented as an adjacency list
const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};

function breadthFirstSearch(graph, startNode) {
  const queue = [];
  const visited = {};

  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (!visited[currentNode]) {
      visited[currentNode] = true;
      console.log('Visited node:', currentNode);
      const adjacentNodes = graph[currentNode];
      adjacentNodes.forEach((adjNode) => {
        if (!visited[adjNode]) {
          queue.push(adjNode);
        }
      });
    }
  }
}

// Usage example
breadthFirstSearch(graph, 'A');
