class Graph {
    private edges: Map<string, { [key: string]: number }>;

    constructor() {
        this.edges = new Map();
    }

    addEdge(start: string, end: string, weight: number) {
        if (!this.edges.has(start)) {
            this.edges.set(start, {});
        }
        this.edges.get(start)![end] = weight;

        // If it's an undirected graph, add the reverse edge
        if (!this.edges.has(end)) {
            this.edges.set(end, {});
        }
        this.edges.get(end)![start] = weight; // Uncomment this line if the graph is undirected
    }

    dijkstra(start: string): Map<string, number> {
        const distances = new Map<string, number>();
        const priorityQueue: [string, number][] = []; // [node, distance]

        // Initialize distances
        for (const node of this.edges.keys()) {
            distances.set(node, Infinity);
        }
        distances.set(start, 0);
        priorityQueue.push([start, 0]);

        while (priorityQueue.length > 0) {
            // Sort the queue by the shortest distance and get the next node
            priorityQueue.sort((a, b) => a[1] - b[1]);
            const [currentNode, currentDistance] = priorityQueue.shift()!;

            // If the current distance is greater than the recorded distance, skip it
            if (currentDistance > distances.get(currentNode)!) {
                continue;
            }

            // Explore neighbors
            const neighbors = this.edges.get(currentNode);
            if (neighbors) {
                for (const neighbor in neighbors) {
                    const weight = neighbors[neighbor];
                    const newDistance = currentDistance + weight;

                    // Only consider this new path if it's better
                    if (newDistance < distances.get(neighbor)!) {
                        distances.set(neighbor, newDistance);
                        priorityQueue.push([neighbor, newDistance]);
                    }
                }
            }
        }

        return distances;
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

const shortestPaths = graph.dijkstra('A');
console.log(shortestPaths);
