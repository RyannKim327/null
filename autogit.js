function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    let currentNode = startNode;

    // Initialize distances with Infinity for all nodes except the startNode
    for (let node in graph) {
        distances[node] = node === startNode ? 0 : Infinity;
    }

    while (currentNode) {
        const neighbors = graph[currentNode];

        for (let neighbor in neighbors) {
            const distance = distances[currentNode] + neighbors[neighbor];

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        }

        visited[currentNode] = true;
        currentNode = getClosestNode(distances, visited);
    }

    return distances;
}

function getClosestNode(distances, visited) {
    let minDistance = Infinity;
    let closestNode = null;

    for (let node in distances) {
        if (!visited[node] && distances[node] < minDistance) {
            minDistance = distances[node];
            closestNode = node;
        }
    }

    return closestNode;
}

// Example graph representation
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

const startNode = 'A';
const distances = dijkstra(graph, startNode);
console.log(distances);
