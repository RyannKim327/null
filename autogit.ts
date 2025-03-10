type Edge = {
    source: number;
    destination: number;
    weight: number;
};

class Graph {
    private edges: Edge[];
    private numVertices: number;

    constructor(numVertices: number) {
        this.numVertices = numVertices;
        this.edges = [];
    }

    addEdge(source: number, destination: number, weight: number) {
        this.edges.push({ source, destination, weight });
    }

    bellmanFord(source: number): number[] | string {
        // Step 1: Initialize distances from source to all vertices as infinite
        const distances: number[] = new Array(this.numVertices).fill(Infinity);
        distances[source] = 0;

        // Step 2: Relax all edges |V| - 1 times
        for (let i = 0; i < this.numVertices - 1; i++) {
            for (const edge of this.edges) {
                const { source, destination, weight } = edge;
                if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
                    distances[destination] = distances[source] + weight;
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (const edge of this.edges) {
            const { source, destination, weight } = edge;
            if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
                return "Graph contains a negative-weight cycle";
            }
        }

        return distances;
    }
}

// Example usage:
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 1, 1);
graph.addEdge(3, 2, 5);
graph.addEdge(4, 3, -3);

const distances = graph.bellmanFord(0);
console.log(distances);
