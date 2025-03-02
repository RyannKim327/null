class Graph {
    private adjList: Map<string, { node: string, weight: number }[]> = new Map();

    addVertex(vertex: string) {
        this.adjList.set(vertex, []);
    }

    addEdge(start: string, end: string, weight: number) {
        this.adjList.get(start)?.push({ node: end, weight });
        this.adjList.get(end)?.push({ node: start, weight }); // For undirected graph
    }

    dijkstra(start: string): Map<string, number> {
        // Initialization
        const distances: Map<string, number> = new Map();
        const visited: Set<string> = new Set();
        const priorityQueue: { node: string; distance: number }[] = [];

        // Set initial distances to Infinity, except for the start node
        this.adjList.forEach((_, vertex) => {
            distances.set(vertex, Infinity);
        });
        distances.set(start, 0);
        priorityQueue.push({ node: start, distance: 0 });

        while (priorityQueue.length) {
            // Sort the priority queue to get the node with the smallest distance
            priorityQueue.sort((a, b) => a.distance - b.distance);
            const { node } = priorityQueue.shift()!;

            if (visited.has(node)) {
                continue; // Skip this node if it has already been visited
            }

            visited.add(node);

            // Update distances to the neighboring nodes
            const neighbors = this.adjList.get(node) || [];
            for (const { node: neighbor, weight } of neighbors) {
                const newDist = distances.get(node)! + weight;
                if (newDist < distances.get(neighbor)!) {
                    distances.set(neighbor, newDist);
                    priorityQueue.push({ node: neighbor, distance: newDist });
                }
            }
        }

        return distances;
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

const distances = graph.dijkstra('A');
console.log(distances); // Output the shortest distances from vertex A
