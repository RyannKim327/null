class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    depthFirstSearch(startNode) {
        const visited = {};
        const result = [];

        const dfs = (node) => {
            if (!node) return;

            visited[node] = true;
            result.push(node);

            this.adjList[node].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };

        dfs(startNode);
        return result;
    }
}

// Usage
const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

console.log(graph.depthFirstSearch(1)); // Output: [1, 2, 4, 3]
