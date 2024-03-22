// Sample graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['G'],
  F: [],
  G: []
};

function depthLimitedSearch(startNode, graph, depthLimit) {
  let stack = [{ node: startNode, depth: 0 }];
  
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    console.log(`Visiting node ${node} at depth ${depth}`);
    
    if (depth >= depthLimit) {
      continue;
    }
    
    const neighbors = graph[node];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      stack.push({ node: neighbor, depth: depth + 1 });
    }
  }
}

// Perform depth-limited search starting from node 'A' with a depth limit of 2
depthLimitedSearch('A', graph, 2);
