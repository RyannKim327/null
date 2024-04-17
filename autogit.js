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

    initializeDistance(source) {
        let distance = {};
        for (let i = 0; i < this.vertices; i++) {
            distance[i] = Infinity;
        }
        distance[source] = 0;
        return distance;
    }

    bellmanFord(source) {
        let distance = this.initializeDistance(source);

        for (let i = 0; i < this.vertices - 1; i++) {
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
        console.log(distance);
    }
}

// Example usage
let vertices = 5;
let edges = [
    new Edge(0, 1, -1),
    new Edge(0, 2, 4),
    new Edge(1, 2, 3),
    new Edge(1, 3, 2),
    new Edge(1, 4, 2),
    new Edge(3, 2, 5),
    new Edge(3, 1, 1),
    new Edge(4, 3, -3)
];

let graph = new Graph(vertices, edges);
graph.bellmanFord(0);
