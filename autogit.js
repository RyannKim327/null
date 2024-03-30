function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const parent = {};

    // Initialize distances with Infinity and startNode with 0
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;

    while (true) {
        let closestNode = null;
        let shortestDistance = Infinity;

        // Find the closest unvisited node
        for (let node in graph) {
            if (!visited[node] && distances[node] < shortestDistance) {
                closestNode = node;
                shortestDistance = distances[node];
            }
        }

        if (!closestNode) {
            break;
        }

        // Update distances for each unvisited neighbor of the closest node
        for (let neighbor in graph[closestNode]) {
            let distance = distances[closestNode] + graph[closestNode][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                parent[neighbor] = closestNode;
            }
        }

        visited[closestNode] = true;
    }

    return { distances, parent };
}

// Example graph representation using adjacency list
const graph = {
    A: { B: 5, C: 10 },
    B: { A: 5, C: 1, D: 3 },
    C: { A: 10, B: 1, D: 2 },
    D: { B: 3, C: 2 }
};

const startNode = 'A';
const { distances, parent } = dijkstra(graph, startNode);

console.log(distances); // Output: { A: 0, B: 5, C: 6, D: 8 }
console.log(parent); // Output: { B: 'A', C: 'B', D: 'C' }
