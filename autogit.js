function bellmanFord(graph, source, nodes) {
  let distances = new Array(nodes).fill(Infinity);
  let previous = new Array(nodes).fill(null);
  let path = new Array(nodes);

  distances[source] = 0;
  
  for (let i = 0; i < nodes - 1; i++) {
    for (let j = 0; j < graph.length; j++) {
      let [u, v, weight] = graph[j];
      if (distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
        previous[v] = u;
      }
    }
  }

  // Check for negative cycles
  for (let i = 0; i < graph.length; i++) {
    let [u, v, weight] = graph[i];
    if (distances[u] + weight < distances[v]) {
      console.log("Graph contains negative cycle");
      return;
    }
  }

  // Construct the shortest path
  for (let i = 0; i < nodes; i++) {
    let pathNodes = [];
    let current = i;
    while (current !== null) {
      pathNodes.unshift(current);
      current = previous[current];
    }
    path[i] = pathNodes;
  }

  return { distances, path };
}

// Example usage:
const graph = [[0, 1, 4], [0, 2, 1], [2, 1, -2], [1, 3, 3], [2, 3, 2]];
const source = 0;
const nodes = 4;

console.log(bellmanFord(graph, source, nodes));
