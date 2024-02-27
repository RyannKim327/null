function bellmanFord(graph, startNode) {
    let distances = {};
    let parents = {};
    
    // Step 1: Initialize distances and parents
    for (let node in graph) {
        distances[node] = Infinity;
        parents[node] = null;
    }
    distances[startNode] = 0;
    
    // Step 2: Relax edges repeatedly
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let node in graph) {
            for (let neighbor in graph[node]) {
                let newDistance = distances[node] + graph[node][neighbor];
                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    parents[neighbor] = node;
                }
            }
        }
    }
    
    // Step 3: Check for negative cycles
    for (let node in graph) {
        for (let neighbor in graph[node]) {
            let newDistance = distances[node] + graph[node][neighbor];
            if (newDistance < distances[neighbor]) {
                throw new Error('Graph contains a negative cycle');
            }
        }
    }
    
    return { distances, parents };
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
const { distances, parents } = bellmanFord(graph, startNode);

console.log(distances);
console.log(parents);
