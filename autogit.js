function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const pq = new PriorityQueue();

    graph.nodes.forEach(node => {
        distances[node] = node === start ? 0 : Infinity;
        pq.enqueue(node, distances[node]);
    });

    while (!pq.isEmpty()) {
        const current = pq.dequeue();

        visited[current] = true;

        graph.edges[current].forEach(neighbor => {
            if (!visited[neighbor]) {
                const newDistance = distances[current] + graph.weights[`${current}-${neighbor}`];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    pq.enqueue(neighbor, newDistance);
                }
            }
        });
    }

    return distances;
}

// Priority Queue implementation
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(item, priority) {
        this.items.push({ item, priority });
        this.items.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.items.shift().item;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
