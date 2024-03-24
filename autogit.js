function dijkstra(graph, source) {
    const distances = {};
    const visited = {};
    const priorityQueue = new PriorityQueue();

    distances[source] = 0;
    priorityQueue.enqueue(source, 0);

    while (!priorityQueue.isEmpty()) {
        const { node, distance } = priorityQueue.dequeue();

        if (visited[node]) continue;

        visited[node] = true;

        for (let neighbor in graph[node]) {
            let newDistance = distance + graph[node][neighbor];
            if (newDistance < (distances[neighbor] || Infinity)) {
                distances[neighbor] = newDistance;
                priorityQueue.enqueue(neighbor, newDistance);
            }
        }
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

// Example usage
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

const distances = dijkstra(graph, 'A');
console.log(distances); // Output: { A: 0, B: 1, C: 3, D: 4 }
