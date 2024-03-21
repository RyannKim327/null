// Define a graph class
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

    // Depth-First Search function
    dfsUtil(v, visited) {
        visited[v] = true;
        console.log(v);

        let neighbors = this.adjList.get(v);

        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
                this.dfsUtil(neighbor, visited);
            }
        }
    }

    dfs(startingNode) {
        let visited = [];
        for (let i = 0; i < this.adjList.size; i++) {
            visited[i] = false;
        }

        this.dfsUtil(startingNode, visited);
    }
}

// Create a new graph
let graph = new Graph();

// Add vertices
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

// Add edges
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);

// Perform depth-first search starting from vertex 0
graph.dfs(0);
