// Define a Graph class to represent the graph
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
    }

    // Depth-first search algorithm
    dfs(start) {
        let visited = {};
        this._dfsHelper(start, visited);
    }

    _dfsHelper(v, visited) {
        visited[v] = true;
        console.log(v);

        let neighbors = this.adjList.get(v);

        for (let neighbor of neighbors) {
            if (!visited[neighbor]) {
                this._dfsHelper(neighbor, visited);
            }
        }
    }
}

// Create a new graph
let graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(2, 6);

// Perform DFS from vertex 0
graph.dfs(0);
