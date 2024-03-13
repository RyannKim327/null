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

    depthFirstSearch(startingNode) {
        let visited = {};
        this._dfs(startingNode, visited);
    }

    _dfs(node, visited) {
        visited[node] = true;
        console.log(node);

        let neighbors = this.adjList.get(node);

        for (let i = 0; i < neighbors.length; i++) {
            let currentNode = neighbors[i];
            if(!visited[currentNode]) {
                this._dfs(currentNode, visited);
            }
        }
    }
}

// Example usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

console.log('Depth First Search:');
graph.depthFirstSearch(1);
