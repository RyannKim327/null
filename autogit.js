function initialize(graph, source) {
    let distances = {};
    
    for(let vertex in graph) {
        distances[vertex] = vertex === source ? 0 : Infinity;
    }
    
    return distances;
}

function relax(edge, distances) {
    let {source, destination, weight} = edge;
    
    if(distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
    }
}

function bellmanFord(graph, source) {
    let distances = initialize(graph, source);
    let edges = [];
    
    // Flatten the graph edges into a list
    for(let node in graph) {
        for(let neighbor of graph[node]) {
            edges.push({source: node, destination: neighbor[0], weight: neighbor[1]});
        }
    }
    
    // Relax all edges |V| - 1 times
    for(let i = 0; i < Object.keys(graph).length - 1; i++) {
        for(let edge of edges) {
            relax(edge, distances);
        }
    }
    
    // Check for negative weight cycles
    for(let edge of edges) {
        let {source, destination, weight} = edge;
        if(distances[source] + weight < distances[destination]) {
            console.log("Graph contains negative weight cycle");
            return;
        }
    }
    
    return distances;
}

// Test the implementation
let graph = {
    'A': [['B', -1], ['C', 4]],
    'B': [['C', 3], ['D', 2], ['E', 2]],
    'C': [],
    'D': ['B', 1],
    'E': [['D', -3]]
}

let sourceNode = 'A';
console.log(bellmanFord(graph, sourceNode));
