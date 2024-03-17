function dijkstra(graph, startNode) {
    let distances = {};
    let visited = {};
    let queue = [];

    // Initialize distances
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    // Initialize queue
    queue.push({ node: startNode, distance: 0 });

    while (queue.length > 0) {
        // Get the node with the shortest distance
        queue.sort((a, b) => a.distance - b.distance);
        let { node, distance } = queue.shift();

        // Update distances for adjacent nodes
        for (let neighbor in graph[node]) {
            let newDistance = distance + graph[node][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                queue.push({ node: neighbor, distance: newDistance });
            }
        }

        visited[node] = true;
    }

    return distances;
}

// Example graph
const graph = {
    A: { B: 5, C: 3 },
    B: { A: 5, C: 1, D: 1 },
    C: { A: 3, B: 1, D: 3 },
    D: { B: 1, C: 3 }
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
