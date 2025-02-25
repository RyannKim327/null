type Edge = {
    node: string;
    weight: number;
};

class Graph {
    private adjList: Map<string, Edge[]>;

    constructor() {
        this.adjList = new Map();
    }

    addNode(node: string) {
        this.adjList.set(node, []);
    }

    addEdge(from: string, to: string, weight: number) {
        this.adjList.get(from)?.push({ node: to, weight });
        this.adjList.get(to)?.push({ node: from, weight }); // for undirected graph
    }

    dijkstra(start: string): Map<string, number> {
        const distances = new Map<string, number>();
        const pq = new MinPriorityQueue();
        const visited = new Set<string>();

        // Initialize distances
        for (const node of this.adjList.keys()) {
            distances.set(node, Infinity);
        }
        distances.set(start, 0);
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
            let { value: current } = pq.dequeue();
            if (visited.has(current)) continue;
            visited.add(current);

            for (const neighbor of this.adjList.get(current)!) {
                const newDist = distances.get(current)! + neighbor.weight;
                if (newDist < distances.get(neighbor.node)!) {
                    distances.set(neighbor.node, newDist);
                    pq.enqueue(neighbor.node, newDist);
                }
            }
        }
        return distances;
    }
}

class MinPriorityQueue {
    private elements: { value: string; priority: number }[];

    constructor() {
        this.elements = [];
    }

    enqueue(value: string, priority: number) {
        this.elements.push({ value, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift()!;
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

// Usage
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);

const shortestPaths = graph.dijkstra("A");
console.log(shortestPaths); // Outputs shortest distances from node A to all other nodes.
