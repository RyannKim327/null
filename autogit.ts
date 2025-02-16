class PriorityQueue {
    private elements: { node: string, distance: number }[] = [];

    isEmpty() {
        return this.elements.length === 0;
    }

    enqueue(node: string, distance: number) {
        this.elements.push({ node, distance });
        this.elements.sort((a, b) => a.distance - b.distance);
    }

    dequeue() {
        return this.elements.shift();
    }
}

function dijkstra(graph: { [key: string]: { neighbor: string, weight: number }[] }, start: string) {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const priorityQueue = new PriorityQueue();

    // Initialize distances and priority queue
    for (const node in graph) {
        distances[node] = Infinity; 
        previous[node] = null;
    }
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);

    while (!priorityQueue.isEmpty()) {
        const { node } = priorityQueue.dequeue()!;

        // Explore neighbors
        for (const { neighbor, weight } of graph[node]) {
            const newDistance = distances[node] + weight;

            // Only consider this new path if it's better
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                previous[neighbor] = node;
                priorityQueue.enqueue(neighbor, newDistance);
            }
        }
    }

    return { distances, previous };
}

// Example usage
const graph = {
    A: [{ neighbor: "B", weight: 1 }, { neighbor: "C", weight: 4 }],
    B: [{ neighbor: "C", weight: 2 }, { neighbor: "D", weight: 5 }],
    C: [{ neighbor: "D", weight: 1 }],
    D: []
};

const result = dijkstra(graph, "A");

console.log("Distances:", result.distances);
console.log("Previous Nodes:", result.previous);
