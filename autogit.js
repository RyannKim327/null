class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(source, destination) {
        this.adjList.get(source).push(destination);
        this.adjList.get(destination).push(source);
    }

    depthFirstSearch(startingNode) {
        let visited = {};
        this._dfs(startingNode, visited);
    }

    _dfs(node, visited) {
        visited[node] = true;
        console.log(node);

        for (let neighbor of this.adjList.get(node)) {
            if (!visited[neighbor]) {
                this._dfs(neighbor, visited);
            }
        }
    }
}

// Create a graph
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

console.log('Depth-first traversal:');
graph.depthFirstSearch('A');
