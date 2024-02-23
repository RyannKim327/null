class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjList[vertex1].push(vertex2);
        this.adjList[vertex2].push(vertex1);
    }

    dfs(startingNode, visited = {}) {
        visited[startingNode] = true;
        console.log(startingNode);

        this.adjList[startingNode].forEach((neighbor) => {
            if (!visited[neighbor]) {
                this.dfs(neighbor, visited);
            }
        });
    }
}

// Test the DFS algorithm
const graph = new Graph();
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(3, 5);

console.log("Depth First Search starting from node 0:");
graph.dfs(0);
