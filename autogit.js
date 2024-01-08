function ShortestPath(graph, start, end) {
  const distances = {}; // Stores the shortest distances from start to each node
  const visited = []; // Array to track visited nodes
  const previous = {}; // Stores the previous node for each node

  // Helper function to initialize the distances with infinity
  const initializeDistances = (nodes) => {
    for (let node of nodes) {
      distances[node] = Infinity;
    }
  };

  // Helper function to reconstruct the path from start to end
  const reconstructPath = () => {
    const path = [end];
    let current = previous[end];
    while (current !== start) {
      path.unshift(current);
      current = previous[current];
    }
    path.unshift(start);
    return path;
  };

  // Initialize distances with infinity for all nodes except start
  initializeDistances(Object.keys(graph));
  distances[start] = 0;

  // Priority queue implementation using an array-based min-heap
  const queue = [start];

  while (queue.length) {
    // Extract the node with the minimum distance
    const current = queue.shift();

    // Stop if we reach the end node
    if (current === end) break;

    // Check if the node has been visited
    if (!visited.includes(current)) {
      visited.push(current);

      // Process neighbors
      for (let neighbor in graph[current]) {
        // Calculate tentative distance
        const distance = distances[current] + graph[current][neighbor];

        if (distance < distances[neighbor]) {
          // Update shortest distance and previous node
          distances[neighbor] = distance;
          previous[neighbor] = current;
          queue.push(neighbor);
          // Reorder the queue based on updated distances
          queue.sort((a, b) => distances[a] - distances[b]);
        }
      }
    }
  }

  // Reconstruct the shortest path
  const path = reconstructPath();
  return path;
}

// Example usage:
const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { E: 6, F: 3 },
  E: { F: 1 },
  F: {},
};

console.log(ShortestPath(graph, 'A', 'F')); // Output: [ 'A', 'C', 'E', 'F' ]
