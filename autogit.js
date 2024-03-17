function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = new PriorityQueue();

    distances[start] = 0;
    queue.enqueue(start, 0);

    while (!queue.isEmpty()) {
        const currentVertex = queue.dequeue().value;

        if (visited[currentVertex]) {
            continue;
        }

        for (let neighbor in graph[currentVertex]) {
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];

            if (!distances[neighbor] || distance < distances[neighbor]) {
                distances[neighbor] = distance;
                queue.enqueue(neighbor, distance);
            }
        }

        visited[currentVertex] = true;
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({ value, priority });
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

// Example graph
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
