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
        this.adjList[vertex1].push(vertex2);
        this.adjList[vertex2].push(vertex1);
    }

    depthFirstSearch(start) {
        const visited = {};
        const result = [];

        const dfs = (vertex) => {
            if (!vertex) {
                return null;
            }

            visited[vertex] = true;
            result.push(vertex);

            this.adjList[vertex].forEach(neighbor => {
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
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');

const dfsResult = graph.depthFirstSearch('A');
console.log(dfsResult);
