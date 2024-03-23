function bellmanFord(graph, source) {
    const distances = {};
    const predecessors = {};

    // Initialize distances and predecessors
    for (let node in graph) {
        distances[node] = Infinity;
        predecessors[node] = null;
    }
    distances[source] = 0;

    // Relax edges |V| - 1 times
    const nodes = Object.keys(graph);
    for (let i = 0; i < nodes.length - 1; i++) {
        for (let node of nodes) {
            for (let neighbor in graph[node]) {
                const newDistance = distances[node] + graph[node][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    predecessors[neighbor] = node;
                }
            }
        }
    }

    // Check for negative weight cycles
    for (let node of nodes) {
        for (let neighbor in graph[node]) {
            if (distances[node] + graph[node][neighbor] < distances[neighbor]) {
                return "Graph contains a negative weight cycle";
            }
        }
    }

    return { distances, predecessors };
}

// Example graph with edge weights
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const sourceNode = 'A';
const result = bellmanFord(graph, sourceNode);
console.log(result);
