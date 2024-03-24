class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(v) {
        this.adjList.set(v, []);
    }

    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    dfsUtil(v, visited) {
        visited[v] = true;
        console.log(v);

        let neighbors = this.adjList.get(v);
        for (let neighbor of neighbors) {
            if (!visited[neighbor]) {
                this.dfsUtil(neighbor, visited);
            }
        }
    }

    dfs(startingVertex) {
        let visited = {};
        for (let vertex of this.adjList.keys()) {
            visited[vertex] = false;
        }

        this.dfsUtil(startingVertex, visited);
    }
}

let g = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let vertex of vertices) {
    g.addVertex(vertex);
}

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');

g.dfs('A');
