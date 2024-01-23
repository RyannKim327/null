function initializeGraph(nodes) {
  const graph = {};
  for (const node of nodes) {
    graph[node] = [];
  }
  return graph;
}
function addEdge(graph, source, destination, weight) {
  graph[source].push({ node: destination, weight });
}
function bellmanFord(graph, source) {
  const distances = {};
  const previous = {};
  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[source] = 0;

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (const node in graph) {
      for (const edge of graph[node]) {
        const { neighbor, weight } = edge;
        if (distances[node] + weight < distances[neighbor]) {
          distances[neighbor] = distances[node] + weight;
          previous[neighbor] = node;
        }
      }
    }
  }

  return { distances, previous };
}
// Example usage
const nodes = ["A", "B", "C", "D", "E"];
const graph = initializeGraph(nodes);
addEdge(graph, "A", "B", 2);
addEdge(graph, "A", "C", 4);
addEdge(graph, "B", "D", 3);
addEdge(graph, "C", "D", 1);
addEdge(graph, "D", "E", 7);

const source = "A";
const { distances, previous } = bellmanFord(graph, source);

console.log("Distances:", distances);
console.log("Previous:", previous);
