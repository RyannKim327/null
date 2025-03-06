type Graph = { [key: string]: { neighbor: string; weight: number }[] };

class PriorityQueue {
    private elements: { node: string; priority: number }[] = [];

    isEmpty() {
        return this.elements.length === 0;
    }

    enqueue(node: string, priority: number) {
        this.elements.push({ node, priority });
        this.elements.sort((a, b) => a.priority - b.priority); // Sort by priority
    }

    dequeue() {
        return this.elements.shift();
    }
}

function dijkstra(graph: Graph, source: string): { [key: string]: number } {
    const distances: { [key: string]: number } = {};
    const priorityQueue = new PriorityQueue();
    
    // Initialize distances and priority queue
    for (const node in graph) {
        distances[node] = Infinity; // Start with infinite distance
    }
    distances[source] = 0;
    priorityQueue.enqueue(source, 0);

    while (!priorityQueue.isEmpty()) {
        const current = priorityQueue.dequeue();
        if (!current) continue; // Safety check for TypeScript

        const currentNode = current.node;

        // Explore neighbors
        for (const edge of graph[currentNode]) {
            const { neighbor, weight } = edge;
            const newDistance = distances[currentNode] + weight;

            // Only consider this new path if it's better
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                priorityQueue.enqueue(neighbor, newDistance);
            }
        }
    }

    return distances;
}

// Example Usage
const graph: Graph = {
    A: [{ neighbor: 'B', weight: 1 }, { neighbor: 'C', weight: 4 }],
    B: [{ neighbor: 'C', weight: 2 }, { neighbor: 'D', weight: 5 }],
    C: [{ neighbor: 'D', weight: 1 }],
    D: [],
};

const distances = dijkstra(graph, 'A');
console.log(distances); // Outputs shortest paths from A to all other nodes
