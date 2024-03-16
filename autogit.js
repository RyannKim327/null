function bellmanFord(graph, start) {
    let distances = {};
    let parents = {};

    for (let node in graph) {
        distances[node] = Infinity;
        parents[node] = null;
    }

    distances[start] = 0;

    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            for (let neighbor in graph[node]) {
                if (distances[node] + graph[node][neighbor] < distances[neighbor]) {
                    distances[neighbor] = distances[node] + graph[node][neighbor];
                    parents[neighbor] = node;
                }
            }
        }
    }

    // Check for negative cycles
    for (let node in graph) {
        for (let neighbor in graph[node]) {
            if (distances[node] + graph[node][neighbor] < distances[neighbor]) {
                throw new Error("Graph contains a negative cycle");
            }
        }
    }

    return { distances, parents };
}

// Example Usage
const graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

const startNode = 'A';
const { distances, parents } = bellmanFord(graph, startNode);

console.log(distances); // Shortest distances from startNode
console.log(parents); // Parents of nodes in shortest paths
