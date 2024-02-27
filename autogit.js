function bellmanFord(graph, startNode) {
    let distances = {};
    let predecessors = {};
    
    // Initialize distances and predecessors
    for (let node in graph) {
        distances[node] = Infinity;
        predecessors[node] = null;
    }
    distances[startNode] = 0;
    
    // Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            for (let neighbor in graph[node]) {
                if (distances[neighbor] > distances[node] + graph[node][neighbor]) {
                    distances[neighbor] = distances[node] + graph[node][neighbor];
                    predecessors[neighbor] = node;
                }
            }
        }
    }
    
    // Check for negative cycles
    for (let node in graph) {
        for (let neighbor in graph[node]) {
            if (distances[neighbor] > distances[node] + graph[node][neighbor]) {
                return "Graph contains negative cycle!";
            }
        }
    }
    
    return { distances, predecessors };
}

// Example usage
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const result = bellmanFord(graph, 'A');
console.log(result);
