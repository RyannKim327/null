class PriorityQueue {
    private items: { node: string; priority: number }[] = [];

    enqueue(node: string, priority: number) {
        this.items.push({ node, priority });
        this.items.sort((a, b) => a.priority - b.priority); // sort by priority
    }

    dequeue() {
        return this.items.shift(); // remove and return the item with the highest priority (lowest number)
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class Graph {
    private adjacencyList: Map<string, {node: string, weight: number}[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(start: string, end: string, weight: number) {
        this.adjacencyList.get(start)?.push({ node: end, weight });
        this.adjacencyList.get(end)?.push({ node: start, weight }); // If graph is undirected
    }

    dijkstra(start: string) {
        const distances: Map<string, number> = new Map();
        const previous: Map<string, string | null> = new Map();
        const pq = new PriorityQueue();

        // Initialize all distances to Infinity and start node to 0
        this.adjacencyList.forEach((_, vertex) => {
            distances.set(vertex, Infinity);
            previous.set(vertex, null);
        });
        distances.set(start, 0);
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
            const { node: currentNode } = pq.dequeue()!;
            const currentDistance = distances.get(currentNode)!;

            // Explore neighbors of current node
            for (const neighbor of this.adjacencyList.get(currentNode) || []) {
                const totalDistance = currentDistance + neighbor.weight;

                if (totalDistance < distances.get(neighbor.node)!) {
                    distances.set(neighbor.node, totalDistance);
                    previous.set(neighbor.node, currentNode);
                    pq.enqueue(neighbor.node, totalDistance);
                }
            }
        }

        return { distances, previous };
    }

    getShortestPath(start: string, end: string) {
        const { previous } = this.dijkstra(start);
        const path: string[] = [];
        let currentNode: string | null = end;

        while (currentNode) {
            path.unshift(currentNode);
            currentNode = previous.get(currentNode);
        }

        return path.length > 0 && path[0] === start ? path : []; // Return the path or empty if it doesn't start with the start node
    }
}

// Example usage
const graph = new Graph();

// Adding vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// Adding edges (with weights)
graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

// Find shortest paths from A
const shortestPaths = graph.dijkstra('A');
console.log(shortestPaths.distances); // Output distances from A to all nodes
console.log(graph.getShortestPath('A', 'D')); // Output shortest path from A to D
