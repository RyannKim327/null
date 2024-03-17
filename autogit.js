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

    bellmanFord(start) {
        let dist = {};
        this.vertices.forEach(vertex => {
            dist[vertex] = Infinity;
        });
        
        dist[start] = 0;

        for (let i = 0; i < this.vertices.length - 1; i++) {
            this.edges.forEach(edge => {
                if (dist[edge.source] + edge.weight < dist[edge.destination]) {
                    dist[edge.destination] = dist[edge.source] + edge.weight;
                }
            });
        }

        this.edges.forEach(edge => {
            if (dist[edge.source] + edge.weight < dist[edge.destination]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        });

        console.log("Shortest distances:");
        console.log(dist);
    }
}

// Example usage
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
    new Edge('A', 'B', -1),
    new Edge('A', 'C', 4),
    new Edge('B', 'C', 3),
    new Edge('B', 'D', 2),
    new Edge('D', 'B', 1),
    new Edge('C', 'D', 5),
    new Edge('C', 'E', 2),
    new Edge('D', 'E', 1)
];

const graph = new Graph(vertices, edges);
graph.bellmanFord('A');
