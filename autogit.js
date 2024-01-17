function topologicalSort(graph) {
  const visited = new Set();
  const sorted = [];

  function visit(node) {
    visited.add(node);

    if (graph[node]) {
      graph[node].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visit(neighbor);
        }
      });
    }

    sorted.unshift(node);
  }

  Object.keys(graph).forEach(node => {
    if (!visited.has(node)) {
      visit(node);
    }
  });

  return sorted;
}
const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: ["F"],
  E: [],
  F: []
};

const sortedOrder = topologicalSort(graph);
console.log(sortedOrder); // Output: ["A", "C", "E", "B", "D", "F"]
