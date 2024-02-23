class Graph {
    constructor() {
        this.adjList = new Map();
    }
    
    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }
    
    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1);
    }
    
    dfs(startingNode) {
        const visited = new Set();
        this._dfsHelper(startingNode, visited);
    }

    _dfsHelper(node, visited) {
        visited.add(node);
        console.log(node);

        const neighbors = this.adjList.get(node);

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this._dfsHelper(neighbor, visited);
            }
        }
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(2, 3);

graph.dfs(0);
