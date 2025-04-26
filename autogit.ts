type Edge = {
    source: number;   // The starting vertex
    destination: number; // The ending vertex
    weight: number;     // The weight of the edge
};

class Graph {
    edges: Edge[];
    numVertices: number;

    constructor(numVertices: number) {
        this.numVertices = numVertices;
        this.edges = [];
    }

    addEdge(source: number, destination: number, weight: number) {
        this.edges.push({ source, destination, weight });
    }

    // The Bellman-Ford algorithm
    bellmanFord(start: number) {
        // Step 1: Initialize distances from start to all vertices as infinite 
        // and distance to the start vertex as 0
        const distances = new Array(this.numVertices).fill(Infinity);
        distances[start] = 0;

        // Step 2: Relax all edges (numVertices - 1) times
        for (let i = 1; i < this.numVertices; i++) {
            for (const edge of this.edges) {
                const { source, destination, weight } = edge;
                if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
                    distances[destination] = distances[source] + weight;
                }
            }
        }

        // Step 3: Check for negative weight cycles
        for (const edge of this.edges) {
            const { source, destination, weight } = edge;
            if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
                throw new Error("Graph contains a negative weight cycle");
            }
        }

        return distances;
    }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 1, 1);
graph.addEdge(3, 2, 5);
graph.addEdge(4, 3, -3);

try {
    const distances = graph.bellmanFord(0);
    console.log("Vertex Distance from Source");
    for (let i = 0; i < distances.length; i++) {
        console.log(`Vertex ${i}: ${distances[i]}`);
    }
} catch (error) {
    console.error(error.message);
}
