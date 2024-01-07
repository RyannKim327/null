function topologicalSort(graph) {
  const visited = new Set(); // to keep track of visited nodes
  const sorted = []; // to store the sorted order

  function visit(node) {
    if (visited.has(node)) {
      return; // If the node is already visited, return
    }

    visited.add(node); // Mark the node as visited

    // Visit each neighbor of the node
    for (const neighbor of graph[node]) {
      visit(neighbor);
    }

    sorted.unshift(node); // Add the visited node to the beginning of the sorted array
  }

  // Iterate over each node in the graph and visit it
  for (const node in graph) {
    visit(node);
  }

  return sorted; // Return the sorted order
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: [],
  D: []
};
const sortedOrder = topologicalSort(graph);
console.log(sortedOrder);
