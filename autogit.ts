type Edge = [number, number, number]; // [source, destination, weight]

class Graph {
    private edges: Edge[];
    private numVertices: number;

    constructor(numVertices: number) {
        this.numVertices = numVertices;
        this.edges = [];
    }

    addEdge(source: number, destination: number, weight: number) {
        this.edges.push([source, destination, weight]);
    }

    bellmanFord(source: number): number[] | string {
        // Step 1: Initialize distances from source to all vertices as infinite
        const distances: number[] = new Array(this.numVertices).fill(Infinity);
        distances[source] = 0;

        // Step 2: Relax all edges |V| - 1 times
        for (let i = 0; i < this.numVertices - 1; i++) {
            for (const [u, v, weight] of this.edges) {
                if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (const [u, v, weight] of this.edges) {
            if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
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
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

const result = graph.bellmanFord(0);
console.log(result); // Output the shortest distances from source vertex 0
