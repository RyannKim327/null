function bellmanFord(graph, startNode) {
    const distances = {};
    const predecessor = {};
    
    // Initialize distances with Infinity for all nodes except the start node
    for (let node in graph) {
        distances[node] = node === startNode ? 0 : Infinity;
        predecessor[node] = null;
    }
    
    // Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let u in graph) {
            for (let v in graph[u]) {
                if (distances[u] + graph[u][v] < distances[v]) {
                    distances[v] = distances[u] + graph[u][v];
                    predecessor[v] = u;
                }
            }
        }
    }
    
    // Check for negative cycles
    for (let u in graph) {
        for (let v in graph[u]) {
            if (distances[u] + graph[u][v] < distances[v]) {
                throw new Error("Graph contains negative cycle");
            }
        }
    }
    
    return { distances, predecessor };
}

// Example usage
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};
const startNode = 'A';

const { distances, predecessor } = bellmanFord(graph, startNode);

console.log("Distances from node " + startNode + ": ");
console.log(distances);
console.log("Predecessor nodes: ");
console.log(predecessor);
