type Edge = {
    from: number; // starting vertex
    to: number;   // ending vertex
    weight: number; // weight of the edge
};

class Graph {
    private edges: Edge[];
    private numVertices: number;

    constructor(numVertices: number) {
        this.numVertices = numVertices;
        this.edges = [];
    }

    addEdge(from: number, to: number, weight: number) {
        this.edges.push({ from, to, weight });
    }

    bellmanFord(source: number): number[] | string {
        // Step 1: Initialize distances from source to all vertices as infinite
        const distances = new Array(this.numVertices).fill(Infinity);
        distances[source] = 0; // Distance from source to itself is always 0

        // Step 2: Relax all edges |V| - 1 times
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
                return "Graph contains a negative-weight cycle.";
            }
        }

        return distances; // Return the shortest path distances from the source
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

const result = g.bellmanFord(0);
console.log(result);
