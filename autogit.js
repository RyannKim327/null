class Graph {
    constructor(numOfVertices) {
        this.numOfVertices = numOfVertices;
        this.adjacencyList = new Map();
    }

    addEdge(source, destination) {
        if (!this.adjacencyList.has(source)) {
            this.adjacencyList.set(source, []);
        }
        this.adjacencyList.get(source).push(destination);
    }

    topologicalSortUtil(vertex, visited, stack) {
        visited[vertex] = true;
        if (this.adjacencyList.has(vertex)) {
            for (let neighbor of this.adjacencyList.get(vertex)) {
                if (!visited[neighbor]) {
                    this.topologicalSortUtil(neighbor, visited, stack);
                }
            }
        }
        stack.push(vertex);
    }

    topologicalSort() {
        let visited = new Array(this.numOfVertices).fill(false);
        let stack = [];

        for (let i = 0; i < this.numOfVertices; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }

        return stack.reverse();
    }
}

// Example usage
const graph = new Graph(6);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const result = graph.topologicalSort();
console.log(result);
