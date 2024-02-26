class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    enqueue(node, priority) {
        this.nodes.push({ node, priority });
        this.sort();
    }

    dequeue() {
        return this.nodes.shift().node;
    }

    sort() {
        this.nodes.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return !this.nodes.length;
    }
}

function dijkstra(graph, startNode) {
    let distances = {};
    let pq = new PriorityQueue();

    distances[startNode] = 0;
    pq.enqueue(startNode, 0);

    while (!pq.isEmpty()) {
        let currentNode = pq.dequeue();

        for (let neighbor in graph[currentNode]) {
            let currentDistance = distances[currentNode] + graph[currentNode][neighbor];

            if (!distances[neighbor] || currentDistance < distances[neighbor]) {
                distances[neighbor] = currentDistance;
                pq.enqueue(neighbor, currentDistance);
            }
        }
    }

    return distances;
}

// Example graph
const graph = {
    A: { B: 5, C: 1 },
    B: { A: 5, C: 2, D: 1 },
    C: { A: 1, B: 2, D: 4 },
    D: { B: 1, C: 4 }
};

const startNode = 'A';
const result = dijkstra(graph, startNode);
console.log(result); // Output the distances to all nodes from the start node
