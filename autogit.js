class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(source, destination) {
        this.adjList[source].push(destination);
        // For undirected graph, you may also want to add the reverse edge
        // this.adjList[destination].push(source);
    }

    dfs(startVertex) {
        const visited = {};
        this._dfsHelper(startVertex, visited);
    }

    _dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        for (const neighbor of this.adjList[vertex]) {
            if (!visited[neighbor]) {
                this._dfsHelper(neighbor, visited);
            }
        }
    }
}

// Create a graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

// Perform DFS starting from vertex 'A'
console.log('DFS traversal:');
graph.dfs('A');
