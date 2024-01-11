class GraphNode {
  constructor(name) {
    this.name = name;
    this.neighbors = [];
    this.costs = {};
  }

  addNeighbor(neighbor, cost) {
    this.neighbors.push(neighbor);
    this.costs[neighbor] = cost;
  }
}

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node.name] = node;
  }
}
function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};

  // Set initial distances to infinity for all nodes except the start node.
  for (let node in graph.nodes) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  // Main loop
  while (true) {
    let closestNode = null;
    let shortestDistance = Infinity;

    // Find the closest unvisited node
    for (let node in graph.nodes) {
      if (!visited[node] && distances[node] < shortestDistance) {
        closestNode = node;
        shortestDistance = distances[node];
      }
    }

    // If all nodes have been visited, end the loop
    if (closestNode === null) {
      break;
    }

    // Visit the closest node
    visited[closestNode] = true;

    // Update the distances to neighboring nodes
    let neighbors = graph.nodes[closestNode].neighbors;
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      let distance = distances[closestNode] + graph.nodes[closestNode].costs[neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }
  }

  return distances;
}
// Create a graph
let graph = new Graph();

// Create nodes
let a = new GraphNode('A');
let b = new GraphNode('B');
let c = new GraphNode('C');
let d = new GraphNode('D');
let e = new GraphNode('E');

// Add neighbors and costs
a.addNeighbor(b, 4);
a.addNeighbor(c, 2);
b.addNeighbor(d, 5);
c.addNeighbor(b, 1);
c.addNeighbor(d, 8);
c.addNeighbor(e, 10);
d.addNeighbor(e, 2);
e.addNeighbor(d, 1);

// Add nodes to the graph
graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);
graph.addNode(e);

// Calculate the shortest path
let distances = dijkstra(graph, 'A');
console.log(distances);
