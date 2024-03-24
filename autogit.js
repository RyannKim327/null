function dijkstra(graph, startNode) {
    let distances = {};
    let visited = {};
    let queue = new PriorityQueue();

    // Initialize distances with Infinity, except for the start node
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    queue.enqueue(startNode, 0);

    while (!queue.isEmpty()) {
        let currentNode = queue.dequeue();

        for (let neighbor in graph[currentNode]) {
            let distance = distances[currentNode] + graph[currentNode][neighbor];

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                queue.enqueue(neighbor, distance);
            }
        }

        visited[currentNode] = true;
    }

    return distances;
}

// Priority Queue implementation
class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    enqueue(node, priority) {
        this.nodes.push({ node, priority });
        this.nodes.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.nodes.shift().node;
    }

    isEmpty() {
        return this.nodes.length === 0;
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
const distances = dijkstra(graph, startNode);

console.log(distances);
