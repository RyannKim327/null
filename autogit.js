class Graph {
    constructor(vertices) {
        this.adjacencyList = new Map();
        for (let v of vertices) {
            this.adjacencyList.set(v, []);
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList.get(v1).push(v2);
    }

    topologicalSortUtil(v, visited, stack) {
        visited.add(v);
        for (let neighbor of this.adjacencyList.get(v)) {
            if (!visited.has(neighbor)) {
                this.topologicalSortUtil(neighbor, visited, stack);
            }
        }
        stack.push(v);
    }

    topologicalSort() {
        let visited = new Set();
        let stack = [];

        for (let v of this.adjacencyList.keys()) {
            if (!visited.has(v)) {
                this.topologicalSortUtil(v, visited, stack);
            }
        }

        return stack.reverse();
    }
}

// Example usage
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
let g = new Graph(vertices);
g.addEdge('A', 'C');
g.addEdge('C', 'E');
g.addEdge('E', 'F');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('D', 'F');

let result = g.topologicalSort();
console.log(result);
