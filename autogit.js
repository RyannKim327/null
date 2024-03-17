class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            throw new Error("Vertex not found in the graph");
        }

        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    depthFirstSearch(start) {
        const visited = {};
        const result = [];

        const dfs = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };

        dfs(start);

        return result;
    }
}

// Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
console.log(graph.depthFirstSearch("A"));
