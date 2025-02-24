class Graph {
    vertices: number;
    edges: Array<[number, number, number]> = [];

    constructor(vertices: number) {
        this.vertices = vertices;
    }

    addEdge(u: number, v: number, weight: number) {
        this.edges.push([u, v, weight]);
    }

    bellmanFord(source: number) {
        const distances = Array(this.vertices).fill(Infinity);
        distances[source] = 0;

        // Step 1: Relax all edges |V| - 1 times
        for (let i = 1; i < this.vertices; i++) {
            for (const [u, v, weight] of this.edges) {
                if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                    distances[v] = distances[u] + weight;
                }
            }
        }

        // Step 2: Check for negative-weight cycles
        for (const [u, v, weight] of this.edges) {
            if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
                throw new Error("Graph contains a negative-weight cycle");
            }
        }

        return distances;
    }
}

// Usage example
const g = new Graph(5);
g.addEdge(0, 1, -1);
g.addEdge(0, 2, 4);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 2);
g.addEdge(1, 4, 2);
g.addEdge(3, 1, 1);
g.addEdge(3, 4, 5);
g.addEdge(4, 3, -3);

try {
    const distances = g.bellmanFord(0);
    console.log("Vertex Distance from Source");
    for (let i = 0; i < distances.length; i++) {
        console.log(`Vertex ${i}: ${distances[i]}`);
    }
} catch (error) {
    console.error(error);
}
