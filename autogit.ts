class Graph {
    private adjList: Map<string, {node: string, weight: number}[]>;

    constructor() {
        this.adjList = new Map();
    }

    // Add edge to the graph
    addEdge(start: string, end: string, weight: number): void {
        if (!this.adjList.has(start)) {
            this.adjList.set(start, []);
        }
        this.adjList.get(start)!.push({node: end, weight: weight});
        
        // If you want a bidirectional graph, uncomment below
        // if (!this.adjList.has(end)) {
        //     this.adjList.set(end, []);
        // }
        // this.adjList.get(end)!.push({node: start, weight: weight});
    }

    // Dijkstra's algorithm
    dijkstra(start: string): Map<string, number> {
        // Initially, all distances are set to Infinity
        const distances = new Map<string, number>();
        const visited = new Set<string>();
        const priorityQueue: {node: string, distance: number}[] = [];

        // Set the start node distance to 0
        distances.set(start, 0);
        priorityQueue.push({node: start, distance: 0});

        // While there are nodes to process
        while (priorityQueue.length > 0) {
            // Sort and get the node with the smallest distance
            priorityQueue.sort((a, b) => a.distance - b.distance);
            const { node: currentNode } = priorityQueue.shift()!;

            if (visited.has(currentNode)) continue;
            visited.add(currentNode);

            const neighbors = this.adjList.get(currentNode) || [];

            for (const { node: neighbor, weight } of neighbors) {
                const currentDistance = distances.get(currentNode) || Infinity;
                const newDistance = currentDistance + weight;

                // Only update the distances if the new path is shorter
                if (newDistance < (distances.get(neighbor) || Infinity)) {
                    distances.set(neighbor, newDistance);
                    priorityQueue.push({node: neighbor, distance: newDistance});
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

const shortestPaths = graph.dijkstra("A");
console.log(shortestPaths); // Output distances from A to all other nodes
