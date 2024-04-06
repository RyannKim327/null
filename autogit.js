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
        let distances = {};
        let predecessors = {};

        // Step 1: Initialize distances and predecessors
        this.vertices.forEach(vertex => {
            distances[vertex] = Infinity;
            predecessors[vertex] = null;
            distances[source] = 0;
        });

        // Step 2: Relax edges repeatedly
        for (let i = 0; i < this.vertices.length - 1; i++) {
            this.edges.forEach(edge => {
                let u = edge.source;
                let v = edge.destination;
                let weight = edge.weight;
                if (distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                    predecessors[v] = u;
                }
            });
        }

        // Step 3: Check for negative-weight cycles
        this.edges.forEach(edge => {
            let u = edge.source;
            let v = edge.destination;
            let weight = edge.weight;
            if (distances[u] + weight < distances[v]) {
                console.log("Graph contains a negative-weight cycle");
                return;
            }
        });

        return { distances, predecessors };
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
    new Edge('D', 'E', 3)
];

const graph = new Graph(vertices, edges);
const source = 'A';
const { distances, predecessors } = graph.bellmanFord(source);

console.log("Distances:", distances);
console.log("Predecessors:", predecessors);
