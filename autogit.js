function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = new PriorityQueue();

    distances[startNode] = 0;
    queue.enqueue(startNode, 0);

    Object.keys(graph).forEach(node => {
        if (node !== startNode) {
            distances[node] = Infinity;
            queue.enqueue(node, Infinity);
        }
        previous[node] = null;
    });

    while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if (currentNode === undefined) break;

        visited[currentNode] = true;

        for (let neighbor in graph[currentNode]) {
            const distance = distances[currentNode] + graph[currentNode][neighbor];

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentNode;
                queue.enqueue(neighbor, distance);
            }
        }
    }

    return { distances, previous };
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, distance) {
        this.queue.push({ node, distance });
        this.sort();
    }

    dequeue() {
        return this.queue.shift()?.node;
    }

    sort() {
        this.queue.sort((a, b) => a.distance - b.distance);
    }

    isEmpty() {
        return !this.queue.length;
    }
}

// Example graph
const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 5, D: 10 },
    C: { A: 2, B: 5, D: 3 },
    D: { B: 10, C: 3 }
}

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);
console.log("Distances:", distances);
console.log("Previous nodes:", previous);
