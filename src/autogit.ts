class Edge {
    constructor(public source: number, public destination: number, public weight: number) {}
}

class Graph {
    private edges: Edge[];

    constructor() {
        this.edges = [];
    }

    // Adds an edge to the graph
    addEdge(source: number, destination: number, weight: number) {
        this.edges.push(new Edge(source, destination, weight));
    }

    // Bellman-Ford algorithm implementation
    bellmanFord(source: number, numVertices: number): number[] | string {
        // Step 1: Initialize distances from source to all vertices as infinite
        const distances: number[] = Array(numVertices).fill(Infinity);
        // Distance from source to itself is 0
        distances[source] = 0;

        // Step 2: Relax all edges |V| - 1 times.
        for (let i = 0; i < numVertices - 1; i++) {
            for (const edge of this.edges) {
                const { source, destination, weight } = edge;
                if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
                    distances[destination] = distances[source] + weight;
                }
            }
        }

        // Step 3: Check for negative-weight cycles.
        for (const edge of this.edges) {
            const { source, destination, weight } = edge;
            if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
                return 'Graph contains a negative-weight cycle';
            }
        }

        return distances;
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

const numVertices = 5; // Number of vertices in the graph
const sourceVertex = 0; // Starting vertex for the path

const distances = graph.bellmanFord(sourceVertex, numVertices);
console.log(distances); // Output the shortest distances from source to all vertices
