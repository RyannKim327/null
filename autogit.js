// Bellman-Ford Algorithm for finding shortest paths in a graph

function bellmanFord(graph, startNode) {
    let distances = {};
    let parents = {};
    
    // Initialize distances to all nodes as Infinity, except the start node
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;
    
    // Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            let neighbors = graph[node];
            for (let neighbor in neighbors) {
                if (distances[node] + neighbors[neighbor] < distances[neighbor]) {
                    distances[neighbor] = distances[node] + neighbors[neighbor];
                    parents[neighbor] = node;
                }
            }
        }
    }
    
    // Check for negative cycles
    for (let node in graph) {
        let neighbors = graph[node];
        for (let neighbor in neighbors) {
            if (distances[node] + neighbors[neighbor] < distances[neighbor]) {
                console.log('Graph contains negative cycle');
                return;
            }
        }
    }
    
    return { distances, parents };
}

// Example Graph
let graph = {
    A: { B: -1, C: 4 },
    B: { C: 3, D: 2, E: 2 },
    C: {},
    D: { B: 1, C: 5 },
    E: { D: -3 }
};

let startNode = 'A';

let result = bellmanFord(graph, startNode);
console.log(result.distances);
console.log(result.parents);
