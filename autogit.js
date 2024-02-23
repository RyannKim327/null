function dijkstra(graph, startNode, endNode) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const visited = new Set();

    distances[startNode] = 0;
    priorityQueue.enqueue(startNode, 0);

    while (!priorityQueue.isEmpty()) {
        const currentNode = priorityQueue.dequeue().value;

        if (currentNode === endNode) {
            break;
        }

        if (!visited.has(currentNode)) {
            visited.add(currentNode);

            const neighbors = graph[currentNode];

            for (let neighbor in neighbors) {
                const distance = distances[currentNode] + neighbors[neighbor];

                if (!distances[neighbor] || distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    priorityQueue.enqueue(neighbor, distance);
                }
            }
        }
    }

    return distances[endNode];
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        this.queue.push({ value, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Example graph representation
const graph = {
    A: { B: 5, C: 3 },
    B: { A: 5, C: 1, D: 2 },
    C: { A: 3, B: 1, D: 6 },
    D: { B: 2, C: 6 },
};

const startNode = 'A';
const endNode = 'D';
const shortestPathDistance = dijkstra(graph, startNode, endNode);

console.log(`Shortest path distance from ${startNode} to ${endNode}: ${shortestPathDistance}`);
