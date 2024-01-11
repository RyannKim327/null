class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push(new Edge(source, destination, weight));
  }
}

class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

function BellmanFord(graph, source) {
  const distance = Array(graph.vertices).fill(Number.POSITIVE_INFINITY);
  const predecessor = Array(graph.vertices).fill(null);

  distance[source] = 0;

  for (let i = 1; i < graph.vertices; ++i) {
    for (let j = 0; j < graph.edges.length; ++j) {
      const edge = graph.edges[j];
      const u = edge.source;
      const v = edge.destination;
      const weight = edge.weight;

      if (distance[u] !== Number.POSITIVE_INFINITY && distance[u] + weight < distance[v]) {
        distance[v] = distance[u] + weight;
        predecessor[v] = u;
      }
    }
  }

  for (let i = 0; i < graph.edges.length; ++i) {
    const u = graph.edges[i].source;
    const v = graph.edges[i].destination;
    const weight = graph.edges[i].weight;

    if (distance[u] !== Number.POSITIVE_INFINITY && distance[u] + weight < distance[v]) {
      throw new Error('Graph contains a negative-weight cycle');
    }
  }

  // Return the distance and predecessor arrays
  return { distance, predecessor };
}
const graph = new Graph(5);
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

const source = 0;
const { distance, predecessor } = BellmanFord(graph, source);

console.log("Vertex\t Distance\tPredecessor");
for (let i = 0; i < graph.vertices; i++) {
    console.log(i + "\t" + distance[i] + "\t\t" + predecessor[i]);
}
