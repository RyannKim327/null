class Edge {
    constructor(source, target, weight) {
        this.source = source;
        this.target = target;
        this.weight = weight;
    }
}

function bellmanFord(graph, startNode) {
    let distances = {};
    let prev = {};
    
    // Initialize distances
    for (let node of Object.keys(graph)) {
        distances[node] = Infinity;
        prev[node] = null;
    }
    
    distances[startNode] = 0;
    
    // Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node of Object.keys(graph)) {
            for (let edge of graph[node]) {
                if (distances[node] + edge.weight < distances[edge.target]) {
                    distances[edge.target] = distances[node] + edge.weight;
                    prev[edge.target] = node;
                }
            }
        }
    }
    
    // Check for negative weight cycles
    for (let node of Object.keys(graph)) {
        for (let edge of graph[node]) {
            if (distances[node] + edge.weight < distances[edge.target]) {
                console.log("Graph contains a negative weight cycle");
                return null;
            }
        }
    }
    
    return { distances, prev };
}

// Example usage
let graph = {
    A: [new Edge('A', 'B', -1), new Edge('A', 'C', 4)],
    B: [new Edge('B', 'C', 3), new Edge('B', 'D', 2), new Edge('B', 'E', 2)],
    C: [],
    D: [new Edge('D', 'B', 1), new Edge('D', 'C', 5)],
    E: [new Edge('E', 'D', -3)]
};

let {distances, prev} = bellmanFord(graph, 'A');
console.log('Distances:', distances);
console.log('Previous nodes:', prev);
