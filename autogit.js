class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.edges = [];
  }
  
  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }
}

function initializeDistances(graph, source) {
  const distances = [];
  for (let i = 0; i < graph.V; i++) {
    distances[i] = Infinity;
  }
  distances[source] = 0;
  return distances;
}

function initializePredecessors(graph) {
  const predecessors = [];
  for (let i = 0; i < graph.V; i++) {
    predecessors[i] = -1;
  }
  return predecessors;
}
function bellmanFord(graph, source) {
  const distances = initializeDistances(graph, source);
  const predecessors = initializePredecessors(graph);

  for (let i = 0; i < graph.V - 1; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      const { source, destination, weight } = graph.edges[j];
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
        predecessors[destination] = source;
      }
    }
  }

  // Check for negative cycles
  for (let i = 0; i < graph.edges.length; i++) {
    const { source, destination, weight } = graph.edges[i];
    if (distances[source] + weight < distances[destination]) {
      throw new Error("Graph contains a negative cycle!");
    }
  }

  return { distances, predecessors };
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

const sourceNode = 0;
const { distances, predecessors } = bellmanFord(graph, sourceNode);

console.log("Shortest paths from node", sourceNode);
for (let i = 0; i < graph.V; i++) {
  console.log(`Node ${sourceNode} to node ${i}, distance: ${distances[i]}, path: ${getPath(predecessors, i)}`);
}

function getPath(predecessors, node) {
  const path = [];
  while (node !== -1) {
    path.unshift(node);
    node = predecessors[node];
  }
  return path.join(" -> ");
}
