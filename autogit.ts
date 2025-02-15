type Edge = {
    source: number;
    destination: number;
    weight: number;
}

class Graph {
    vertices: number;
    edges: Edge[] = [];

    constructor(vertices: number) {
        this.vertices = vertices;
    }

    addEdge(source: number, destination: number, weight: number) {
        this.edges.push({ source, destination, weight });
    }

    bellmanFord(source: number) {
        const distance: number[] = Array(this.vertices).fill(Infinity);
        distance[source] = 0;

        // Relax all edges |V| - 1 times
        for (let i = 0; i < this.vertices - 1; i++) {
            for (const edge of this.edges) {
                if (distance[edge.source] !== Infinity &&
                    distance[edge.source] + edge.weight < distance[edge.destination]) {
                    distance[edge.destination] = distance[edge.source] + edge.weight;
                }
            }
        }

        // Check for negative-weight cycles
        for (const edge of this.edges) {
            if (distance[edge.source] !== Infinity &&
                distance[edge.source] + edge.weight < distance[edge.destination]) {
                throw new Error("Graph contains a negative-weight cycle");
            }
        }

        return distance;
    }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

try {
    const distances = graph.bellmanFord(0);
    console.log("Vertex Distance from Source");
    for (let i = 0; i < distances.length; i++) {
        console.log(`${i}\t\t${distances[i]}`);
    }
} catch (error) {
    console.error(error.message);
}
