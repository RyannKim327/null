class Edge {
    constructor(public from: number, public to: number, public weight: number) {}
}

function bellmanFord(edges: Edge[], numVertices: number, source: number): number[] {
    // Initialize distances from source to all vertices as infinite
    const distances: number[] = new Array(numVertices).fill(Infinity);
    distances[source] = 0; // Distance from source to itself is 0

    // Relax all edges |V| - 1 times
    for (let i = 0; i < numVertices - 1; i++) {
        for (const edge of edges) {
            if (distances[edge.from] !== Infinity && distances[edge.from] + edge.weight < distances[edge.to]) {
                distances[edge.to] = distances[edge.from] + edge.weight;
            }
        }
    }

    // Check for negative-weight cycles
    for (const edge of edges) {
        if (distances[edge.from] !== Infinity && distances[edge.from] + edge.weight < distances[edge.to]) {
            throw new Error("Graph contains a negative-weight cycle");
        }
    }

    return distances;
}

// Example usage:
const edges: Edge[] = [
    new Edge(0, 1, -1),
    new Edge(0, 2, 4),
    new Edge(1, 2, 3),
    new Edge(1, 3, 2),
    new Edge(1, 4, 2),
    new Edge(3, 1, 1),
    new Edge(3, 2, 5),
    new Edge(4, 3, -3),
];

const numVertices = 5;
const sourceVertex = 0;

try {
    const shortestPaths = bellmanFord(edges, numVertices, sourceVertex);
    console.log("Shortest paths from vertex", sourceVertex, ":", shortestPaths);
} catch (error) {
    console.error(error.message);
}
