type Edge = {
    source: number;
    destination: number;
    weight: number;
};

class Graph {
    vertices: number;
    edges: Edge[];

    constructor(vertices: number) {
        this.vertices = vertices;
        this.edges = [];
    }

    addEdge(source: number, destination: number, weight: number) {
        this.edges.push({ source, destination, weight });
    }

    bellmanFord(source: number): number[] | string {
        const distance: number[] = new Array(this.vertices).fill(Infinity);
        distance[source] = 0;

        // Relax edges |V| - 1 times
        for (let i = 0; i < this.vertices - 1; i++) {
            for (const edge of this.edges) {
                if (distance[edge.source] !== Infinity &&
                    distance[edge.source] + edge.weight < distance[edge.destination]) {
                    distance[edge.destination] = distance[edge.source] + edge.weight;
                }
            }
        }

        // Check for negative weight cycles
        for (const edge of this.edges) {
            if (distance[edge.source] !== Infinity &&
                distance[edge.source] + edge.weight < distance[edge.destination]) {
                return "Graph contains a negative weight cycle";
            }
        }

        return distance;
    }
}

// Example usage:
const sampleGraph = new Graph(5);
sampleGraph.addEdge(0, 1, -1);
sampleGraph.addEdge(0, 2, 4);
sampleGraph.addEdge(1, 2, 3);
sampleGraph.addEdge(1, 3, 2);
sampleGraph.addEdge(1, 4, 2);
sampleGraph.addEdge(3, 2, 5);
sampleGraph.addEdge(3, 1, 1);
sampleGraph.addEdge(4, 3, -3);

const result = sampleGraph.bellmanFord(0);
console.log(result);  // Output the shortest distances from source node 0
