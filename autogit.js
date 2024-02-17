function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const unvisited = {};

    Object.keys(graph).forEach(node => {
        distances[node] = Infinity;
        unvisited[node] = graph[node];
    });

    distances[startNode] = 0;

    while (Object.keys(unvisited).length > 0) {
        const currentNode = findNodeWithShortestDistance(unvisited, distances);
        const neighbors = unvisited[currentNode];

        Object.keys(neighbors).forEach(neighbor => {
            const distance = distances[currentNode] + neighbors[neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
        });

        visited[currentNode] = unvisited[currentNode];
        delete unvisited[currentNode];
    }

    return distances;
}

function findNodeWithShortestDistance(nodes, distances) {
    return Object.keys(nodes).reduce((minNode, node) =>
        distances[node] < distances[minNode] ? node : minNode
    );
}

// Example graph representation:
const graph = {
    A: { B: 3, C: 2 },
    B: { A: 3, C: 4, D: 5 },
    C: { A: 2, B: 4, D: 1 },
    D: { B: 5, C: 1 }
};

const startNode = 'A';

const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
