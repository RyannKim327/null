// Represents a directed edge between two nodes with a certain weight
class Edge {
    constructor(source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}

// Represents a graph with a set of nodes and edges
class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    addEdge(edge) {
        this.edges.push(edge);
    }

    // Bellman-Ford algorithm implementation
    bellmanFord(source) {
        let distances = {};

        // Initialize distances to all nodes as Infinity
        this.nodes.forEach(node => {
            distances[node] = Infinity;
        });
        distances[source] = 0;

        // Relax edges V-1 times
        for (let i = 0; i < this.nodes.length - 1; i++) {
            this.edges.forEach(edge => {
                let { source, destination, weight } = edge;
                if (distances[source] + weight < distances[destination]) {
                    distances[destination] = distances[source] + weight;
                }
            });
        }

        // Check for negative weight cycles
        this.edges.forEach(edge => {
            let { source, destination, weight } = edge;
            if (distances[source] + weight < distances[destination]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        });

        return distances;
    }
}

// Usage
let graph = new Graph();

let nodeA = "A";
let nodeB = "B";
let nodeC = "C";
let nodeD = "D";

graph.addNode(nodeA);
graph.addNode(nodeB);
graph.addNode(nodeC);
graph.addNode(nodeD);

graph.addEdge(new Edge(nodeA, nodeB, 1));
graph.addEdge(new Edge(nodeA, nodeC, 4));
graph.addEdge(new Edge(nodeB, nodeC, -2));
graph.addEdge(new Edge(nodeC, nodeD, 3));
graph.addEdge(new Edge(nodeB, nodeD, 2));

let sourceNode = nodeA;
let distances = graph.bellmanFord(sourceNode);

console.log(distances);
