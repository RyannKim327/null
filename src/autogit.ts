class Edge {
    constructor(public from: number, public to: number, public weight: number) {}
}

class Graph {
    private edges: Edge[] = [];
    private vertexCount: number;

    constructor(vertexCount: number) {
        this.vertexCount = vertexCount;
    }

    addEdge(from: number, to: number, weight: number) {
        this.edges.push(new Edge(from, to, weight));
    }

    bellmanFord(source: number): number[] | string {
        // Step 1: Initialize distances from source to all vertices as infinite
        const distances: number[] = new Array(this.vertexCount).fill(Infinity);
        distances[source] = 0;

        // Step 2: Relax all edges |V| - 1 times
        for (let i = 0; i < this.vertexCount - 1; i++) {
            for (const edge of this.edges) {
                if (distances[edge.from] !== Infinity && distances[edge.from] + edge.weight < distances[edge.to]) {
                    distances[edge.to] = distances[edge.from] + edge.weight;
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (const edge of this.edges) {
            if (distances[edge.from] !== Infinity && distances[edge.from] + edge.weight < distances[edge.to]) {
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

const distances = graph.bellmanFord(0);
console.log(distances);
