function dijkstra(graph, startNode) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();

    for (let node in graph) {
        distances[node] = node === startNode ? 0 : Infinity;
        priorityQueue.enqueue(node, distances[node]);
    }

    while (!priorityQueue.isEmpty()) {
        const currentNode = priorityQueue.dequeue();

        for (let neighbor in graph[currentNode]) {
            const distance = distances[currentNode] + graph[currentNode][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentNode;
                priorityQueue.changePriority(neighbor, distance);
            }
        }
    }

    return { distances, previous };
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.sort();
    }

    dequeue() {
        return this.queue.shift().element;
    }

    changePriority(element, priority) {
        this.queue = this.queue.map(item => {
            if (item.element === element) {
                return { element, priority };
            }
            return item;
        });
        this.sort();
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Example graph
const graph = {
    A: { B: 5, C: 3 },
    B: { A: 5, C: 1, D: 1 },
    C: { A: 3, B: 1, D: 3 },
    D: { B: 1, C: 3 }
};

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);

console.log("Distances:", distances);
console.log("Previous nodes:", previous);
