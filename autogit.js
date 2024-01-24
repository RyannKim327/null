function breadthFirstSearch(graph, startNode) {
  const queue = [];
  const visited = [];

  queue.push(startNode);
  visited.push(startNode);

  while (queue.length !== 0) {
    const currentNode = queue.shift();

    for (const neighbor of graph[currentNode]) {
      if (!visited.includes(neighbor)) {
        queue.push(neighbor);
        visited.push(neighbor);
      }
    }
  }

  return visited;
}

// Example usage:
const adjacencyList = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: []
};
const startNode = 'A';

const result = breadthFirstSearch(adjacencyList, startNode);
console.log(result); // Output: ["A", "B", "C", "D", "E"]
