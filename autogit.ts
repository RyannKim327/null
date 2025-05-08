type Edge = {
    source: number;
    destination: number;
    weight: number;
};

class Graph {
    private edges: Edge[];
    private vertexCount: number;

    constructor(vertexCount: number) {
        this.vertexCount = vertexCount;
        this.edges = [];
    }

    addEdge(source: number, destination: number, weight: number): void {
        this.edges.push({ source, destination, weight });
    }

    bellmanFord(source: number): void {
        const distances: number[] = new Array(this.vertexCount).fill(Infinity);
        distances[source] = 0;

        // Step 1: Relaxation of edges |V| - 1 times
        for (let i = 1; i < this.vertexCount; i++) {
            for (const edge of this.edges) {
                if (distances[edge.source] !== Infinity &&
                    distances[edge.source] + edge.weight < distances[edge.destination]) {
                    distances[edge.destination] = distances[edge.source] + edge.weight;
                }
            }
        }

        // Step 2: Check for negative-weight cycles
        for (const edge of this.edges) {
            if (distances[edge.source] !== Infinity &&
                distances[edge.source] + edge.weight < distances[edge.destination]) {
                console.error("Graph contains negative-weight cycle");
                return;
            }
        }

        // Output the results
        console.log("Vertex Distance from Source:");
        for (let i = 0; i < this.vertexCount; i++) {
            console.log(`${i}\t\t${distances[i]}`);
        }
    }
}

// Example usage:
const g = new Graph(5);

// Adding edges: (source, destination, weight)
g.addEdge(0, 1, -1);
g.addEdge(0, 2, 4);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 2);
g.addEdge(1, 4, 2);
g.addEdge(3, 2, 5);
g.addEdge(3, 1, 1);
g.addEdge(4, 3, -3);

// Run Bellman-Ford algorithm from source vertex 0
g.bellmanFord(0);
