function bellmanFord(graph, source) {
    let distances = {};
    let parents = {};
    
    // Initialize distances and parents
    for (let node in graph) {
        distances[node] = Infinity;
        parents[node] = null;
    }
    distances[source] = 0;
    
    // Relax edges repeatedly
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
    
    // Check for negative weight cycles
    for (let u in graph) {
        for (let v in graph[u]) {
            if (distances[u] + graph[u][v] < distances[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }
    }
    
    return { distances, parents };
}

// Example graph
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const source = 'A';
const { distances, parents } = bellmanFord(graph, source);

console.log("Distances:", distances);
console.log("Parents:", parents);
