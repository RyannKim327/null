class Graph {
    private adjacencyList: Map<string, { node: string, weight: number }[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(start: string, end: string, weight: number) {
        if (!this.adjacencyList.has(start)) {
            this.adjacencyList.set(start, []);
        }
        this.adjacencyList.get(start)!.push({ node: end, weight });
        
        // If the graph is undirected, add the reverse edge as well
        if (!this.adjacencyList.has(end)) {
            this.adjacencyList.set(end, []);
        }
        this.adjacencyList.get(end)!.push({ node: start, weight });
    }

    dijkstra(start: string): Map<string, number> {
        const distances = new Map<string, number>();
        const priorityQueue: { node: string, distance: number }[] = [];
        const visited = new Set<string>();

        // Initialize distances
        for (const node of this.adjacencyList.keys()) {
            distances.set(node, Infinity);
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
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);

const distances = graph.dijkstra("A");
console.log(distances); // Output the shortest distances from node A
