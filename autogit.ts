class Graph {
    private adjacencyList: Map<string, Array<{ node: string, weight: number }>>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: string, vertex2: string, weight: number): void {
        this.adjacencyList.get(vertex1)?.push({ node: vertex2, weight });
        this.adjacencyList.get(vertex2)?.push({ node: vertex1, weight }); // Undirected graph
    }

    dijkstra(start: string): Map<string, number> {
        const distances = new Map<string, number>();
        const queue: Array<{ node: string, distance: number }> = [];
        const visited = new Set<string>();

        // Initialize distances and queue
        this.adjacencyList.forEach((_, vertex) => {
            distances.set(vertex, vertex === start ? 0 : Infinity);
            queue.push({ node: vertex, distance: distances.get(vertex)! });
        });

        while (queue.length > 0) {
            // Sort the queue to get the node with the smallest distance
            queue.sort((a, b) => a.distance - b.distance);
            const { node: currentNode } = queue.shift()!; // Get the node with the smallest distance
            
            if (visited.has(currentNode)) continue;

            visited.add(currentNode);

            // Update distances for neighbors
            const neighbors = this.adjacencyList.get(currentNode) || [];
            for (const { node: neighbor, weight } of neighbors) {
                const newDistance = distances.get(currentNode)! + weight;

                if (newDistance < distances.get(neighbor)!) {
                    distances.set(neighbor, newDistance);
                    // Update the node's distance in the queue
                    const index = queue.findIndex(q => q.node === neighbor);
                    if (index !== -1) {
                        queue[index].distance = newDistance;
                    }
                }
            }
        }

        return distances;
    }
}

// Usage example:
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
console.log(distances);
