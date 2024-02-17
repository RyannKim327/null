// Define a function to initialize the graph with given edges
function initializeGraph(nodes, edges) {
    let graph = {};
    for (let node of nodes) {
        graph[node] = [];
    }

    for (let edge of edges) {
        let [source, dest, weight] = edge;
        graph[source].push({node: dest, weight: weight});
    }

    return graph;
}

// Bellman-Ford Algorithm function
function bellmanFord(nodes, edges, startNode) {
    let distances = {};
    let graph = initializeGraph(nodes, edges);

    // Initialize distances
    for (let node of nodes) {
        distances[node] = node === startNode ? 0 : Infinity;
    }

    // Relax edges repeatedly
    for (let i = 0; i < nodes.length - 1; i++) {
        for (let node of nodes) {
            for (let neighbor of graph[node]) {
                if (distances[node] + neighbor.weight < distances[neighbor.node]) {
                    distances[neighbor.node] = distances[node] + neighbor.weight;
                }
            }
        }
    }

    // Check for negative cycles
    for (let node of nodes) {
        for (let neighbor of graph[node]) {
            if (distances[node] + neighbor.weight < distances[neighbor.node]) {
                console.log("Graph contains a negative cycle.");
                return;
            }
        }
    }

    return distances;
}

// Example Usage
let nodes = ['A', 'B', 'C', 'D', 'E'];
let edges = [
    ['A', 'B', 5],
    ['A', 'C', 3],
    ['B', 'D', 2],
    ['C', 'B', 1],
    ['C', 'D', 1],
    ['D', 'E', 4],
    ['B', 'E', 6]
];

let startNode = 'A';
let distances = bellmanFord(nodes, edges, startNode);

console.log(distances);
