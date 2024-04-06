// Class representing a graph
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1); // for undirected graph
    }

    breadthFirstSearch(startingNode) {
        let visited = {};
        let queue = [];

        visited[startingNode] = true;
        queue.push(startingNode);

        while (queue.length > 0) {
            let currentNode = queue.shift();
            let neighbors = this.adjList.get(currentNode);

            for (let neighbor of neighbors) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
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
graph.addEdge('C', 'E');

graph.breadthFirstSearch('A');
