function dijkstra(graph, startNode) {
    let distances = {};
    let visited = {};
    let pq = new PriorityQueue();

    distances[startNode] = 0;
    pq.enqueue(startNode, 0);

    while (!pq.isEmpty()) {
        const {node, distance} = pq.dequeue();

        if (!visited[node]) {
            visited[node] = true;

            let neighbors = graph[node];

            for (let neighbor in neighbors) {
                let distanceToNeighbor = distances[node] + neighbors[neighbor];

                if (distances[neighbor] === undefined || distances[neighbor] > distanceToNeighbor) {
                    distances[neighbor] = distanceToNeighbor;
                    pq.enqueue(neighbor, distanceToNeighbor);
                }
            }
        }
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(node, priority) {
        this.heap.push({node, priority});
        this.heap.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.heap.shift();
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example usage
const graph = {
    A: { B: 5, C: 1 },
    B: { A: 5, C: 2, D: 1 },
    C: { A: 1, B: 2, D: 4, E: 8 },
    D: { B: 1, C: 4, E: 3 },
    E: { C: 8, D: 3 }
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);

console.log(shortestDistances);
