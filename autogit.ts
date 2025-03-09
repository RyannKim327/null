class Graph {
    private adjacencyList: Map<string, { node: string, weight: number }[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: string, vertex2: string, weight: number) {
        this.adjacencyList.get(vertex1)?.push({ node: vertex2, weight });
        this.adjacencyList.get(vertex2)?.push({ node: vertex1, weight }); // For undirected graph
    }

    dijkstra(start: string): Map<string, number> {
        const distances = new Map<string, number>();
        const priorityQueue: { node: string, distance: number }[] = [];
        const visited = new Set<string>();

        // Initialize distances
        for (const vertex of this.adjacencyList.keys()) {
            distances.set(vertex, Infinity);
        }
        distances.set(start, 0);
        priorityQueue.push({ node: start, distance: 0 });

        while (priorityQueue.length > 0) {
            // Sort the queue by distance
            priorityQueue.sort((a, b) => a.distance - b.distance);
            const { node } = priorityQueue.shift()!;

            if (visited.has(node)) continue;
            visited.add(node);

            const neighbors = this.adjacencyList.get(node) || [];
            for (const { node: neighbor, weight } of neighbors) {
                const newDistance = distances.get(node)! + weight;
                if (newDistance < distances.get(neighbor)!) {
                    distances.set(neighbor, newDistance);
                    priorityQueue.push({ node: neighbor, distance: newDistance });
                }
            }
        }

        return distances;
    }
}

// Example usage:
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
console.log(distances); // Output the shortest distances from A
