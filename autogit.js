function bellmanFord(graph, source) {
    let distances = {};

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[source] = 0;

    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let u in graph) {
            for (let v in graph[u]) {
                if (distances[u] + graph[u][v] < distances[v]) {
                    distances[v] = distances[u] + graph[u][v];
                }
            }
        }
    }

    for (let u in graph) {
        for (let v in graph[u]) {
            if (distances[u] + graph[u][v] < distances[v]) {
                // Negative weight cycle detected
                return "Graph contains negative weight cycle";
            }
        }
    }

    return distances;
}

// Example graph
let graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

let sourceNode = 'A';
let shortestDistances = bellmanFord(graph, sourceNode);
console.log(shortestDistances);
