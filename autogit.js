function bellmanFord(graph, source) {
    let distances = {};
    let vertices = Object.keys(graph);

    // Step 1: Initialize distances
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = i === source ? 0 : Infinity;
    }

    // Step 2: Relax all edges V-1 times
    for (let i = 0; i < vertices.length - 1; i++) {
        for (let j = 0; j < vertices.length; j++) {
            let vertex = vertices[j];
            for (let k = 0; k < graph[vertex].length; k++) {
                let neighbor = graph[vertex][k][0];
                let weight = graph[vertex][k][1];
                if (distances[vertex] + weight < distances[neighbor]) {
                    distances[neighbor] = distances[vertex] + weight;
                }
            }
        }
    }

    // Step 3: Check for negative cycles
    for (let i = 0; i < vertices.length - 1; i++) {
        for (let j = 0; j < vertices.length; j++) {
            let vertex = vertices[j];
            for (let k = 0; k < graph[vertex].length; k++) {
                let neighbor = graph[vertex][k][0];
                let weight = graph[vertex][k][1];
                if (distances[vertex] + weight < distances[neighbor]) {
                    // Negative cycle found
                    return "Negative cycle detected";
                }
            }
        }
    }

    return distances;
}

// Example usage
let graph = {
    A: [["B", -1], ["C", 4]],
    B: [["C", 3], ["D", 2], ["E", 2]],
    C: [],
    D: [["B", 1], ["C", 5]],
    E: [["D", -3]]
};

let sourceNode = "A";
console.log(bellmanFord(graph, sourceNode));
