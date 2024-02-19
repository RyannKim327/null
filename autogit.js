function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const previous = {};

    for (let node in graph) {
        distances[node] = Infinity;
        previous[node] = null;
    }

    distances[startNode] = 0;

    while (Object.keys(visited).length < Object.keys(graph).length) {
        let currentNode = minDistanceNode(distances, visited);
        visited[currentNode] = true;

        for (let neighbor in graph[currentNode]) {
            let currentDistance = distances[currentNode] + graph[currentNode][neighbor];
            if (currentDistance < distances[neighbor]) {
                distances[neighbor] = currentDistance;
                previous[neighbor] = currentNode;
            }
        }
    }

    return { distances, previous };
}

function minDistanceNode(distances, visited) {
    let min = Infinity;
    let minNode = null;

    for (let node in distances) {
        if (distances[node] < min && !visited[node]) {
            min = distances[node];
            minNode = node;
        }
    }

    return minNode;
}

// Example graph
const graph = {
    A: { B: 5, C: 3 },
    B: { A: 5, C: 2, D: 1 },
    C: { A: 3, B: 2, D: 4 },
    D: { B: 1, C: 4 }
};

const startNode = 'A';

const { distances, previous } = dijkstra(graph, startNode);

console.log(distances);
console.log(previous);
