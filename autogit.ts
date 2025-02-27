class Graph {
    private vertices: Set<string>;
    private edges: Map<string, Map<string, number>>;

    constructor() {
        this.vertices = new Set();
        this.edges = new Map();
    }

    addVertex(vertex: string) {
        this.vertices.add(vertex);
        this.edges.set(vertex, new Map());
    }

    addEdge(vertex1: string, vertex2: string, weight: number) {
        if (!this.edges.has(vertex1) || !this.edges.has(vertex2)) {
            throw new Error("Vertex not found");
        }
        this.edges.get(vertex1)?.set(vertex2, weight);
        this.edges.get(vertex2)?.set(vertex1, weight); // For undirected graph
    }

    dijkstra(start: string): Map<string, number> {
        const distances: Map<string, number> = new Map();
        const visited: Set<string> = new Set();
        const priorityQueue: [string, number][] = []; // [vertex, distance]

        // Initialize distances
        for (const vertex of this.vertices) {
            distances.set(vertex, Infinity);
        }
        distances.set(start, 0);
        priorityQueue.push([start, 0]);

        while (priorityQueue.length > 0) {
            // Sort the queue (min-heap implementation could be used for efficiency)
            priorityQueue.sort((a, b) => a[1] - b[1]);

            const [currentVertex, currentDistance] = priorityQueue.shift()!;

            if (visited.has(currentVertex)) continue;

            visited.add(currentVertex);

            for (const [neighbor, weight] of this.edges.get(currentVertex)!.entries()) {
                const newDistance = currentDistance + weight;

                if (newDistance < distances.get(neighbor)!) {
                    distances.set(neighbor, newDistance);
                    priorityQueue.push([neighbor, newDistance]);
                }
            }
        }

        return distances;
    }
}

// Usage example
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);

const distances = graph.dijkstra("A");
console.log(distances); // Output shortest distances from A to other nodes
