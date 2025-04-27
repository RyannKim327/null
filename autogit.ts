class Graph {
    private adjacencyList: Map<string, Array<{ neighbor: string, weight: number }>>;

    constructor() {
        this.adjacencyList = new Map<string, Array<{ neighbor: string, weight: number }>>();
    }

    addVertex(vertex: string): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: string, vertex2: string, weight: number): void {
        this.adjacencyList.get(vertex1)?.push({ neighbor: vertex2, weight });
        this.adjacencyList.get(vertex2)?.push({ neighbor: vertex1, weight }); // For undirected graph
    }

    dijkstra(start: string): Map<string, number> {
        const distances = new Map<string, number>();
        const priorityQueue: Array<{ vertex: string, distance: number }> = [];
        const visited = new Set<string>();

        // Initialize distances and priority queue
        for (let vertex of this.adjacencyList.keys()) {
            distances.set(vertex, Infinity);
        }
        distances.set(start, 0);
        priorityQueue.push({ vertex: start, distance: 0 });

        while (priorityQueue.length > 0) {
            // Sort the queue based on distance and extract the vertex with minimum distance
            priorityQueue.sort((a, b) => a.distance - b.distance);
            const { vertex } = priorityQueue.shift()!; // Get the vertex with min distance

            if (visited.has(vertex)) {
                continue;
            }

            visited.add(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (const { neighbor, weight } of (neighbors || [])) {
                const newDistance = distances.get(vertex)! + weight;

                // Only consider this new path if it's better
                if (newDistance < distances.get(neighbor)!) {
                    distances.set(neighbor, newDistance);
                    priorityQueue.push({ vertex: neighbor, distance: newDistance });
                }
            }
        }

        return distances;
    }
}

// Example Usage
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
console.log(distances); // Output: Map(4) { 'A' => 0, 'B' => 1, 'C' => 3, 'D' => 4 }
