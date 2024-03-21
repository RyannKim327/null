function bellmanFord(graph, source) {
    let distances = {};
    let parents = {};
    
    // Step 1: Initialize distances and parents
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        parents[vertex] = null;
    }
    distances[source] = 0;
    
    // Step 2: Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let u in graph) {
            for (let v in graph[u]) {
                if (distances[u] + graph[u][v] < distances[v]) {
                    distances[v] = distances[u] + graph[u][v];
                    parents[v] = u;
                }
            }
        }
    }
    
    // Step 3: Check for negative weight cycles
    for (let u in graph) {
        for (let v in graph[u]) {
            if (distances[u] + graph[u][v] < distances[v]) {
                console.log("Negative weight cycle detected!");
                return;
            }
        }
    }
    
    return { distances, parents };
}

// Example graph representation
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const source = 'A';
const result = bellmanFord(graph, source);
console.log(result);
