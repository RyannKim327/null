// Define the graph as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

// Breadth-First Search function
function bfs(graph, startNode) {
  let visited = {};
  let queue = [];

  queue.push(startNode);
  visited[startNode] = true;

  while (queue.length > 0) {
    let currentNode = queue.shift();
    console.log(currentNode);

    let neighbors = graph[currentNode];
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }
}

// Using BFS from node 'A'
bfs(graph, 'A');
