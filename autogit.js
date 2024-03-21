function bellmanFord(graph, startNode) {
    let distances = {};
  
    // Initialize distances to all nodes as Infinity except the startNode
    for (let node in graph) {
        if (node === startNode) {
            distances[node] = 0;
        } else {
            distances[node] = Infinity;
        }
    }

    // Relax edges iteratively
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            for (let neighbor in graph[node]) {
                if (distances[node] + graph[node][neighbor] < distances[neighbor]) {
                    distances[neighbor] = distances[node] + graph[node][neighbor];
                }
            }
        }
    }

    // Check for negative cycles
    for (let node in graph) {
        for (let neighbor in graph[node]) {
            if (distances[node] + graph[node][neighbor] < distances[neighbor]) {
                console.log("Negative cycle detected, algorithm stopped.");
                return;
            }
        }
    }

    return distances;
}

// Example graph representation as an adjacency list
let graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

let startNode = 'A';
console.log(bellmanFord(graph, startNode)); // Output: { A: 0, B: -1, C: 2, D: -2, E: 1 }
