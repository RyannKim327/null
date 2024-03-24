function dijkstra(graph, startNode, endNode) {
    const distances = {};
    const visited = new Set();
    const pq = new PriorityQueue();

    distances[startNode] = 0;
    pq.enqueue(startNode, 0);

    while (!pq.isEmpty()) {
        const [currentNode, currentDistance] = pq.dequeue();

        if (visited.has(currentNode)) {
            continue;
        }

        visited.add(currentNode);

        for (const neighbor in graph[currentNode]) {
            const distance = currentDistance + graph[currentNode][neighbor];

            if (!distances[neighbor] || distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    // Reconstruct the shortest path
    const path = [endNode];
    let prev = endNode;

    while (prev !== startNode) {
        for (const node in graph) {
            if (graph[node][prev] && distances[node] + graph[node][prev] === distances[prev]) {
                path.unshift(node);
                prev = node;
                break;
            }
        }
    }

    return { path, distance: distances[endNode] };
}

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

// Example graph
const graph = {
    A: { B: 5, C: 3 },
    B: { A: 5, E: 1 },
    C: { A: 3, D: 1 },
    D: { C: 1, E: 3 },
    E: { B: 1, D: 3 },
};

const startNode = 'A';
const endNode = 'E';

const result = dijkstra(graph, startNode, endNode);
console.log(result);
