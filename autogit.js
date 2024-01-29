class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.edges = [];
  }
  
  addEdge(src, dest, weight) {
    this.edges.push({ src, dest, weight });
  }
}
function bellmanFord(graph, src) {
  // Step 1: Initialize distances from source vertex to all other vertices as Infinity
  let distances = Array(graph.V).fill(Infinity);
  
  // Step 2: Set distance of source vertex as 0
  distances[src] = 0;
  
  // Step 3: Relax all edges V - 1 times
  for (let i = 0; i < graph.V - 1; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      let { src, dest, weight } = graph.edges[j];
      if (distances[src] + weight < distances[dest]) {
        distances[dest] = distances[src] + weight;
      }
    }
  }
  
  // Step 4: Check for negative-weight cycles
  for (let i = 0; i < graph.edges.length; i++) {
    let { src, dest, weight } = graph.edges[i];
    if (distances[src] + weight < distances[dest]) {
      throw new Error("Graph contains negative-weight cycle");
    }
  }
  
  // Step 5: Return the shortest distances to all vertices from the source vertex
  return distances;
}
// Create a graph with 5 vertices
let graph = new Graph(5);

// Add edges
graph.addEdge(0, 1, 6);
graph.addEdge(0, 2, 7);
graph.addEdge(1, 3, 5);
graph.addEdge(1, 4, -4);
graph.addEdge(1, 2, 8);
graph.addEdge(2, 3, -3);
graph.addEdge(2, 4, 9);
graph.addEdge(3, 1, -2);
graph.addEdge(4, 3, 7);
graph.addEdge(4, 0, 2);

// Call the Bellman-Ford algorithm function with source vertex as 0
let src = 0;
let shortestDistances = bellmanFord(graph, src);

console.log("Shortest distances from source vertex " + src);
for (let i = 0; i < shortestDistances.length; i++) {
  console.log("Vertex " + i + ": " + shortestDistances[i]);
}
