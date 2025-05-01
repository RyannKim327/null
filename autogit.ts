type Edge = {
    from: number;
    to: number;
    weight: number;
};

class Graph {
    edges: Edge[];
    numVertices: number;

    constructor(numVertices: number) {
        this.numVertices = numVertices;
        this.edges = [];
    }

    addEdge(from: number, to: number, weight: number) {
        this.edges.push({ from, to, weight });
    }

    bellmanFord(source: number): number[] | null {
        // Step 1: Initialize distances from source to all vertices as infinite
        const distances: number[] = new Array(this.numVertices).fill(Infinity);
        distances[source] = 0;

        // Step 2: Relax edges repeatedly
        for (let i = 0; i < this.numVertices - 1; i++) {
            for (const edge of this.edges) {
                const { from, to, weight } = edge;
                if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
                    distances[to] = distances[from] + weight;
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (const edge of this.edges) {
            const { from, to, weight } = edge;
            if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
                // If we can still relax, then we have a negative weight cycle
                return null; // Indicating that there's a negative weight cycle
            }
        }

        return distances;
    }
}

// Example usage:
const g = new Graph(5);
g.addEdge(0, 1, -1);
g.addEdge(0, 2, 4);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 2);
g.addEdge(1, 4, 2);
g.addEdge(3, 2, 5);
g.addEdge(3, 1, 1);
g.addEdge(4, 3, -3);

const distances = g.bellmanFord(0);
if (distances) {
    console.log("Vertex Distance from Source");
    for (let i = 0; i < distances.length; i++) {
        console.log(`Vertex ${i}: ${distances[i]}`);
    }
} else {
    console.log("Graph contains a negative weight cycle");
}
