class Graph {
    private edges: Map<string, Array<{ node: string, weight: number }>> = new Map();

    addEdge(source: string, destination: string, weight: number): void {
        if (!this.edges.has(source)) {
            this.edges.set(source, []);
        }
        this.edges.get(source)?.push({ node: destination, weight });
        
        // If you want to make the graph undirected, uncomment the following line:
        // this.addEdge(destination, source, weight);
    }

    getNeighbors(node: string): Array<{ node: string, weight: number }> {
        return this.edges.get(node) || [];
    }

    getNodes(): string[] {
        return Array.from(this.edges.keys());
    }
}
function dijkstra(graph: Graph, start: string): Map<string, number> {
    const distances = new Map<string, number>();
    const visited = new Set<string>();
    const priorityQueue: { node: string, weight: number }[] = [];

    // Initialize distances
    graph.getNodes().forEach(node => distances.set(node, Infinity));
    distances.set(start, 0);
    priorityQueue.push({ node: start, weight: 0 });

    while (priorityQueue.length > 0) {
        // Sort priority queue based on weights
        priorityQueue.sort((a, b) => a.weight - b.weight);
        const { node } = priorityQueue.shift()!;

        // Skip if the node has already been visited
        if (visited.has(node)) {
            continue;
        }
        visited.add(node);

        // Get neighbors and update distances
        for (const { node: neighbor, weight } of graph.getNeighbors(node)) {
            const newDist = distances.get(node)! + weight;
            if (newDist < distances.get(neighbor)!) {
                distances.set(neighbor, newDist);
                priorityQueue.push({ node: neighbor, weight: newDist });
            }
        }
    }

    return distances;
}
const graph = new Graph();
graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

const shortestPaths = dijkstra(graph, 'A');
shortestPaths.forEach((distance, node) => {
    console.log(`Distance from A to ${node} is ${distance}`);
});
