// Define a function to initialize an empty graph with vertices and edges
function Graph() {
    this.vertices = [];
    this.edges = [];
}

// Define a function to add a vertex to the graph
Graph.prototype.addVertex = function(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
}

// Define a function to add an edge to the graph
Graph.prototype.addEdge = function(src, dest, weight) {
    this.edges[src].push({ dest: dest, weight: weight });
}

// Define the Bellman-Ford algorithm function for finding the shortest paths
function bellmanFord(graph, start) {
    let distance = {};
    let predecessor = {};
    
    // Initialize distances from start node
    graph.vertices.forEach((vertex) => {
        distance[vertex] = Infinity;
        predecessor[vertex] = undefined;
    });
    distance[start] = 0;
    
    // Relax edges repeatedly
    for (let i = 0; i < graph.vertices.length - 1; i++) {
        graph.vertices.forEach((vertex) => {
            graph.edges[vertex].forEach((edge) => {
                let newDistance = distance[vertex] + edge.weight;
                if (newDistance < distance[edge.dest]) {
                    distance[edge.dest] = newDistance;
                    predecessor[edge.dest] = vertex;
                }
            });
        });
    }
    
    // Check for negative-weight cycles
    graph.vertices.forEach((vertex) => {
        graph.edges[vertex].forEach((edge) => {
            if (distance[vertex] + edge.weight < distance[edge.dest]) {
                console.log("Negative weight cycle detected!");
            }
        });
    });
    
    return { distance, predecessor };
}
// Create a new graph
let graph = new Graph();

// Add vertices to the graph
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// Add edges with weights to the graph
graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 7);
graph.addEdge('C', 'D', 3);

// Specify the start node
let startNode = 'A';

// Run the Bellman-Ford algorithm to find the shortest paths
let result = bellmanFord(graph, startNode);

console.log("Shortest distances from node " + startNode + ": ", result.distance);
console.log("Predecessors: ", result.predecessor);
