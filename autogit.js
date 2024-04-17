// Define a graph as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

function breadthFirstSearch(graph, startNode) {
  const visited = {}; // Keep track of visited nodes
  const queue = [startNode]; // Initialize a queue with the start node
  const result = []; // Store the visited nodes in the order they were visited

  while (queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue the current node

    if (!visited[currentNode]) {
      visited[currentNode] = true;
      result.push(currentNode);

      const neighbors = graph[currentNode];

      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];

        if (!visited[neighbor]) {
          queue.push(neighbor); // Enqueue the neighbor if it hasn't been visited
        }
      }
    }
  }

  return result;
}

const result = breadthFirstSearch(graph, 'A');
console.log(result); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
