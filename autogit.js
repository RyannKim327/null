class Graph {
  constructor(vertices) {
    this.vertices = vertices; // number of vertices
    this.edges = []; // array to store the edges
  }

  addEdge(src, dest, weight) {
    this.edges.push({ src, dest, weight });
  }
}
function initialize(graph, source) {
  const distances = new Array(graph.vertices);
  const parent = new Array(graph.vertices);

  // Initialize distances and parent arrays
  for (let i = 0; i < graph.vertices; i++) {
    distances[i] = Infinity;
    parent[i] = -1;
  }

  // Distance from source to itself is 0
  distances[source] = 0;

  return { distances, parent };
}
function bellmanFord(graph, source) {
  const { distances, parent } = initialize(graph, source);

  // Relax all edges |V| - 1 times
  for (let i = 0; i < graph.vertices - 1; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      const { src, dest, weight } = graph.edges[j];

      if (distances[src] + weight < distances[dest]) {
        distances[dest] = distances[src] + weight;
        parent[dest] = src;
      }
    }
  }

  // Check for negative-weight cycles
  for (let i = 0; i < graph.edges.length; i++) {
    const { src, dest, weight } = graph.edges[i];

    if (distances[src] + weight < distances[dest]) {
      console.log("Graph contains negative-weight cycle");
      return null;
    }
  }

  // Return the calculated distances and parent array
  return { distances, parent };
}
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

const source = 0;
const result = bellmanFord(graph, source);

if (result) {
  const { distances, parent } = result;

  console.log("Vertex\tDistance\tPath");
  for (let i = 0; i < graph.vertices; i++) {
    console.log(
      `${source} -> ${i}\t${distances[i]}\t\t${getPath(i, parent)}`
    );
  }
}

function getPath(vertex, parent) {
  if (parent[vertex] === -1) {
    return vertex.toString();
  }
  return getPath(parent[vertex], parent) + " -> " + vertex;
}
