function initializeGraph(numVertices) {
    let graph = [];
    for (let i = 0; i < numVertices; i++) {
        graph.push([]);
    }
    return graph;
}

function addEdge(graph, source, destination, weight) {
    graph[source].push({ node: destination, weight: weight });
}

function bellmanFord(graph, numVertices, source) {
    let distance = Array(numVertices).fill(Infinity);
    distance[source] = 0;

    for (let i = 0; i < numVertices - 1; i++) {
        for (let j = 0; j < numVertices; j++) {
            graph[j].forEach(edge => {
                if (distance[j] + edge.weight < distance[edge.node]) {
                    distance[edge.node] = distance[j] + edge.weight;
                }
            });
        }
    }

    for (let i = 0; i < numVertices - 1; i++) {
        for (let j = 0; j < numVertices; j++) {
            graph[j].forEach(edge => {
                if (distance[j] + edge.weight < distance[edge.node]) {
                    console.log("Negative cycle detected. Algorithm stopped.");
                    return;
                }
            });
        }
    }

    return distance;
}

// Example usage
let numVertices = 5;
let graph = initializeGraph(numVertices);

addEdge(graph, 0, 1, -1);
addEdge(graph, 0, 2, 4);
addEdge(graph, 1, 2, 3);
addEdge(graph, 1, 3, 2);
addEdge(graph, 1, 4, 2);
addEdge(graph, 3, 2, 5);
addEdge(graph, 3, 1, 1);
addEdge(graph, 4, 3, -3);

let distances = bellmanFord(graph, numVertices, 0);
console.log(distances);
