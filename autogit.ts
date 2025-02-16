class PriorityQueue {
    private items: [number, number][] = []; // [distance, vertex]

    enqueue(distance: number, vertex: number) {
        this.items.push([distance, vertex]);
        this.items.sort((a, b) => a[0] - b[0]); // Sort by distance
    }

    dequeue(): [number, number] | undefined {
        return this.items.shift(); // Get the smallest distance vertex
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

function dijkstra(graph: Map<number, Array<[number, number]>>, start: number): Map<number, number> {
    const distances = new Map<number, number>();
    const visited = new Set<number>();
    const priorityQueue = new PriorityQueue();

    graph.forEach((_, vertex) => {
        distances.set(vertex, Infinity); // Initialize distances
    });
    distances.set(start, 0); // Distance from start to itself is 0
    priorityQueue.enqueue(0, start); // Enqueue the starting vertex

    while (!priorityQueue.isEmpty()) {
        const [currentDistance, currentVertex] = priorityQueue.dequeue()!;

        if (visited.has(currentVertex)) continue;
        visited.add(currentVertex);

        const neighbors = graph.get(currentVertex) || [];
        for (const [neighbor, weight] of neighbors) {
            const distance = currentDistance + weight;
            if (distance < (distances.get(neighbor) || Infinity)) {
                distances.set(neighbor, distance);
                priorityQueue.enqueue(distance, neighbor);
            }
        }
    }

    return distances;
}

// Example Usage
const graph = new Map<number, Array<[number, number]>>([
    [0, [[1, 1], [2, 4]]],
    [1, [[2, 2], [3, 5]]],
    [2, [[3, 1]]],
    [3, []]
]);

const shortestPaths = dijkstra(graph, 0);
console.log(shortestPaths); // Map {0 => 0, 1 => 1, 2 => 3, 3 => 4}
