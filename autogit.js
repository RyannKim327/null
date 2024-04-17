class Edge {
    constructor(src, dest, weight) {
        this.src = src;
        this.dest = dest;
        this.weight = weight;
    }
}

class Graph {
    constructor(numVertices, edges) {
        this.numVertices = numVertices;
        this.edges = edges;
    }

    bellmanFord(source) {
        let distance = new Array(this.numVertices).fill(Infinity);
        distance[source] = 0;

        for (let i = 0; i < this.numVertices - 1; i++) {
            for (let j = 0; j < this.edges.length; j++) {
                let edge = this.edges[j];
                if (distance[edge.src] + edge.weight < distance[edge.dest]) {
                    distance[edge.dest] = distance[edge.src] + edge.weight;
                }
            }
        }

        for (let j = 0; j < this.edges.length; j++) {
            let edge = this.edges[j];
            if (distance[edge.src] + edge.weight < distance[edge.dest]) {
                console.log("Negative weight cycle detected, Bellman-Ford algorithm failed.");
                return;
            }
        }

        return distance;
    }
}

// Example usage
const numVertices = 5;
const edges = [
    new Edge(0, 1, -1),
    new Edge(0, 2, 4),
    new Edge(1, 2, 3),
    new Edge(1, 3, 2),
    new Edge(1, 4, 2),
    new Edge(3, 2, 5),
    new Edge(3, 1, 1),
    new Edge(4, 3, -3)
];

const graph = new Graph(numVertices, edges);
const sourceNode = 0;
const shortestPaths = graph.bellmanFord(sourceNode);

console.log("Shortest paths from node", sourceNode + ":");

for (let i = 0; i < shortestPaths.length; i++) {
    console.log("Node", i, ":", shortestPaths[i]);
}
