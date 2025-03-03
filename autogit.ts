// Define the Graph as an adjacency list
type Graph = {
  [key: string]: string[]; // A node points to an array of its neighbors
};

function bfs(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>(); // To track visited nodes
  const queue: string[] = []; // Queue for BFS
  const result: string[] = []; // Result to hold the order of traversal

  // Start with the initial node
  queue.push(startNode);
  visited.add(startNode);

  // While there are nodes to process
  while (queue.length > 0) {
    const currentNode = queue.shift(); // Get the front of the queue
    if (currentNode !== undefined) {
      result.push(currentNode); // Process the current node

      // Go through each neighbor of the current node
      for (const neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) { // If it hasn't been visited
          visited.add(neighbor); // Mark it as visited
          queue.push(neighbor); // Add it to the queue
        }
      }
    }
  }

  return result; // Return the traversal order
}

// Example usage:
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

const traversalOrder = bfs(graph, 'A');
console.log(traversalOrder); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
