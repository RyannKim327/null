function bellmanFord(graph, start) {
    let dist = {};
    let prev = {};

    // Step 1: Initialize distances and predecessors
    for (let node in graph) {
        dist[node] = Infinity;
        prev[node] = null;
    }
    dist[start] = 0;

    // Step 2: Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let u in graph) {
            for (let v in graph[u]) {
                if (dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                    prev[v] = u;
                }
            }
        }
    }

    // Step 3: Check for negative cycles
    for (let u in graph) {
        for (let v in graph[u]) {
            if (dist[u] + graph[u][v] < dist[v]) {
                console.error("Graph contains a negative-weight cycle");
                return;
            }
        }
    }

    return { dist, prev };
}

// Example graph
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const startNode = 'A';
const { dist, prev } = bellmanFord(graph, startNode);

console.log("Distances:", dist);
console.log("Predecessors:", prev);
