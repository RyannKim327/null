function dijkstra(graph, startNode) {
    let distance = {};
    let visited = {};
    let queue = new PriorityQueue();

    // Initialize distances to all nodes as Infinity, except the start node
    distance[startNode] = 0;
    queue.enqueue(startNode, 0);

    // Initialize distances to all other nodes as Infinity
    for (let node in graph) {
        if (node !== startNode) {
            distance[node] = Infinity;
        }
    }

    while (!queue.isEmpty()) {
        let current = queue.dequeue().element;

        if (!visited[current]) {
            for (let neighbor in graph[current]) {
                let distanceToNeighbor = distance[current] + graph[current][neighbor];

                if (distanceToNeighbor < distance[neighbor]) {
                    distance[neighbor] = distanceToNeighbor;
                    queue.enqueue(neighbor, distanceToNeighbor);
                }
            }

            visited[current] = true;
        }
    }

    return distance;
}

// Min heap priority queue implementation
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
    A: { B: 5, C: 3 },
    B: { A: 5, C: 1, D: 1 },
    C: { A: 3, B: 1, D: 3 },
    D: { B: 1, C: 3 },
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
