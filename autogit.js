function dijkstra(graph, startNode) {
    let distances = {};
    let visited = {};
    let queue = new PriorityQueue();

    distances[startNode] = 0;
    queue.enqueue(startNode, 0);

    while (!queue.isEmpty()) {
        let currentNode = queue.dequeue().element;
        if (!visited[currentNode]) {
            visited[currentNode] = true;

            for (let neighbor in graph[currentNode]) {
                let distance = distances[currentNode] + graph[currentNode][neighbor];
                if (!distances[neighbor] || distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                    queue.enqueue(neighbor, distance);
                }
            }
        }
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

// Example graph
const graph = {
    A: { B: 5, C: 2 },
    B: { A: 5, C: 1, D: 3 },
    C: { A: 2, B: 1, D: 7 },
    D: { B: 3, C: 7 }
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);

console.log(shortestDistances);
