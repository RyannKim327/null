function bellmanFord(graph, source) {
    let distance = {};
    
    // Initialize distances from source to all other vertices as infinity
    for (let node in graph) {
        distance[node] = Infinity;
    }
    distance[source] = 0;

    // Relax all edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let u in graph) {
            for (let v in graph[u]) {
                if (distance[u] + graph[u][v] < distance[v]) {
                    distance[v] = distance[u] + graph[u][v];
                }
            }
        }
    }

    // Check for negative weight cycles
    for (let u in graph) {
        for (let v in graph[u]) {
            if (distance[u] + graph[u][v] < distance[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }
    }

    return distance;
}

// Example usage
let graph = {
    'A': {'B': -1, 'C': 4},
    'B': {'C': 3, 'D': 2, 'E': 2},
    'C': {},
    'D': {'B': 1, 'C': 5},
    'E': {'D': -3}
};
let source = 'A';

let shortestDistances = bellmanFord(graph, source);
console.log(shortestDistances);
