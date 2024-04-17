function bfs(graph, startNode, targetNode) {
  let queue = [startNode];
  let visited = new Set();

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (currentNode === targetNode) {
      return true; // Target node found
    }

    if (!visited.has(currentNode)) {
      visited.add(currentNode);

      let neighbors = graph[currentNode];
      
      if (neighbors) {
        for (let neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }
  }

  return false; // Target node not found
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

const startNode = 'A';
const targetNode = 'F';

console.log(bfs(graph, startNode, targetNode));
