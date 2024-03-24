class Edge {
    constructor(source, target, weight) {
        this.source = source;
        this.target = target;
        this.weight = weight;
    }
}

class BellmanFord {
    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
        this.distances = {};
        this.previous = {};
        this.INFINITY = Number.MAX_SAFE_INTEGER;
    }

    initialize(source) {
        for (let vertex of this.vertices) {
            this.distances[vertex] = this.INFINITY;
            this.previous[vertex] = null;
        }
        this.distances[source] = 0;
    }

    relax(edge) {
        let source = edge.source;
        let target = edge.target;
        let weight = edge.weight;

        if (this.distances[source] + weight < this.distances[target]) {
            this.distances[target] = this.distances[source] + weight;
            this.previous[target] = source;
        }
    }

    bellmanFord(source) {
        this.initialize(source);

        for (let i = 0; i < this.vertices.length - 1; i++) {
            for (let edge of this.edges) {
                this.relax(edge);
            }
        }

        // Check for negative weight cycles
        for (let edge of this.edges) {
            let source = edge.source;
            let target = edge.target;
            let weight = edge.weight;

            if (this.distances[source] + weight < this.distances[target]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }

        console.log("Shortest distances from source", source, ":");
        console.log(this.distances);
        console.log("Previous vertices:");
        console.log(this.previous);
    }
}

// Example graph
let vertices = ['A', 'B', 'C', 'D', 'E'];
let edges = [
    new Edge('A', 'B', 4),
    new Edge('A', 'C', 2),
    new Edge('B', 'C', 5),
    new Edge('B', 'D', 10),
    new Edge('C', 'D', 3),
    new Edge('D', 'E', 7),
    new Edge('E', 'A', 3)
];

let bellmanFord = new BellmanFord(vertices, edges);
bellmanFord.bellmanFord('A');
