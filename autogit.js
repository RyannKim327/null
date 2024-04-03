function bellmanFord(graph, source) {
    const vertices = Object.keys(graph);
    const distances = {};
    
    // Step 2: Initialize distances
    vertices.forEach(vertex => {
        distances[vertex] = vertex === source ? 0 : Infinity;
    });
    
    // Step 3: Relax edges V-1 times
    for (let i = 0; i < vertices.length - 1; i++) {
        vertices.forEach(vertex => {
            graph[vertex].forEach(edge => {
                const { target, weight } = edge;
                if (distances[vertex] + weight < distances[target]) {
                    distances[target] = distances[vertex] + weight;
                }
            });
        });
    }
    
    // Step 4: Check for negative weight cycles
    vertices.forEach(vertex => {
        graph[vertex].forEach(edge => {
            const { target, weight } = edge;
            if (distances[vertex] + weight < distances[target]) {
                console.log("Negative weight cycle found!");
            }
        });
    });

    return distances;
}

// Example graph representation
const graph = {
    A: [{ target: 'B', weight: -1 }, { target: 'C', weight: 4 }],
    B: [{ target: 'C', weight: 3 }, { target: 'D', weight: 2 }, { target: 'E', weight: 2 }],
    C: [],
    D: [{ target: 'B', weight: 1 }, { target: 'C', weight: 5 }],
    E: [{ target: 'D', weight: -3 }]
};

const distances = bellmanFord(graph, 'A');
console.log(distances);
