// Define a simple graph structure using adjacency list
type Graph = {
  [key: string]: string[];
};

const bfs = (graph: Graph, startNode: string): string[] => {
  // Create an empty queue for BFS
  const queue: string[] = [];
  // Create a set to keep track of visited nodes
  const visited = new Set<string>();
  // Array to hold the order of traversal
  const traversalOrder: string[] = [];

  // Start by enqueueing the first node
  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {
    // Dequeue a node from the front of the queue
    const currentNode = queue.shift();
    if (currentNode !== undefined) {
      // Visit the current node
      traversalOrder.push(currentNode);

      // Get all the neighbors of the current node
      const neighbors = graph[currentNode];

      if (neighbors) {
        for (const neighbor of neighbors) {
          // If the neighbor hasn't been visited, mark it as visited and enqueue it
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }

  return traversalOrder;
};

// Example graph represented as an adjacency list
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

// Running BFS starting from node 'A'
const result = bfs(graph, 'A');
console.log(result); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
