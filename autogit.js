class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2);
        this.adjList[v2].push(v1); // For undirected graph
    }

    dfs(start) {
        const visited = {};
        this._dfsHelper(start, visited);
    }

    _dfsHelper(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);

        for (let neighbor of this.adjList[vertex]) {
            if (!visited[neighbor]) {
                this._dfsHelper(neighbor, visited);
            }
        }
    }
}

// Example usage
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
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log('Depth First Search starting from vertex A:');
graph.dfs('A');
