// Define the structure for an edge
class Edge {
    constructor(public source: number, public destination: number, public weight: number) {}
}

// Define the Graph class which will hold the edges and the Bellman-Ford Algorithm
class Graph {
    edges: Edge[] = [];
    vertices: number;

    constructor(vertices: number) {
        this.vertices = vertices;
    }

    addEdge(source: number, destination: number, weight: number) {
        this.edges.push(new Edge(source, destination, weight));
    }

    bellmanFord(start: number): number[] {
        // Step 1: Initialize distances from the source
        const distances = new Array(this.vertices).fill(Infinity);
        distances[start] = 0;

        // Step 2: Relax all edges |V| - 1 times
        for (let i = 0; i < this.vertices - 1; i++) {
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
                throw new Error("Graph contains a negative-weight cycle.");
            }
        }

        return distances;
    }
}

// Example usage
const graph = new Graph(5); // A graph with 5 vertices
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

try {
    const distances = graph.bellmanFord(0); // Start from vertex 0
    console.log("Vertex Distance from Source:");
    distances.forEach((dist, index) => {
        console.log(`Vertex ${index}: ${dist}`);
    });
} catch (error) {
    console.error(error.message);
}
