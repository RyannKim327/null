function initializeGraph(numNodes) {
    let graph = [];
    for (let i = 0; i < numNodes; i++) {
        graph.push([]);
    }
    return graph;
}

function addEdge(graph, source, destination, weight) {
    graph[source].push({ node: destination, weight: weight });
}

function bellmanFord(graph, source) {
    let numNodes = graph.length;
    let distances = Array(numNodes).fill(Infinity);
    distances[source] = 0;

    for (let i = 0; i < numNodes - 1; i++) {
        for (let j = 0; j < numNodes; j++) {
            for (let k = 0; k < graph[j].length; k++) {
                let edge = graph[j][k];
                if (distances[j] + edge.weight < distances[edge.node]) {
                    distances[edge.node] = distances[j] + edge.weight;
                }
            }
        }
    }

    for (let j = 0; j < numNodes; j++) {
        for (let k = 0; k < graph[j].length; k++) {
            let edge = graph[j][k];
            if (distances[j] + edge.weight < distances[edge.node]) {
                console.log("Negative cycle detected");
                return;
            }
        }
    }

    return distances;
}

// Example usage
let numNodes = 5;
let graph = initializeGraph(numNodes);

addEdge(graph, 0, 1, 5);
addEdge(graph, 0, 4, 9);
addEdge(graph, 1, 2, 2);
addEdge(graph, 2, 3, 3);
addEdge(graph, 3, 0, 7);
addEdge(graph, 3, 1, 1);
addEdge(graph, 4, 3, 4);

let sourceNode = 0;
let shortestDistances = bellmanFord(graph, sourceNode);
console.log("Shortest distances from node " + sourceNode + ": ", shortestDistances);
