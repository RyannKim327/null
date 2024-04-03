class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
    }

    depthFirstSearch(startingNode) {
        let visited = {};
        this._dfs(startingNode, visited);
    }

    _dfs(vertex, visited) {
        visited[vertex] = true;
        console.log(vertex);
        
        let neighbors = this.adjList.get(vertex);

        for (let neighbor of neighbors) {
            if (!visited[neighbor]) {
                this._dfs(neighbor, visited);
            }
        }
    }
}

// Example usage
let graph = new Graph();
let nodes = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let node of nodes) {
    graph.addVertex(node);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

graph.depthFirstSearch('A');
