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

    bellmanFord(source) {
        let distance = {};
        for (let i = 0; i < this.vertices.length; i++) {
            distance[this.vertices[i]] = Infinity;
        }
        distance[source] = 0;

        for (let i = 0; i < this.vertices.length - 1; i++) {
            for (let j = 0; j < this.edges.length; j++) {
                let edge = this.edges[j];
                if (distance[edge.source] + edge.weight < distance[edge.destination]) {
                    distance[edge.destination] = distance[edge.source] + edge.weight;
                }
            }
        }

        for (let i = 0; i < this.edges.length; i++) {
            let edge = this.edges[i];
            if (distance[edge.source] + edge.weight < distance[edge.destination]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }

        console.log("Shortest distances from source:");
        for (let node in distance) {
            console.log(`${node} : ${distance[node]}`);
        }
    }
}

// Example usage
let vertices = [0, 1, 2, 3];
let edges = [
    new Edge(0, 1, 5),
    new Edge(0, 2, 4),
    new Edge(1, 3, 3),
    new Edge(2, 1, -6),
    new Edge(3, 2, 2)
];

let graph = new Graph(vertices, edges);
graph.bellmanFord(0);
