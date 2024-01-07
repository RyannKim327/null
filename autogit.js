class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(u, v, weight) {
    this.edges.push({ u, v, weight });
  }
}
function bellmanFord(graph, source) {
  // Step 1: Initialize the distance array and predecessor array
  const distance = Array(graph.vertices).fill(Number.POSITIVE_INFINITY);
  const predecessor = Array(graph.vertices).fill(null);

  distance[source] = 0; // Set the distance of source to 0

  // Step 2: Relax all edges v-1 times
  for (let i = 1; i < graph.vertices; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      const { u, v, weight } = graph.edges[j];

      if (distance[u] + weight < distance[v]) {
        distance[v] = distance[u] + weight;
        predecessor[v] = u;
      }
    }
  }

  // Step 3: Check for negative cycles
  for (let i = 0; i < graph.edges.length; i++) {
    const { u, v, weight } = graph.edges[i];

    if (distance[u] + weight < distance[v]) {
      throw new Error('Graph contains negative cycle');
    }
  }

  // Step 4: Return the distance and predecessor arrays
  return { distance, predecessor };
}
// Create a graph instance with 5 vertices
const graph = new Graph(5);

// Add edges to the graph
graph.addEdge(0, 1, 6);
graph.addEdge(0, 3, 7);
graph.addEdge(1, 2, 5);
graph.addEdge(1, 3, 8);
graph.addEdge(1, 4, -4);
graph.addEdge(2, 1, -2);
graph.addEdge(3, 2, -3);
graph.addEdge(3, 4, 9);
graph.addEdge(4, 0, 2);
graph.addEdge(4, 2, 7);

// Call the Bellman-Ford algorithm
const source = 0;
const { distance, predecessor } = bellmanFord(graph, source);

// Print the shortest distances and paths
console.log('Shortest distances:');
for (let i = 0; i < graph.vertices; i++) {
  console.log(`Vertex ${i}: ${distance[i]}`);
}

console.log('Shortest paths:');
for (let i = 0; i < graph.vertices; i++) {
  let path = [];
  let currentVertex = i;

  while (currentVertex !== source) {
    path.unshift(currentVertex);
    currentVertex = predecessor[currentVertex];
  }

  path.unshift(source);
  console.log(`Vertex ${i}: ${path.join(' -> ')}`);
}
