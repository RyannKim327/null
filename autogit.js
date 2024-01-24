// Sample graph representation
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: ['G'],
  E: [],
  F: [],
  G: []
};

// Depth-limited search algorithm
function depthLimitedSearch(graph, start, depthLimit) {
  function DLS(node, depth) {
    if (depth === 0) {
      // Do something with the node at the depth limit
      console.log(node);
      return;
    }

    const neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      DLS(neighbors[i], depth - 1);
    }
  }

  DLS(start, depthLimit);
}

// Example usage
depthLimitedSearch(graph, 'A', 2);
