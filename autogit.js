class Edge {
    constructor(source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}

class Graph {
    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }
}

function bellmanFord(graph, start) {
    let distances = {};
    let parents = {};

    distances[start] = 0;

    for (let i = 0; i < graph.vertices.length - 1; i++) {
        graph.edges.forEach(edge => {
            if (distances[edge.source] !== undefined && (distances[edge.destination] === undefined || distances[edge.destination] > distances[edge.source] + edge.weight)) {
                distances[edge.destination] = distances[edge.source] + edge.weight;
                parents[edge.destination] = edge.source;
            }
        });
    }

    graph.edges.forEach(edge => {
        if (distances[edge.source] + edge.weight < distances[edge.destination]) {
            console.log("Negative cycle detected");
            return;
        }
    });

    return { distances, parents };
}

// Example usage
const vertices = [0, 1, 2, 3, 4];
const edges = [
    new Edge(0, 1, 5),
    new Edge(0, 2, 4),
    new Edge(1, 3, 3),
    new Edge(2, 1, 6),
    new Edge(2, 3, 2),
    new Edge(3, 4, 1),
    new Edge(4, 2, -3)
];

const graph = new Graph(vertices, edges);

const startVertex = 0;
const { distances, parents } = bellmanFord(graph, startVertex);

console.log("Distances:", distances);
console.log("Parents:", parents);
