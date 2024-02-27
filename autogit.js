class Edge {
    constructor(source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}

class BellmanFord {
    constructor(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
        this.distances = {};
        this.previousVertices = {};

        this.initialize();
    }

    initialize() {
        this.vertices.forEach(vertex => {
            this.distances[vertex] = Infinity;
            this.previousVertices[vertex] = null;
        });

        this.distances[this.vertices[0]] = 0;

        for (let i = 0; i < this.vertices.length - 1; i++) {
            this.edges.forEach(edge => {
                if (this.distances[edge.source] + edge.weight < this.distances[edge.destination]) {
                    this.distances[edge.destination] = this.distances[edge.source] + edge.weight;
                    this.previousVertices[edge.destination] = edge.source;
                }
            });
        }

        this.edges.forEach(edge => {
            if (this.distances[edge.source] + edge.weight < this.distances[edge.destination]) {
                console.log("Graph contains negative weight cycle");
            }
        });
    }

    getShortestPath(destination) {
        let path = [destination];
        while (this.previousVertices[destination]) {
            path.unshift(this.previousVertices[destination]);
            destination = this.previousVertices[destination];
        }
        return path;
    }
}

// Example usage
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
    new Edge('A', 'B', 3),
    new Edge('A', 'C', 6),
    new Edge('B', 'C', -2),
    new Edge('B', 'D', 3),
    new Edge('C', 'D', 1),
    new Edge('D', 'E', 3),
];

const bellmanFord = new BellmanFord(vertices, edges);
console.log(bellmanFord.distances);
console.log(bellmanFord.getShortestPath('E'));
