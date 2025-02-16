// Define a graph using an adjacency list
type Graph = {
  [key: string]: string[];
};

// BFS function
function bfs(graph: Graph, start: string): string[] {
  const visited: Set<string> = new Set(); // To keep track of visited nodes
  const queue: string[] = []; // Create a queue to manage exploration order
  const result: string[] = []; // To store the order of visit

  // Start with the initial node
  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift(); // Get the first node in the queue
    if (node) {
      result.push(node); // Process the current node

      // Queue neighbors that haven't been visited
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor); // Mark as visited
          queue.push(neighbor); // Add the neighbor to the queue
        }
      }
    }
  }

  return result; // Return the order of visited nodes
}

// Example usage
const graph: Graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

const result = bfs(graph, 'A');
console.log(result); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
