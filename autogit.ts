type Edge = [number, number]; // [neighbor, weight]
type Graph = Map<number, Edge[]>;

class Dijkstra {
    private graph: Graph;

    constructor(graph: Graph) {
        this.graph = graph;
    }

    public findShortestPath(start: number, end: number): { distance: number, path: number[] } | null {
        const distances: Map<number, number> = new Map();
        const previous: Map<number, number | null> = new Map();
        const priorityQueue: [number, number][] = [[0, start]]; // [distance, node]

        // Initialize the distances and previous maps
        for (const node of this.graph.keys()) {
            distances.set(node, Infinity);
            previous.set(node, null);
        }
        distances.set(start, 0);

        while (priorityQueue.length > 0) {
            // Sort queue based on distances and get the node with the smallest distance
            priorityQueue.sort((a, b) => a[0] - b[0]);
            const [currentDistance, currentNode] = priorityQueue.shift()!;

            if (currentNode === end) {
                return {
                    distance: currentDistance,
                    path: this.reconstructPath(previous, start, end)
                };
            }

            // If we find a node with a larger distance, we skip it
            if (currentDistance > distances.get(currentNode)!) {
                continue;
            }

            for (const [neighbor, weight] of this.graph.get(currentNode) || []) {
                const distance = currentDistance + weight;

                // Only consider this new path if it's better
                if (distance < distances.get(neighbor)!) {
                    distances.set(neighbor, distance);
                    previous.set(neighbor, currentNode);
                    priorityQueue.push([distance, neighbor]);
                }
            }
        }

        // Return null if no path is found
        return null;
    }

    private reconstructPath(previous: Map<number, number | null>, start: number, end: number): number[] {
        const path: number[] = [];
        for (let at: number | null = end; at !== null; at = previous.get(at)) {
            path.push(at);
        }
        path.reverse();
        return path;
    }
}

// Example of how to use the Dijkstra class:
// Create a graph as an adjacency list
const graph: Graph = new Map([
    [0, [[1, 4], [2, 1]]],
    [1, [[3, 1]]],
    [2, [[1, 2], [3, 5]]],
    [3, []]
]);

const dijkstra = new Dijkstra(graph);
const result = dijkstra.findShortestPath(0, 3);
console.log(result); // Output: { distance: 5, path: [0, 2, 1, 3] }
