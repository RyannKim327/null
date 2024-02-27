class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(node) {
        this.nodes[node] = [];
    }

    addEdge(node1, node2, weight) {
        this.nodes[node1].push({ node: node2, weight: weight });
        this.nodes[node2].push({ node: node1, weight: weight });
    }

    dijkstra(startNode) {
        let distances = {};
        let pq = {};

        for (let node in this.nodes) {
            distances[node] = Infinity;
            pq[node] = Infinity;
        }

        distances[startNode] = 0;
        pq[startNode] = 0;

        while (Object.keys(pq).length !== 0) {
            let minNode = Object.keys(pq).reduce((a, b) => pq[a] < pq[b] ? a : b);
            delete pq[minNode];

            for (let neighbor of this.nodes[minNode]) {
                let totalDistance = distances[minNode] + neighbor.weight;
                if (totalDistance < distances[neighbor.node]) {
                    distances[neighbor.node] = totalDistance;
                    pq[neighbor.node] = totalDistance;
                }
            }
        }

        return distances;
    }
}

// Example usage:
let g = new Graph();
g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addEdge('A', 'B', 1);
g.addEdge('A', 'C', 4);
g.addEdge('B', 'C', 2);
g.addEdge('B', 'D', 5);
g.addEdge('C', 'D', 1);

console.log(g.dijkstra('A'));
